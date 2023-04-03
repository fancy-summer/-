import { reqGetSearchInfo } from "@/api"

const state = {
    searchList:{}
}

const mutations = {
    GETSEARCHINFO(state,searchList){
        state.searchList = searchList
    }
}

const actions = {
    async getSearchInfo({commit},params={}){
        let result = await reqGetSearchInfo(params)
        if(result.code == 200){
            commit('GETSEARCHINFO',result.data)
        }
    }
}

//简化仓库的数据 
const getters = {
    goodsList(state){
        //没有网络时返回空数组
        return state.searchList.goodsList || []
     },
     trademarkList(state){
        //没有网络时返回空数组
        return state.searchList.trademarkList || []
     },
     attrsList(state){
        //没有网络时返回空数组
        return state.searchList.attrsList || []
     }
}

export default {
    state,
    mutations,
    actions,
    getters
}