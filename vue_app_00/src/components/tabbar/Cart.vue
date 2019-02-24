<template>
  <div class="app-cart">
    <!--商品列表-->
		<div class="mui-card-content">
			<div class="mui-card-content-inner">
				商品列表
			</div>
		</div>
    <ul class="mui-table-view">
			<li class="mui-table-view-cell mui-media" v-for="item in list" :key="item.iid">
				<a href="javascript:;">
					<img class="mui-media-object mui-pull-left" src="">
					<div class="mui-media-body">
						{{item.lname}}
						<p class='mui-ellipsis'>
              <span class="price">
                {{item.price}}
              </span>
              <span class="count">
                <div class="mui-numbox">
			            <button class="mui-btn mui-btn-numbox-minus" type="button" @click="cartSub" :data-iid="item.iid">-</button>
			            <input class="mui-input-numbox" type="number" :value="item.count"/>
			            <button class="mui-btn mui-btn-numbox-plus" type="button" @click="cartAdd" :data-iid="item.iid">+</button>
		            </div>
              </span>
            </p>
					</div>
				</a>
			</li>
    </ul>
		<div class="mui-card-footer">
      合计:{{getSubTotal}}
    </div>
    <!--商品名称-->
    
    <!--按钮-->
  
  </div>
</template>
<script>
  import {Toast} from 'mint-ui'
  export default {
    data(){
      return{
        list:[]
      }
    },
    methods:{
      updateCart(iid,count){
        var url = "http://127.0.0.1:3000/updateCart?iid="+iid+"&count="+count;
        this.axios.get(url).then(result=>{
          if(result.data.code == 1){
            Toast(result.data.msg);
          }else{
            Toast(result.data.msg);
          }
        })
      },
      cartAdd(e){
        var iid=e.target.dataset.iid;
        //修改当前购物车数量
        //1.创建循环list
        for(var item of this.list){
        //2.判断当前元素iid是否是iid
          if(item.iid==iid && item.count<999){
        //3.当前数据减1
            item.count++;
            this.updateCart(iid,item.count)
        //4.跳出循环   
            break;
          }
        }
        //5.更新数据库值减1
      },
      cartSub(e){
        var iid=e.target.dataset.iid;
          for(var item of this.list){
        //2.判断当前元素iid是否是iid
            if(item.iid==iid && item.count>1){
        //3.当前数据减1
              item.count--;
              this.updateCart(iid,item.count)
        //4.跳出循环   
              break;
            }
          }
      },
      getMore(){
        var url="http://127.0.0.1:3000/getCarts?uid=3"
        this.axios.get(url).then(result=>{
          this.list = result.data.data;
        });
      }
    },
    created(){
      this.getMore();
    },
    computed:{
      getSubTotal:function(){
        //计算购物车内所有商品价格 累加和
        var sum=0;
        for(var item of this.list){
          sum+=item.price*item.count
        }
        return sum;
      }
    }
  }
</script>
<style>
  
</style>