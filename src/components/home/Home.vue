<template>
  <div class="home">
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <home-weekSearch></home-weekSearch>
    <home-recommend></home-recommend>
    <home-weekgloging></home-weekgloging>
  </div>
</template>

<script>
import HomeHeader from "./components/Header";
import HomeSwiper from "./components/Swiper";
import HomeIcons from "./components/Icons";
import HomeWeekSearch from "./components/WeekSearch";
import HomeRecommend from "./components/Recommend";
import HomeWeekgloging from "./components/Weekendgoging";
import axios from "axios";
export default {
  name: "Home",
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekSearch,
    HomeWeekgloging
  },
  mounted() {
    this.getHomeInfo();
  },
  methods: {
    getHomeInfo() {
      axios
        .get("/api/index.json")
        .then(function(response) {
          this.getHomeInfoSucc(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    getHomeInfoSucc(res) {
      console.log(res);
    }
  }
};
</script>

<style>
.home {
  background-color: #f5f5f5;
}
</style>

