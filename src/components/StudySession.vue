<script>
import TableMain from "@/components/TableMain.vue";
import store from "../../stores/tableState";
export default {
  async created() {
    function getInfoFromJSON () { //Запрос данных
      store.dispatch("getTableInfo")
    }
    await getInfoFromJSON()
    console.log('store.state.tableData', store.state.tableData)
  },
  computed: {
    tableInfo() {
      return store.state.tableData
    }
  },
  components: {
    TableMain
  }
}


</script>

<template>
<div class="study-session">
  <h2 class="study-session__title">
    Учебные сессии
  </h2>
  <TableMain :table-info="tableInfo"/>
</div>
</template>

<style scoped>

</style>


