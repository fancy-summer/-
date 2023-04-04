import { mock } from "mockjs";
import requests  from "./ajax";
import mockRequests from './mockAjax'

export const reqCategoryList = ()=>requests({url:'/product/getBaseCategoryList',method:'get'})

//来自尚硅谷的后端接口
//获取Mock的banner的数据
export const reqGetBannerList = ()=>mockRequests.get('/banner')

// 获取floor数据
export const reqFloorList = ()=>mockRequests.get('/floor')

//获取搜索模块的借口
export const reqGetSearchInfo = (params) => requests({url:'/list',method:'post',data:params})  

//获取产品详细信息
export const reqGoodsInfo = (skuId)=>requests({url:`/item/${skuId}`,method:'get'})

//购物车
export const reqAddOrUpdateShopCart = (skuId,skuNum) =>requests({url:`/cart/addToCart/${ skuId }/${ skuNum }`,method:'post'})

//购物车列表
export const reqCartList = () => requests({url:'/cart/cartList',method:'get'})

//在购物车中删除物品
export const reqDeleteCartById = (skuId)=>requests({url:`/cart/deleteCart/${skuId}`,method:'delete'})

//修改商品的选中状态
export const reqUpdateCheckByid = (skuId,isChecked)=>requests({url:`/cart/checkCart/${skuId}/${isChecked}`,method:'get'})

//获取验证码
export const reqGetCode = (phone) => requests({url:`/user/passport/sendCode/${phone}`,method:'get'})

//登录注册
export const reqUserRegister = (data)=>requests({url:'/user/passport/register',data,method:'post'})

//登录请求
export const reqUserLogin = (data)=>requests({url:'user/passport/login',data,method:'post'})

//获取用户信息（要用token）
export const reqUserInfo = () => requests({url:'/user/passport/auth/getUserInfo',method:'get'})

//退出登录
export const reqLogout = ()=>requests({url:'/user/passport/logout',method:'get'})

//用户地址信息
export const reqAddressInfo = ()=>requests({url:'/user/userAddress/auth/findUserAddressList',method:'get'})

//商品清单
export const reqOrderInfo = ()=> requests({url:'/order/auth/trade',method:'get'})

//提交订单
export const reqSubmitOrder = (tradeNo,data) => requests({url:`/order/auth/submitOrder?tradeNo=${tradeNo}`,data,method:'post'})

//获取支付信息
export const reqPayInfo = (orderId) => requests({url:`/payment/weixin/createNative/${orderId}`,method:'get'})

//支付订单状态
export const reqPayStatus = (orderId)=>requests({url:`/payment/weixin/queryPayStatus/${orderId}`,method:'get'})

//获取我的订单
export const reqMyOrderList = (page,limit)=>requests({url:`/order/auth/${page}/${limit}`,method:'get'})