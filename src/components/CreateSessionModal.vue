<template>
  <template>
    <div class="text-center">
      <v-dialog
          width="900"
          v-model="dialog"
      >
        <v-card class="rounded-lg">
          <v-card-title class="text-center create__card__title">Добавление новой учебной сессии</v-card-title>
          <v-form v-model="form" @submit.prevent="submitHandler">
            <v-container>
              <v-row>
                <v-col
                    cols="12"
                    sm="12"
                >
                  <v-text-field
                      v-model="studyModule"
                      variant="solo"
                      label="Название учебного модуля"
                      minlength="4"
                      :rules="[required ]"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col
                    cols="12"
                    sm="6"
                >
                  <v-text-field
                      v-model="dateAndTime"
                      label="Дата и время проведения"
                      variant="solo"
                      type="datetime-local"
                      :rules="[required, correctDate]"
                  ></v-text-field>
                </v-col>

                <v-col
                    cols="12"
                    sm="6"
                >
                  <v-select
                      v-model="sessionType"
                      variant="solo"
                      label="Тип сессии"
                      :items="['Аккредитация', 'Урок', 'Экзамен']"
                      :rules="[required]"
                  ></v-select>
                </v-col>

              </v-row>
              <v-row>
                <v-col
                    cols="12"
                    sm="6"
                >
                  <v-text-field
                      v-model="room"
                      variant="solo"
                      label="Комната"
                      minlength="4"
                      :rules="[required]"
                  ></v-text-field>
                </v-col>
                <v-col
                    cols="12"
                    sm="6"
                >
                  <v-text-field
                      v-model="group"
                      variant="solo"
                      label="Группа"
                      minlength="4"
                      :rules="[required]"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
          <v-card-actions>
            <v-btn variant="text" @click="$emit('close')">
              Отменить
            </v-btn>
            <v-spacer></v-spacer>

            <v-btn
                :disabled="!form"
                color="primary"
                variant="text"
                type="submit"
                size="large"
                @click="submitHandler"
            >
              Сохранить
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </template>
</template>

<script>
import moment from "moment";
import store from '../../stores/state'
export default {
  data() {
    return {
      form: false,
      dialog: true,
      dateAndTime: '',
      studyModule: '',
      sessionType: '',
      room: '',
      group: '',
    }
  },
  methods:{
    submitHandler() {
      if (this.form){ //Если форма заполнена
        this.addNewValue() //Вызываем функцию добавления в state
        this.dialog = false
        this.$emit('add') //Вызываем событие в родительском компоненте на добавление записи
        this.$emit('close') //Переключаем статус модального окна
      }
    },
    addNewValue() {
      store.state.createNewSession = {
        id: Date.now(),
        start: this.dateAndTime,
        status: {name: 'planned'},
        module: this.studyModule,
        type: {name:this.sessionTypeTranslate(this.sessionType)},
        rooms: [{name:this.room}],
        groups: [{name: this.group}],
      }
    },
    sessionTypeTranslate(element) {
      switch (element) {
        case "Урок":
          return 'lesson';
        case 'Аккредитация':
          return "accreditation";
        case 'Экзамен':
          return 'examination'
      }
    },
    required (v) {
      return !!v || 'Поле должно быть заполнено'
    },
    correctDate (v) {
      if (moment(v).isAfter(new Date())){
        return true
      } else {
        return  'Дата не может быть прошедшей'
      }
    },
  },
  computed: {

  }
}
</script>


<style scoped>

</style>
