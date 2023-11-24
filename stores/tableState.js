import {createStore} from 'vuex'
import axios from "axios";

const store = createStore({
    state: {
        tableData: []
    },
    mutations: {
        changeTableData(state, data) {
            state.tableData = data
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
    }
})

export default store;
