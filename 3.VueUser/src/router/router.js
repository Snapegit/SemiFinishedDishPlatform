import VueRouter from 'vue-router'

//引入组件
import Index from '../pages'
import Home from '../pages/home/home'
import Login from '../pages/login/login'
import Register from '../pages/register/register'
import Center from '../pages/center/center'
import Forum from '../pages/forum/list'
import ForumAdd from '../pages/forum/add'
import ForumDetail from '../pages/forum/detail'
import MyForumList from '../pages/forum/myForumList'
import Storeup from '../pages/storeup/list'
import AddrList from '../pages/shop-address/list'
import AddrAdd from '../pages/shop-address/addOrUpdate'
import Order from '../pages/shop-order/list'
import OrderConfirm from '../pages/shop-order/confirm'
import Cart from '../pages/shop-cart/list'
import News from '../pages/news/news-list'
import NewsDetail from '../pages/news/news-detail'
import payList from '../pages/pay'

import yonghuList from '../pages/yonghu/list'
import yonghuDetail from '../pages/yonghu/detail'
import yonghuAdd from '../pages/yonghu/add'
import peicaifenleiList from '../pages/peicaifenlei/list'
import peicaifenleiDetail from '../pages/peicaifenlei/detail'
import peicaifenleiAdd from '../pages/peicaifenlei/add'
import peicaixinxiList from '../pages/peicaixinxi/list'
import peicaixinxiDetail from '../pages/peicaixinxi/detail'
import peicaixinxiAdd from '../pages/peicaixinxi/add'
import toupiaohuodongList from '../pages/toupiaohuodong/list'
import toupiaohuodongDetail from '../pages/toupiaohuodong/detail'
import toupiaohuodongAdd from '../pages/toupiaohuodong/add'
import toupiaojiluList from '../pages/toupiaojilu/list'
import toupiaojiluDetail from '../pages/toupiaojilu/detail'
import toupiaojiluAdd from '../pages/toupiaojilu/add'
import couponList from '../pages/coupon/list'
import couponDetail from '../pages/coupon/detail'
import couponAdd from '../pages/coupon/add'
import mycouponList from '../pages/mycoupon/list'
import mycouponDetail from '../pages/mycoupon/detail'
import mycouponAdd from '../pages/mycoupon/add'
import newstypeList from '../pages/newstype/list'
import newstypeDetail from '../pages/newstype/detail'
import newstypeAdd from '../pages/newstype/add'
import aboutusList from '../pages/aboutus/list'
import aboutusDetail from '../pages/aboutus/detail'
import aboutusAdd from '../pages/aboutus/add'
import discusspeicaixinxiList from '../pages/discusspeicaixinxi/list'
import discusspeicaixinxiDetail from '../pages/discusspeicaixinxi/detail'
import discusspeicaixinxiAdd from '../pages/discusspeicaixinxi/add'
import discusstoupiaohuodongList from '../pages/discusstoupiaohuodong/list'
import discusstoupiaohuodongDetail from '../pages/discusstoupiaohuodong/detail'
import discusstoupiaohuodongAdd from '../pages/discusstoupiaohuodong/add'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

//配置路由
export default new VueRouter({
	routes:[
		{
      path: '/',
      redirect: '/index/home'
    },
		{
			path: '/index',
			component: Index,
			children:[
				{
					path: 'home',
					component: Home
				},
				{
					path: 'center',
					component: Center,
				},
				{
					path: 'pay',
					component: payList,
				},
				{
					path: 'forum',
					component: Forum
				},
				{
					path: 'forumAdd',
					component: ForumAdd
				},
				{
					path: 'forumDetail',
					component: ForumDetail
				},
				{
					path: 'myForumList',
					component: MyForumList
				},
				{
					path: 'storeup',
					component: Storeup
				},
                {
                    path: 'shop-address/list',
                    component: AddrList
                },
                {
                    path: 'shop-address/addOrUpdate',
                    component: AddrAdd
                },
				{
					path: 'shop-order/order',
					component: Order
				},
				{
					path: 'cart',
					component: Cart
				},
				{
					path: 'shop-order/orderConfirm',
					component: OrderConfirm
				},
				{
					path: 'news',
					component: News
				},
				{
					path: 'newsDetail',
					component: NewsDetail
				},
				{
					path: 'yonghu',
					component: yonghuList
				},
				{
					path: 'yonghuDetail',
					component: yonghuDetail
				},
				{
					path: 'yonghuAdd',
					component: yonghuAdd
				},
				{
					path: 'peicaifenlei',
					component: peicaifenleiList
				},
				{
					path: 'peicaifenleiDetail',
					component: peicaifenleiDetail
				},
				{
					path: 'peicaifenleiAdd',
					component: peicaifenleiAdd
				},
				{
					path: 'peicaixinxi',
					component: peicaixinxiList
				},
				{
					path: 'peicaixinxiDetail',
					component: peicaixinxiDetail
				},
				{
					path: 'peicaixinxiAdd',
					component: peicaixinxiAdd
				},
				{
					path: 'toupiaohuodong',
					component: toupiaohuodongList
				},
				{
					path: 'toupiaohuodongDetail',
					component: toupiaohuodongDetail
				},
				{
					path: 'toupiaohuodongAdd',
					component: toupiaohuodongAdd
				},
				{
					path: 'toupiaojilu',
					component: toupiaojiluList
				},
				{
					path: 'toupiaojiluDetail',
					component: toupiaojiluDetail
				},
				{
					path: 'toupiaojiluAdd',
					component: toupiaojiluAdd
				},
				{
					path: 'coupon',
					component: couponList
				},
				{
					path: 'couponDetail',
					component: couponDetail
				},
				{
					path: 'couponAdd',
					component: couponAdd
				},
				{
					path: 'mycoupon',
					component: mycouponList
				},
				{
					path: 'mycouponDetail',
					component: mycouponDetail
				},
				{
					path: 'mycouponAdd',
					component: mycouponAdd
				},
				{
					path: 'newstype',
					component: newstypeList
				},
				{
					path: 'newstypeDetail',
					component: newstypeDetail
				},
				{
					path: 'newstypeAdd',
					component: newstypeAdd
				},
				{
					path: 'aboutus',
					component: aboutusList
				},
				{
					path: 'aboutusDetail',
					component: aboutusDetail
				},
				{
					path: 'aboutusAdd',
					component: aboutusAdd
				},
				{
					path: 'discusspeicaixinxi',
					component: discusspeicaixinxiList
				},
				{
					path: 'discusspeicaixinxiDetail',
					component: discusspeicaixinxiDetail
				},
				{
					path: 'discusspeicaixinxiAdd',
					component: discusspeicaixinxiAdd
				},
				{
					path: 'discusstoupiaohuodong',
					component: discusstoupiaohuodongList
				},
				{
					path: 'discusstoupiaohuodongDetail',
					component: discusstoupiaohuodongDetail
				},
				{
					path: 'discusstoupiaohuodongAdd',
					component: discusstoupiaohuodongAdd
				},
			]
		},
		{
			path: '/login',
			component: Login
		},
		{
			path: '/register',
			component: Register
		},
	]
})
