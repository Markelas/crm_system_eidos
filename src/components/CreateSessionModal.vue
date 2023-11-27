<template>
  <template>
    <div class="text-center">
      <v-dialog
          width="1000"
          v-model="dialog"
      >
        <v-card>
          <v-form @submit.prevent="submitHandler">
            <v-container>
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
                      :rules="[rules.required]"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col
                    cols="12"
                    sm="6"
                >
                  <v-text-field
                      v-model="studyModule"
                      variant="solo"
                      label="Название учебного модуля"
                      minlength="4"
                      :rules="[rules.required]"
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
                      :rules="[rules.required]"
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
                      counter
                      minlength="4"
                      :rules="[rules.required]"
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
                      counter
                      minlength="4"
                      :rules="[rules.required]"
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
                color="primary"
                variant="text"
                type="submit"
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
      dialog: true,
      dateAndTime: '',
      studyModule: '',
      sessionType: '',
      room: '',
      group: '',
      rules: {
        required: value => !!value || 'Поле не заполнено',
      },
    }
  },
  methods:{
    submitHandler() {
      this.addNewValue()
      this.start = '' //Очищаем
      this.studyModule = ''
      this.sessionType = ''
      this.room = ''
      this.group = ''
      this.dialog = false
      this.$emit('add')
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
  },
  computed: {

  }
}
</script>


<style scoped>

</style>
