<script>
import { defineComponent } from 'vue'
import moment from 'moment'
import FilterIcon from "@/components/icons/FilterIcon.vue";
import IncreaseIcon from "@/components/icons/IncreaseIcon.vue";
export default defineComponent({
  components: {IncreaseIcon, FilterIcon},
  props: ['tableInfo'],
  data () {
    return {
      search: '',
      headers: [
        { key: 'start', title: 'Дата и время'},
        { key: 'status', title: 'Статус' },
        { key: 'modulName', title: 'Название учебного модуля' },
        { key: 'sessionType', title: 'Тип сессии' },
        { key: 'rooms', title: 'Комната' },
        { key: 'groups', title: 'Группа' },
      ],
    }
  },
  computed: {
    createDataArray () {
      console.log('this.tableInfo', this.tableInfo)
      return this.tableInfo.map((el)=> {
        return {
          start: moment(el.start).format('DD.MM.YYYY, HH:MM'),
          status: this.statusNameTranslate(el.status),
          modulName: el.module,
          sessionType: this.sessionTypeTranslate(el.type),
          rooms: this.checkRooms(el.rooms),
          groups: this.checkGroups(el.groups)
        }
      })
    },
  },
  methods: {
    statusNameTranslate(element) {
      switch (element.name) {
        case 'planned':
          return 'Запланировано';
        case 'completed':
          return "Завершено";
        case 'canceled':
          return 'Отмененно'
      }
    },
    sessionTypeTranslate(element) {
      switch (element.name) {
        case "lesson":
          return 'Урок';
        case 'accreditation':
          return "Аккредитация";
        case 'examination':
          return 'Экзамен'
      }
    },
    checkRooms(element) {
      let roomText = ''
      element.forEach((el)=> {
        roomText += el.name + ', '
      })
      if (roomText) { //Если были комнаты, то убираем пробел и запятую в конце
        roomText = roomText.slice(0, -2)
      }
      return roomText
    },
    checkGroups(element) {
      let groupText = ''
      element.forEach((el)=> {
        groupText += el.name + ', '
      })
      if (groupText) { //Если были комнаты, то убираем пробел и запятую в конце
        groupText = groupText.slice(0, -2)
      }
      return groupText
    },
    getColor (element) {
      console.log(element)
      if (element === "Запланировано") return 'blue'
      else if (element === "Завершено") return 'green'
      else return 'red'
    },
  }
})
</script>

<template>
  <div class="table__sort-btns">
    <v-text-field
        filt
        v-model="search"
        label="Поиск"
        prepend-inner-icon="mdi-magnify"
        single-line
        variant="outlined"
        hide-details
    ></v-text-field>
    <button class="table__sort-btns__icon"><filter-icon/></button>
    <button class="table__sort-btns__icon"><increase-icon/></button>
    <button class="table__sort-btns__create">Создать</button>
  </div>

  <v-card
      flat
  >

    <template v-slot:text>
    </template>

    <v-data-table
        :headers="headers"
        :items="createDataArray"
        :search="search"
    >
      <template v-slot:[`item.status`]="{ value }">
        <v-chip :color="getColor(value)">
          {{ value }}
        </v-chip>
      </template>
    </v-data-table>
  </v-card>
</template>

<style>
.v-table__wrapper{
  margin: 20px;
  border: 2px solid #F4F4F4;
  border-radius: 12px;

}
.v-data-table__th {
  background-color:#F4F4F4 !important;
}
.v-data-table__th:nth-child(1) {
  width: 10%;
}
.v-data-table__tr:nth-child(2n) {

  background-color:#F4F4F4 !important;

}
.v-field__input{
  padding: 0 !important;
  min-height: 40px !important;
}

.v-card-text{
  padding: 0!important;
}
.v-text-field{
  max-width: 260px;
}
.v-input__control{
  max-width: 260px;
  height: 44px;
}

</style>
<style scoped>
:deep(span){
  font-weight: 800;
}

</style>
