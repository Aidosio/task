import {createStore} from "vuex";

export default new createStore({
    state: {
        isModal: false
    },
    mutations: {
        openModal(state){
            state.isModal = !state.isModal
        }
    }
})