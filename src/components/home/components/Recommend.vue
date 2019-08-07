// 热销推荐
<template>
  <div class="recommend">
    <div class="recommend-title image-ready">
      <img
        class="rec-title-img"
        src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png"
        alt="猜你喜欢"
      />
      <span class="rec-title">猜你喜欢</span>
    </div>

    <ul class="rec-list">
      <li class="border-bottom item" v-for="(item, index) of recommendList" :key="index">
        <a :href="item.linkUrl">
          <div class="rec-list-imgcon image-ready">
            <img
              :src="item.imgUrl"
              :alt="item.title"
            />
          </div>

          <div
            class="rec-list-tag"
            :style="item.linkbgUrl"
          >{{item.linktitle}}</div>

          <!-- 内容 -->
          <div class="rec-list-info">
            <div class="rec-list-title">{{item.title}}</div>
            <div class="rec-list-comment">
              <!-- vant评分 -->
              <van-rate
                class="vantrate"
                v-model="item.rate"
                color="#ffb436"
                void-color="#ffb436"
                :size="12"
                readonly
              />
              <span class="rec-comment-num">{{item.commentNum}}</span>
            </div>
            <div class="rec-list-price">
              <span class="rec-price">
                ¥
                <em class="rec-price-num">{{item.priceNum}}</em>
              </span>起
              <span class="rec-address">{{item.address}}</span>
            </div>

            <div class="rec-feature" v-if="item.comment != '' ">
              <div class="rec-ellipsis2">{{item.comment}}</div>
            </div>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { Rate } from "vant";
export default {
  components: {
    [Rate.name]: Rate
  },
  name: "HomeRecommend",
  data() {
    return {
      recommendList: [
        {
          linkUrl:
            "http://touch.piao.qunar.com/touch/detail.htm?id=33744&from=as_recommend_sight",
          linkbgUrl:
            "background-image:url(https://img1.qunarzz.com/piao/fusion/1802/20/2ba6d10b17972e02.png)",
          linktitle: "随买随用",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/1805/93/93a185e4b726bda0a3.img.jpg_200x200_ea61f3c5.jpg",
          title: "佛影峡生态旅游区",
          rate: 5,
          commentNum: "967条评论",
          priceNum: 68,
          address: "巴南区",
          comment: ""
        },
        {
          linkUrl:
            "http://touch.piao.qunar.com/touch/detail.htm?id=3918984278&from=as_recommend_sight",
          linkbgUrl:
            "background-image:url(https://img1.qunarzz.com/piao/fusion/1802/52/b9080e45b69b4f02.png)",
          linktitle: "可订今日",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/1805/93/93a185e4b726bda0a3.img.jpg_200x200_ea61f3c5.jpg",
          title: "重庆两江夜游",
          rate: 4,
          commentNum: "17076条评论",
          priceNum: 138,
          address: "渝中区",
          comment: "重庆本月收藏Top5╰(￣▽￣)╭"
        }
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/mixins.styl';

.recommend {
  margin-top: 0.2rem;
  background: #ffffff;
}

.recommend-title {
  position: relative;
  padding: 0.24rem 0 0.26rem;

  .rec-title-img {
    display: inline-block;
    overflow: hidden;
    width: 0.3rem;
    height: 0.3rem;
    margin-left: 0.2rem;
    vertical-align: top;
  }

  .image-ready img {
    opacity: 1;
  }

  .rec-title {
    display: inline-block;
    margin-left: 0.08rem;
    height: 0.44rem;
    color: #212121;
    font-size: 0.32rem;
    line-height: 0.44rem;
  }
}

.rec-list {
  margin-left: 0.24rem;

  .item a {
    display: flex;
    overflow: hidden;
    padding: 0.2rem 0;
  }

  .rec-list-imgcon {
    overflow: hidden;
  }

  .rec-list-imgcon img {
    width: 2rem;
    height: 2rem;
  }

  .rec-list-tag {
    position: absolute;
    top: 0.2rem;
    left: 0;
    width: 1.02rem;
    height: 0.38rem;
    background-size: 100%;
    color: #fff;
    font-size: 0.2rem;
    line-height: 0.38rem;
    text-indent: 0.04rem;
  }

  .rec-list-info {
    flex: 1;
    padding-left: 0.22rem;
    min-width: 0;
  }

  .rec-list-title {
    margin-top: 0.26rem;
    height: 0.44rem;
    color: #212121;
    font-size: 0.32rem;
    line-height: 0.44rem;
    ellipsis();
  }

  .rec-list-comment {
    margin-top: 0.14rem;
    height: 0.34rem;

    .vantrate {
      display: inline-block;
    }

    .rec-comment-num {
      display: inline-block;
      color: #616161;
      font-size: 0.24rem;
      line-height: 0.34rem;
      vertical-align: text-bottom;
      margin-left: 0.2rem;
    }
  }

  .rec-list-price {
    position: relative;
    margin-top: 0.22rem;
    color: #616161;
    font-size: 0.24rem;
    line-height: 0.4rem;

    .rec-price {
      color: #ff8300;
    }

    .rec-price-num {
      font-size: 0.4rem;
    }

    .rec-address {
      position: absolute;
      right: 0.24rem;
      bottom: 0;
    }
  }

  .rec-feature {
    display: inline-block;
    margin-top: 0.48rem;
    margin-right: 0.24rem;
    background: #fff9f9;
    padding: 0.04rem 0.1rem;
    color: #f55;
    font-size: 0.24rem;
    line-height: 0.34rem;

    .rec-ellipsis2 {
      ellipsis();
    }
  }
}
</style>

