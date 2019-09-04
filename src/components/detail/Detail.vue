<template>
  <div>
    <deatil-banner
      :singtName="singtName"
      :bannerImg="bannerImg"
      :gallaryImgs="gallaryImgs"></deatil-banner>
    <deatil-header></deatil-header>
    <deatil-list :list="list"></deatil-list>
    <div class="conent"></div>
  </div>
</template>

<script>
import DeatilBanner from './components/Banner'
import DeatilHeader from './components/Header'
import DetailList from './components/List'
import axios from 'axios'
export default {
    name: 'Detail',
    components: {
        deatilBanner: DeatilBanner,
        DeatilHeader: DeatilHeader,
        DeatilList: DetailList
    },
    data () {
      return {
        singtName: '',
        bannerImg: '',
        gallaryImgs: [],
        list: []
      }
    },
    methods: {
      getDetailInfo () {
        axios({
          url: '/api/detail.json',
          methods: "get",
          params: {
            "id": this.$route.params.id //获取route下的id值
          }
        }).then(res => {
           if (res.data.code === 200) {
            this.getDetailInfoSucc(res.data);
          }
        })
      },
      getDetailInfoSucc (res) {
        console.log(res)
        if (res.ret && res.code === 200){
          const data = res.data;
          this.singtName = data.sightName
          this.bannerImg = data.bannerImg
          this.gallaryImgs = data.gallaryImgs
          this.list = data.categoryList
        }
      }
    },
    // el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子y5
    mounted () {
      this.getDetailInfo();
    },

}
</script>

<style lang="stylus" scoped>
.conent {
  height: 8rem;
}
</style>