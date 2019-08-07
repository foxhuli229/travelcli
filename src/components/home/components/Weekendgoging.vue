// 周末去哪儿
<template>
  <div class="recommend">
    <h2 class="week-title">周末去哪儿</h2>

    <ul class="rec-list">
      <li class="border-bottom item" v-for="(item, index) of recommendList" :key="index">
        <a :href="item.linkUrl">
          <div class="rec-list-imgcon image-ready">
            <img :src="item.imgUrl" :alt="item.title" />
          </div>

          <!-- 内容 -->
          <div class="rec-list-info">
            <p class="product-name">{{item.title}}</p>
            <p class="product-desc">{{item.desc}}</p>
          </div>
        </a>
      </li>
    </ul>

    <p style="height: 3rem;"></p>
  </div>
</template>

<script>
import { Rate } from "vant";
export default {
  components: {
    [Rate.name]: Rate
  },
  name: "HomeWeekgloging",
  data() {
    return {
      recommendList: [
        {
          linkUrl:
            "http://piao.qunar.com/touch/toSku.htm?skuId=768&skuName=%E9%87%8D%E5%BA%86%E5%A4%9C%E6%99%AF%E5%A4%A7%E8%B5%8F&cat=from_area%3Dts_sku%26from_index%3D0%26from_value%3D%25E9%2587%258D%25E5%25BA%2586%25E5%25A4%259C%25E6%2599%25AF%25E5%25A4%25A7%25E8%25B5%258F%26dist_city%3D%25E9%2587%258D%25E5%25BA%2586",
          imgUrl:
            "http://img1.qunarzz.com/sight/source/1812/4c/33ad31d025fef.jpg_r_640x214_7821b813.jpg",
          title: "重庆夜景大赏",
          desc: "享巴渝特色，赏两江风光，感受不一样的重庆夜景！"
        },
        {
          linkUrl:
            "http://touch.piao.qunar.com/touch/detail.htm?id=3918984278&from=as_recommend_sight",
          imgUrl:
            "http://img1.qunarzz.com/sight/source/1505/53/4bcd11cc3a5374.jpg_r_640x214_988a4cee.jpg",
          title: "重庆两江夜游",
          desc: "重庆，非去不可"
        }
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/mixins.styl';

.week-title {
  height: 0.8rem;
  padding-left: 0.26rem;
  line-height: 0.8rem;
  color: #212121;
}

.rec-list li {
    margin-bottom: .1rem;
}

.rec-list {
  .item a {
    overflow: hidden;
  }

  .image-ready img {
    opacity: 1;
  }

  .rec-list-imgcon {
    overflow: hidden;
    height: 0;
    padding-bottom: 37.4375%;
  }

  .rec-list-imgcon img {
    transition: opacity 400ms;
    width: 100%;
  }

  .rec-list-info {
    padding: 0.14rem 0.2rem 0.2rem 0.2rem;
    min-width: 0;
    padding-right: 1.4rem;
    background-color: #ffffff;

    .product-name {
      color: #212121;
      font-size: 0.28rem;
      line-height: 0.48rem;
      ellipsis();
    }

    .product-desc {
      color: #616161;
      font-size: 0.24rem;
      line-height: 0.42rem;
      ellipsis();
    }
  }
}
</style>


