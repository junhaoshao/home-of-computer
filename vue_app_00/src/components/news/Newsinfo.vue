<template>
  <div class="app-newsinfo">
    <h3>{{info.title}}</h3>
    <textarea>
      {{info.content}}
    </textarea>
    <h3>{{info.ctime | datatimeFilter}}</h3>
    <h3>点击{{info.point}}次数</h3>
    <comment-box :id="id"></comment-box>
  </div>
</template>
<script>
  import comment from '../sub/Comment.vue'
  export default{
    created(){
      //console.log("接收新闻列表参数");
      //console.log(this.$route.query.id);
      this.getNewsInfo();
    },
    data(){
      return{
        id:this.$route.query.id,
        info:{}
      }
    },
    methods:{
      getNewsInfo(){
        var id=this.$route.query.id;
        this.$http.get("NewsInfo?id="+id).then(result=>{
          //console.log(result.body.data[0]);
          this.info=result.body.data[0];
        })
      }
    },
    components:{
      "comment-box":comment
    }
  }
</script>
<style>
  
</style>