import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'
import Detail from '@/pages/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'
import Trade from '@/pages/Trade'
import Pay from '@/pages/Pay'
import Paysuccess from '@/pages/PaySuccess'
// import Center from '@/pages/Center'
import Center from '@/pages/Center'

//二级
import MyOrder from '@/pages/Center/myOrder'
import GroupOrder from '@/pages/Center/groupOrder'

export default[
    {
        path:'/center',
        name:'center',
        component:Center,
        meta:{show:true},
        children:[
            {
                path:'myorder',
                component:MyOrder
            },
            {
                path:'grouporder',
                component:GroupOrder
            },
            {
                path:'center',
                redirect:'/center/myorder'
            }
        ]
    },
    {
        path:'/paysuccess',
        name:'paysuccess',
        component:Paysuccess,
        meta:{show:true}
    },
    {
        path:'/pay',
        name:'pay',
        component:Pay,
        meta:{show:true},
        beforeEnter: (to, from, next) => {
            if(from.path == '/trade'){
                next()
            }else{
                next(false)
            }
        }
    },
    {
        path:'/trade',
        name:'trade',
        component:Trade,
        meta:{show:true},
        beforeEnter: (to, from, next) => {
            if(from.path == '/shopcart'){
                next()
            }else{
                next(false)
            }
        }
    },
    {
        path:'/shopcart',
        name:'ShopCart',
        component:ShopCart,
        meta:{show:true}
    },
    {
        path:'/addcartsuccess',
        name:'addcartsuccess',
        component:AddCartSuccess,
        meta:{show:true}
    },
    {
        path:"/detail/:skuId?",
        component:Detail,
        meta:{show:true}
    },
    {
        path:"/home",
        component:Home,
        meta:{show:true}
    },
    {
        path:"/login",
        component:Login,
        meta:{show:false}
    },
    {
        path:"/register",
        component:Register,
        meta:{show:false}

    },
    {
        name:'search',
        //加了？后params可传可不传
        path:"/search/:keyword?",
        component:Search,
        meta:{show:true}
    },
    //重定向
    {
        path:'*',
        redirect:'/home'
    }

]
