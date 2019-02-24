<template>
  <div class="app-comment">
    <h3>评论子组件</h3>
    <!--发表评论区域-->
    <textarea placeholder="请吐槽最多120个字" maxlength="120" v-model="msg"></textarea>
    <mt-button size="large" @click="postComment">发表评论</mt-button>
    <!--显示评论区域-->
    <div class="cmt-list">
      <div class="cmt-item" v-for="(item,i) in list" :key="item.id">
        <div class="cmt-info">
          第{{item.id}}楼：用户名:{{item.user_name}}
          发表时间:{{item.ctime | datatimeFilter}}
          <div class="cmt-body">
            {{item.content}}
          </div>
        </div>
      </div>
    </div>
    <mt-button size="large" @click="getMore">加载更多</mt-button>
  </div>
</template>
<script>
//单独引入mint-ui 组件Toast 其他组件不用
  import {Toast} from "mint-ui"
  export default{
    created(){
      this.getMore();
    },
    methods:{
      postComment(){
        //1.获取用户输入内容，新闻编号，用户名
        var msg=this.msg;
        var nid=this.id;
        //var user_name="匿名";
        //console.log(msg+":"+nid+":"+user_name)
        //2.判断如果评论内容为空
        var size=msg.trim().length;
        if(size==0){
        //3.提示评论内容不能为空
          Toast("评论内容不能为空");
          return;
        }
        //4.发送post请求
        // var url="addComment";
        // var obj={nid:nid,user_name:user_name,content:msg};
        // //5.成功提示评论发表成功
        // this.$http.post(url,obj).then(result=>{
        //   var obj=result.body;
        //   if(obj.code==1){
        //     Toast("评论成功");
        //     this.pno= 0;
        //     this.list= [];
        //     this.getMore();
        //   }else{
        //     Toast("评论失败");
        //   }
        // })
        //6.提示发表成功
        //7.重新调用getMore()
        //8.显示最新一页数据
          var url="http://127.0.0.1:3000/addComment";
          var param=`nid=${nid}&content=${msg}`;
          this.axios.post(url,param).then(result=>{
            //console.log(result);
            if(result.data.code==1){
              Toast("评论成功");
              this.pno=0;
              this.list=[];
              this.getMore();
            }else{
              Toast("评论发表成功")
            }
          })
        },
      
      getMore(){
        var nid=this.id;//新闻id
        this.pno++;//页码自增 初始值0
        var pno=this.pno;//当前页码
        var pageSize=this.pageSize;//页大小
        var url="getcomment?pno="+pno;
        url +="&nid="+nid+"&pageSize="+pageSize;
        this.$http.get(url).then(result=>{
          //console.log(result.body)
          //将查询结果追加list数组中
          var rows=this.list.concat(result.body.data);
          this.list = rows;
        })
      }
    },
    data(){
      return{
        list:[],
        pno:0,
        pageSize:7,
        pageCount:1,
        msg:""     //评论内容双向绑定
      }
    },
    props:["id"]
  }
</script>
<style>
  .app-comment h3{
    font-size:18px;
  }
  .app-comment textarea{
    font-size:14px;
    height:68px;
    margin:0;
  }
  .app-comment .cmt-list{
    margin:5px 0;
  }
  .app-comment .cmt-list .cmt-item{
    border:1px solid #aaa;
    margin-top:15px;
  }
  .app-comment .cmt-list .cmt-info{
    line-height:30px;
    background:#ccc;
  }
</style>