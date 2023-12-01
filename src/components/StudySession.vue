<script>
import TableMain from "@/components/TableMain.vue";
import store from "../../stores/state";
export default {
  async created() {
    function getInfoFromJSON () { //Запрос данных
      store.dispatch("getTableInfo")
    }
    await getInfoFromJSON()
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
  <v-tooltip>
    <template v-slot:activator="{ props }">
      <v-btn v-bind="props" style="margin-left: 140px">ИНФОРМАЦИЯ</v-btn>
    </template>
    <span class="tooltip_text">Тестовое задание на должность Frontend Developer, где необходимо было получить данные с JSON файла, поместить это все в таблицу и дать возможность отфильтровать с помощью стрелочек на заголовках. В таблицу можно добавлять новые значения.</span>
  </v-tooltip>
</template>

<style scoped>

</style>


