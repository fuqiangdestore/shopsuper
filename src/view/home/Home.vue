<template>
  <div id="home">
    <nav-bar class="home_nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <div class="home_swiper">
      <van-swipe class="my-swipe" :autoplay="1000" indicator-color="white">
        <van-swipe-item v-for="(image,index) in banners" :key="index">
          <img :src="image.image" alt="">
        </van-swipe-item>
      </van-swipe>
    </div>
    <recommend :recommends='recommends'></recommend>
    <popular-view :recommends='recommends'></popular-view>
    <tab-control class="tab_control" :titles='titles'></tab-control>
    <ul>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
    </ul>
  </div>
</template>

<script>
import Recommend from "./homeChild/recommend";
import PopularView from './homeChild/PopularView'

import NavBar from "../../components/common/navbar/NavBar";
import TabControl from '../../components/content/tabcontrol/TabContral'

import { Swipe, SwipeItem,Lazyload } from "vant";
import { getHomeMultidata, getHomeGoods } from "../../network/home";
export default {
  components: {
    NavBar,
    Recommend,
    PopularView,
    TabControl,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Lazyload.name]: Lazyload
  },
  data() {
    return {
      banners: [],
      recommends: [],
      popular: [],
      titles: ["流行", "新款", "精选"],
      goods: {
        'pop': {
          page: 0, list: []
        },        
        'new': {
          page: 0, list: []
        },        
        'sell': {
          page: 0, list: []
        },
    },
    num1: [{name: '1'}, 2, 3, 4, 5]
    };
  },
  computed: {

  },
  mounted() {

  },
  methods: {
    getHomeGoods(type) {
      const page = this.goods[type].page + 1
      getHomeGoods(type, page)
      .then(res => {
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page+= 1
        123123
      })
    },
    getHomeMultidata() {
    getHomeMultidata().then(res => {
      const { data, success } = res;
      if (success === true) {
        this.banners = data.banner.list;
        this.recommends = data.recommend.list;
      }
    });
    }


  },
  created() {
    this.getHomeMultidata()
    // 请求商品数据
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')

  }
};
</script>

<style>
#home{
  padding-top: 44px;
}
.home_nav {
  background: pink;
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
}
.home_swiper {
  width: 100%;
  height: 200px;
}
.home_swiper img{
  width: 100%;
  height: 100%;
  }
  .tab_control{
    position: sticky;
    top: 44px;

  }
</style>