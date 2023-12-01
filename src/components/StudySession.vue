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
      <v-btn v-bind="props" class="tooltop__info">ИНФОРМАЦИЯ</v-btn>
    </template>
    <span class="tooltip_text">Тестовое задание на должность Frontend Developer, где необходимо было получить данные с JSON файла, поместить это все в таблицу и дать возможность отфильтровать с помощью стрелочек на заголовках. В таблицу можно добавлять новые значения. Другие вкладки не функционируют.</span>
  </v-tooltip>
</template>

<style>
.tooltop__info{
  position: absolute !important;
  width: 350px;
  font-size: 30px;
  min-height: 40px;
  bottom: 0;
  right: 0;
}
.tooltip_text{
  font-size: 16px;
}
</style>


