<template>
  <div id="home">
    <nav-bar class="home_nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <scroll class="content">
    <div class="home_swiper">
      <van-swipe class="my-swipe" :autoplay="1000" indicator-color="white">
        <van-swipe-item v-for="(image,index) in banners" :key="index">
          <img :src="image.image" alt="">
        </van-swipe-item>
      </van-swipe>
    </div>
    <recommend :recommends='recommends'></recommend>
    <popular-view :recommends='recommends'></popular-view>
    <tab-control class="tab_control" :titles='titles'
      @tabClick='tabClick'></tab-control>
    <goods-list :goods="showGoods"></goods-list>
    </scroll>
    <back-top></back-top>
  </div>
</template>

<script>
import Recommend from "./homeChild/recommend";
import PopularView from './homeChild/PopularView'

import NavBar from "../../components/common/navbar/NavBar";
import Scroll from '../../components/common/scroll/Scroll'
import BackTop from '../../components/content/backTop'
import TabControl from '../../components/content/tabcontrol/TabContral'
import GoodsList from '../../components/content/goods/GoodsList'

import { Swipe, SwipeItem,Lazyload } from "vant";
import { getHomeMultidata, getHomeGoods } from "../../network/home";
export default {
  components: {
    NavBar,
    Recommend,
    PopularView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
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
    num1: [{name: '1'}, 2, 3, 4, 5],
    currentType: 'pop'
    }
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list
    }

  },
  created() {
    this.getHomeMultidata()
    // 请求商品数据
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  methods: {
    // 上部分数据
    async getHomeMultidata() {
      const { data, success } = await getHomeMultidata()
      if (success === true) {
        this.banners = data.banner.list;
        this.recommends = data.recommend.list;
      }
    },
    // 获取商品数据
    getHomeGoods(type) {
      const page = this.goods[type].page + 1
      getHomeGoods(type, page)
      .then(res => {
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page+= 1
      })
      console.log('goods',this.goods);
    },
    tabClick(index) {
      switch(index) {
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
      console.log(this.currentType);
      console.log(this.goods[this.currentType].list);

    }
  },
};
</script>

<style>
#home{
  /* padding-top: 44px; */
  height: 100vh;
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
.content{
  height: calc(100%-98px);
  /* overflow: hidden; */
}
</style>