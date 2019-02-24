<template>
  <div class="app-newslist">
    <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in list" :key="item.id">
          <router-link :to="'/Newsinfo?id='+item.id">
            <a href="javascript:;">
              <img class="mui-media-object mui-pull-left" :src="item.img_url">
              <div class="mui-media-body">
                {{item.title}}
                <p class='mui-ellipsis'>
                  <span>{{item.ctime | datatimeFilter}}</span>
                  <span>点击:{{item.point}}次</span>
                </p>
              </div>
            </a>
          </router-link>
				</li>
      </ul>
      <mt-button type="primary" size="large" @click="getMore">
        加载更多
      </mt-button>
  </div>
</template>
<script>
  export default{
    data(){
      return{
        list:[],
        pno:0,
        pageSize:7,
        pageCount:1
      }  
      },
      methods:{
        getMore(){
          this.pno++;
          //创建变量保存是否有当前页条件
          //true 有数据 false 无数据
          var hasMore=this.pno<=this.pageCount;
          //如果没有页数，停止函数执行
          if(!hasMore){return}
          var url="newslist?pno="+this.pno+"&pageSize="+this.pageSize;
          this.$http.get(url).then(
            result=>{
              //console.log(result.body);
              //this.list=result.body.data;
              var rows=this.list.concat(result.body.data);
              this.list=rows;
              this.pageCount=result.body.pageCount;
            }
          )
        }
      },
      created(){
        this.getMore();
      }
    
  }
</script>
<style>
  .app-newslist .mui-table-view li .mui-ellipsis{
    display:flex;
    font-size:12px;
    color:#226aff;
    justify-content:space-between;
  }
</style>