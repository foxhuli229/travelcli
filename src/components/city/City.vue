<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list :cities="cities" :hot="hotCities"></city-list>
    <city-aplhabet :cities="cities"></city-aplhabet>
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
          cities: [],
          hotCities: []
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
            this.cities = data.cities;
            this.hotCities = data.hotCities;
        }
    }
  },
  mounted() {
      this.getCityInfo();
  }
};
</script>

<style lang="stylus" scoped></style>