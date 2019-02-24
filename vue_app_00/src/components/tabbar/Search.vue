<template>
  <div class="app-search">
    <div class="mui-card">
			<div class="mui-card-header">
        <input type="text" name="keyword" v-model="keyword" placeholder="关键字">
      </div>
      <div class="mui-card-header">
        <input type="number" name="low" placeholder="价格下限">
      </div>
      <div class="mui-card-header">
        <input type="number" name="high" placeholder="价格上限">
      </div>
      <div class="mui-card-header">
        <mt-button @click="handleSearch">搜索</mt-button>
      </div>
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<ul class="mui-table-view">
				    <li class="mui-table-view-cell mui-media" v-for="item in list" :key="item.lid">
					    <a href="javascript:;">
						    <img class="mui-media-object mui-pull-left" src="">
						    <div class="mui-media-body">
							    {{item.lname}}
							    <p class='mui-ellipsis'>{{item.price}}</p>
						    </div>
					    </a>
				    </li>
          </ul>
				</div>
			</div>
		</div>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        keyword:"",
        low:0,
        high:0,
        list:[]
      }
    },
    methods:{
      handleSearch(){
        var keyword=this.keyword;
        var low=this.low;
        var high=this.high;
        //console.log("|"+keyword+"|"+low+"|"+high)
        if(high==0){
          high=2100000000;
        }
        //1.获取三个参数
        var url="http://127.0.0.1:3000/search?keyword="+keyword+"&low="+low+"&high="+high;
        this.axios.get(url).then(result=>{
          this.list=result.data.data;
        })
        //var url="SELECT"
        //2.关键词
        //3.下限 0
        //4.上限 2100000000
        //5.发送ajax
      }
    }
  }
</script>
<style>
  
</style>