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
      page: 1,
      itemsPerPage: 11,
      options: {},
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
    pageCount () {
      return Math.ceil(this.tableInfo.length / this.itemsPerPage)
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
      if (element === "Запланировано") return 'blue'
      else if (element === "Завершено") return 'green'
      else return 'red'
    },
  },
})
</script>

<template>
  <div class="table__body-info">
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

      <v-data-table
          :headers="headers"
          :items="createDataArray"
          :search="search"
          :items-per-page="itemsPerPage"
          :page="page"
      >
        <template v-slot:[`item.status`]="{ value }">
          <v-chip :color="getColor(value)">
            {{ value }}
          </v-chip>
        </template>

        <template v-slot:bottom>
          <div class="table__bottom">
            <v-pagination
                v-model="page"
                :length="pageCount"
                @update:model-value="page = $event"
                :total-visible="6"
                class="table__bottom__pagination"
            ></v-pagination>
          </div>
        </template>

      </v-data-table>
    </v-card>
  </div>
</template>

<style>

</style>
<style scoped>
:deep(span){
  font-weight: 800;
}

</style>
