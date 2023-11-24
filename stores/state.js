import {createStore} from 'vuex'
import axios from "axios";

const store = createStore({
    state: {
        tableData: [],
        collapsed: false,
        SIDEBAR_WIDTH: 274,
        SIDEBAR_WIDTH_COLLAPSED: 73
    },
    mutations: {
        changeTableData(state, data) {
            state.tableData = data
        },
        toggleSidebar(state){
            state.collapsed = !state.collapsed
        }
    },
    actions: {
        async getTableInfo(context) {
            try {
                const response = await axios.get(`db/data1.json`)
                context.commit('changeTableData', response.data.sessions)
            } catch (err) {
                console.error(err)
            }
        }
    },
    getters: {
        sidebarWidthChange(state) {
            return `${state.collapsed ? state.SIDEBAR_WIDTH_COLLAPSED : state.SIDEBAR_WIDTH}px`
        }
    }
})

export default store;
