<template>
  <div>
    <city-header></city-header>
    <city-search 
        :cities="cities" ></city-search>
    <city-list 
        :cities="cities" 
        :hot="hotCities"
        :letter="letter"></city-list>
    <city-aplhabet 
        :cities="cities"
        @change="handleLetterChange"></city-aplhabet>
  </div>
</template>

<script>
import axios from "axios";
import CityHeader from "@/components/city/components/Header";
import CitySearch from "@/components/city/components/Search";
import CityList from "@/components/city/components/List";
import CityAplhabet from "@/components/city/components/Aplhabet";
export default {
  name: "City",
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAplhabet
  },
  data() {
      return {
          cities: {},
          hotCities: [],
          letter: ''
      }
  },
  methods: {
    getCityInfo() {
        axios.get('/api/city.json')
            .then(this.handleGetCityInfoSucc)
    },
    handleGetCityInfoSucc(res) {
        res = res.data;
        if(res.ret && res.data){
            const data = res.data;
            this.hotCities = data.hotCities;
            this.cities = data.cities;
            // this.objOfValueToArr(data.cities);
        }
    },
    //object转array数组
    objOfValueToArr(object) {
        let arr = [];
        let i = 0;
        for (let item in object) {
            arr[i] = object[item];
            i++;
        }
        return this.cities = arr;
    },
    //兄弟之间的监听
    handleLetterChange(letter) {
        this.letter = letter;
        // console.log(letter);
    }
  },
  mounted() {
      this.getCityInfo();
  }
};
</script>

<style lang="stylus" scoped></style>