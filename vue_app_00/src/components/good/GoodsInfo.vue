<template>
  <div class="app-goodsinfo">
    <!--轮播图卡片-->
    <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<swipe-box :list="list"></swipe-box>
					</div>
				</div>
			</div>
      <!--商品信息-->
      <div class="mui-card">
				<div class="mui-card-header">商品信息</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p class="price">
              市场价：<del>2999.00</del>
              销售价：<span class="now">2111.00</span>
            </p>
            <h5 class="mui-content-padded">购买数量</h5>
            <div class="mui-numbox">
              <button class="mui-btn mui-btn-numbox-minus" type="button" @click="goodSub">-</button>
              <input class="mui-input-numbox" type="number" v-model="val"/>
              <button class="mui-btn mui-btn-numbox-plus" type="button" @click="goodAdd">+</button>
            </div>
					</div>
				</div>
				<div class="mui-card-footer">
          <mt-button type="primary" size="small">立即购买</mt-button>
          <mt-button type="danger" size="small" @click="addCart">加入购物车</mt-button>
        </div>
			</div>
      <!--商品参数-->
      <div class="mui-card">
				<div class="mui-card-header">商品参数</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						包含页眉页脚的卡片，页眉常用来显示面板标题，页脚用来显示额外信息或支持的操作（比如点赞、评论等）
					</div>
				</div>
				<div class="mui-card-footer">页脚</div>
			</div>
  </div>
</template>
<script>
//1.引入轮播图子组件
import swipe from "../sub/swipe.vue"
import {Toast} from 'mint-ui'
  export default {
    created() {
      //console.log(this.$route.params.id);
      this.getImages();
    },
    data(){
      return {
        nid:this.$route.params.id,
        list:[],
        val:1,
      }
    },
    methods:{
      addCart(){
        //1.获取参数 pid count uid
        var pid=this.$route.params.id;
        var count=this.val;
        var uid=3;
        //2.发送请求
        var url="http://127.0.0.1:3000/addCart?pid="+pid+"&count="+count+"&uid="+uid;
        this.axios.get(url).then(result=>{
          if(result.data.code == 1){
            this.$store.commit("increment",parseInt(count));
            Toast("购物车添加成功")
          }else{
            Toast("购物车添加失败")
          }
        });
        //3.如果请示成功提示
      },
      goodAdd(){
        if(this.val<999)
           this.val++;    
      },
      goodSub(){
        if(this.val>0)
          this.val--;
      },
      getImages(){
        var url = "http://127.0.0.1:3000/imagelist";
       this.axios.get(url).then(result=>{
         //console.log(result.data)
         this.list = result.data;
       })
      }
    },
    components:{
      "swipe-box":swipe
    }
  }
  //1.创建子组件
  //2.图片轮播
  //3.list
</script>
<style>
  
</style>