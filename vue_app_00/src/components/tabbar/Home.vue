<template>
  <div class="app-home">
    <!--2.轮播图-->
    <mt-swipe :auto="3000">
      <mt-swipe-item v-for="item in list" :key="item.id">
        <img :src="item.img_url">
      </mt-swipe-item>
    </mt-swipe>
    <!--3.九宫格-->
      <ul class="mui-table-view mui-grid-view mui-grid-9">
                  <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/NewsList">
                          <img src="../../img/menu1.png">
                          <div class="mui-media-body">新闻资讯</div></router-link></li>
                  <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                          <img src="../../img/menu2.png">
                          <div class="mui-media-body">点餐</div></a></li>
                  <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#"><router-link to="/GoodsList">
                          <img src="../../img/menu3.png">
                          <div class="mui-media-body">商品</div></router-link></a></li>
                  <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                          <img src="../../img/menu4.png">
                          <div class="mui-media-body">手机支付</div></a></li>
                  <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                          <img src="../../img/menu5.png">
                          <div class="mui-media-body">确认</div></a></li>
                  <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                          <img src="../../img/menu6.png">
                          <div class="mui-media-body">菜单</div></a></li>
              </ul> 
    <!--4.tabbar-->
  </div>
</template>
<script>
  export default{
    created(){
      this.getImages();
    },
    methods:{
      getImages(){
        this.$http.get("imagelist").then(
          result=>{
            //console.log(result.body);
            this.list=result.body;
          }
        )
      }
    },
    data(){
      return{
        list:[
          
        ]
      }
    }
  }
</script>
<style>
  .app-home .mint-swipe{
    list-style: none;
      background: #333;
      padding-left: 0;
      height:150px;
      
  }
  .app-home .mint-swipe img{
      width:100%;
  }
  .app-home ul li img{
    width:40px;
    height:40px;
  }
  .app-home .mui-grid-view.mui-grid-9{
    background-color:#fff;
  }
  .app-home .mui-grid-view.mui-grid-9 li{
    border:0;
  }
</style>