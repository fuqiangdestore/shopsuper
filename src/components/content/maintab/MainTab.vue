<template>
      <tab-bar>
      <tabbar-item path="/home">
          <img slot="tab_icon" src="../../../assets/img/tabbar/home.svg" alt="">
          <img slot="tab_icon_active" src="../../../assets/img/tabbar/home_active.svg" alt="">
          <div slot="tab_text">首页</div>
      </tabbar-item>
      <tabbar-item path="/category">
          <div slot="tab_icon"><img src="../../../assets/img/tabbar/category.svg" alt=""></div>
          <img slot="tab_icon_active" src="../../../assets/img/tabbar/category_active.svg" alt="">
          <div slot="tab_text">分类</div>
      </tabbar-item>
      <tabbar-item path="/cart">
          <div slot="tab_icon"><img src="../../../assets/img/tabbar/cart.svg" alt=""></div>
          <img slot="tab_icon_active" src="../../../assets/img/tabbar/cart_active.svg" alt=""> 
         <div slot="tab_text">购物车</div>
      </tabbar-item>     
      <tabbar-item path="/profile" activeColor='blue'>
          <div slot="tab_icon"><img src="../../../assets/img/tabbar/profile.svg" alt=""></div>
          <img slot="tab_icon_active" src="../../../assets/img/tabbar/profile_active.svg" alt="">
          <div slot="tab_text">我的</div>
      </tabbar-item>
    </tab-bar>
</template>

<script>
import TabBar from '../../common/tabbar/TabBar'
import TabbarItem from '../../common/tabbar/TabbarItem'
export default {
  components: {
    TabBar,
    TabbarItem
  }
}
</script>

<style>

</style>