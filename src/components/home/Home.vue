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
import { mapState } from "vuex";
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
  data () {
    return {
      // city: "", 更换为使用vuex，前端记录用户选择的当前城市
      swiperList: [],
      iconsList: [],
      weekimgList: [],
      recommendList: [],
      weekendgogingList: [],
      lastCity: "" //上次存放城市的变量
    };
  },
  created () {
    console.log("created");
    this.getHomeInfo();
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    getHomeInfo () {
      this.$axios({
        url: "/api/index.json",
        methods: "get",
        params: {
          "city": this.city
        }
      }).then(res => {
        if (res.data.code === 200) {
          console.log(res);
          this.getHomeInfoSucc(res.data);
        }
      });
    },
    getHomeInfoSucc (res) {
      if (res.data) {
        const data = res.data;
        this.swiperList = data.swiperList; //轮播
        this.iconsList = data.iconsList; //icon图标
        this.weekimgList = data.weekimgList; //本周热门推荐
        this.recommendList = data.recommendList; //猜你喜欢
        this.weekendgogingList = data.weekendgogingList; //周末去哪儿
      }
    },
    // el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子。
    mounted() {
      this.lastCity = this.city;
      this.getHomeInfo();
      console.log("mounted");
    }, 
    //当采用keep-alive属性后，产生此钩子函数
    activated () {
       console.log("activated");
       if (this.lastCity !== this.city) {
         this.lastCity = this.city;
         this.getHomeInfo();
       }
    },
  }
};
</script>

<style>
.home {
  background-color: #f5f5f5;
}
</style>

