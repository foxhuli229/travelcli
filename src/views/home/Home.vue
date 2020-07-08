<template>
  <div class="home">
    <home-header></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconsList"></home-icons>
    <home-weekSearch :list="weekimgList"></home-weekSearch>
    <home-recommend :list="recommendList"></home-recommend>
    <home-weekgloging :list="weekendgogingList"></home-weekgloging>
  </div>
</template>

<script>
import HomeHeader from "./components/Header";
import HomeSwiper from "./components/Swiper";
import HomeIcons from "./components/Icons";
import HomeWeekSearch from "./components/WeekSearch";
import HomeRecommend from "./components/Recommend";
import HomeWeekgloging from "./components/Weekendgoging";

import { useStore } from "vuex";
import { ref, onMounted, computed } from "vue";


export default {
  name: "Home",
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekSearch,
    HomeWeekgloging,
  },
  setup() {
    const swiperList = ref([]);
    const iconsList = ref([]);
    const weekimgList = ref([]);
    const recommendList = ref([]);
    const weekendgogingList = ref([]);

    const store = useStore();
    const city = store.state.city; //城市

    //获取城市信息
    async function getHomeInfo() {
      console.log("11");
      
      let res = await axios.get('/api/index.json?city=' + city.value);
      res = res.data;
      if(res.code === 200) {
        const data = res.data;
        swiperList.value = data.swiperList; //轮播
        iconsList.value = data.iconsList; //icon图标
        weekimgList.value = data.weekimgList; //本周热门推荐
        recommendList.value = data.recommendList; //猜你喜欢
        weekendgogingList.value = data.weekendgogingList; //周末去哪儿
      }
    }

    onMounted(()=>{
      getHomeInfo()
    })

    return {swiperList, iconsList, weekimgList, recommendList, weekendgogingList}
  }
 
};
</script>

<style>
.home {
  background-color: #f5f5f5;
}
</style>
