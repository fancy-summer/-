import { reqGoodsInfo,reqAddOrUpdateShopCart} from "@/api"
import {getUUID} from '@/utils/uuid_token'

const state = {
    goodInfo:{},
    uuid_token:getUUID()
}

const mutations = {
    GETGOODINFO(state,goodInfo){
        state.goodInfo = goodInfo
    }
}

const actions = {
    async getGoodInfo({commit},skuId){
        let result = await reqGoodsInfo(skuId)
        if(result.code == 200){
            commit('GETGOODINFO',result.data)
        }
    },
    //只需将数据发给服务器即可，无需对请求返回的参数处理
    async addOrUpdateShopCart({commit},{skuId,skuNum}){
        let result = await reqAddOrUpdateShopCart(skuId,skuNum)
        // console.log(result);
        if(result.code == 200){
            return 'ok'
        }else {
            return Promise.reject(new Error('faile'))
        }
    }
}

//简化数据
const getters = {
    categoryView(state){
        return state.goodInfo.categoryView||{}
    },
    skuInfo(state){
        return state.goodInfo.skuInfo||{}
    },
    spuSaleAttrList(state){
        return state.goodInfo.spuSaleAttrList||[]
    }

}


export default{
    state,
    mutations,
    actions,
    getters
}
