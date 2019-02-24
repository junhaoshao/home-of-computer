import Vue from 'vue'
import Router from 'vue-router'
import HelloContainer from "./components/HelloWorld.vue"
import Test from "./components/Test.vue"
import List from './components/listContainer.vue'
import Home from './components/tabbar/Home.vue'
import NewsList from './components/news/NewsList.vue'
import Newsinfo from './components/news/Newsinfo.vue'
import GoodsList from './components/good/GoodsList.vue'
import GoodsInfo from './components/good/GoodsInfo.vue'
import Login from './components/login/Login.vue'
import Cart from './components/tabbar/Cart.vue'
import Search from './components/tabbar/Search.vue'
Vue.use(Router)

export default new Router({
  routes:[
    {path:'/',redirect:"/Home"},
    {path:'/Test',component:Text},
    {path:'/Home',component:Home},
    {path:'/NewsList',component:NewsList},
    {path:'/Newsinfo',component:Newsinfo},
    {path:'/GoodsList',component:GoodsList},
    {path:'/GoodsInfo/:id',component:GoodsInfo},
    {path:'/Login',component:Login},
    {path:'/Cart',component:Cart},
    {path:'/Search',component:Search}
  ]
})
