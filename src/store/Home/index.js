import { reqCategoryList ,reqGetBannerList,reqFloorList} from "@/api"

const state = {
    categoryList:[],
    bannerList:[],
    floorList:[]
}

const mutations = {
    CATEGORYLIST(state,categoryList){
        state.categoryList = categoryList;
    },
    DETBANNERLIST(state,bannerList){
        // console.log(state);
        state.bannerList = bannerList
    },
    GETFLOORLIST(state,floorList){
        state.floorList = floorList
    }
}

const actions = {
    async categoryList({commit}){
        let res = await reqCategoryList();
        // console.log(res);
        if(res.code == 200){
            commit('CATEGORYLIST',res.data)
        }
    },

    async getBannerList({commit}){
        let result = await reqGetBannerList();
        // console.log(result);
        // console.log(commit);
        if(result.code == 200){
            commit('DETBANNERLIST',result.data)
        }
    },
    async getFloorList({commit}){
        let result = await reqFloorList()
        if(result.code == 200){
            commit("GETFLOORLIST",result.data)
        }
    }
}

const getters = {}

export default {
    state,
    mutations,
    actions,
    getters
}