// 周末去哪儿
<template>
  <div class="recommend">
    <h2 class="week-title">周末去哪儿</h2>

    <ul class="rec-list">
      <li class="border-bottom item" v-for="(item, index) of list" :key="index">
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
  props:{
    list: Array,
  },
  name: "HomeWeekgloging",
  data() {
    return {
      
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


