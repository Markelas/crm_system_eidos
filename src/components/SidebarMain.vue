<template>
  <div class="sidebar" :style="{width: sidebarWidthChange}">
    <div class="sidebar__logo" :class="{'sidebar__logo--active': collapsed }">
      <MainLogo class="sidebar__logo__icon" :class="{'sidebar__logo__icon--active': collapsed }"/>
      <h1 class="sidebar__logo__name" v-if="!collapsed">Сим Центр</h1>
    </div>
    <span class="sidebar__collapse-icon" :class="{'sidebar__collapse-icon--closed': collapsed}" @click="toggleSidebar"><collapse-icon/></span>
    <ul class="sidebar__list">
      <li class="sidebar__list__item"><calendar-blank-icon class="item__icon"/> <p v-if="!collapsed">Расписание</p></li>
      <li class="sidebar__list__item--active" :class="''"><graduation-cap class="item__icon"/> <p v-if="!collapsed">Учебные сессии</p></li>
      <li class="sidebar__list__item"><door-icon class="item__icon"/> <p v-if="!collapsed">Список комнат</p></li>
      <li class="sidebar__list__item"><student-icon class="item__icon"/> <p v-if="!collapsed">Пользователи</p></li>
      <li class="sidebar__list__item"><user-list-icon class="item__icon"/> <p v-if="!collapsed">Учебные группы</p></li>
      <li class="sidebar__list__item"><video-camera-icon class="item__icon"/> <p v-if="!collapsed">Список устройств</p></li>
      <li class="sidebar__list__item"><settings-icon class="item__icon"/> <p v-if="!collapsed">Настройки системы</p></li>
      <li class="sidebar__list__item"><archive-icon class="item__icon"/> <p v-if="!collapsed">Архив</p></li>
    </ul>
    <div class="sidebar__bottom" v-if="!collapsed">
      <div class="sidebar__teacher">
        <div class="teacher__info">
          <h3 class="teacher__info__name">Барнаби Мармадюк</h3>
          <h4 class="teacher__info__title">Преподаватель</h4>
        </div>
        <img src="@/assets/icons/sidebar/BM.svg" alt="teacher logo">
      </div>
      <div class="sidebar__logout"><log-out-icon class="sidebar__logout__icon"/> Выйти</div>
      <div class="sidebar__lng"><r-u-icon class="sidebar__lng__icon"/>Русский <arrow-down-icon class="sidebar__lng__arrow"/></div>
    </div>
  </div>
</template>

<script>
import {collapsed, toggleSidebar, sidebarWidthChange} from "../../stores/sidebarState";
import CollapseIcon from "@/components/icons/sidebar-icons/CollapseIcon.vue";
import CalendarBlankIcon from "@/components/icons/sidebar-icons/CalendarBlankIcon.vue";
import GraduationCap from "@/components/icons/sidebar-icons/GraduationCap.vue";
import DoorIcon from "@/components/icons/sidebar-icons/DoorIcon.vue";
import StudentIcon from "@/components/icons/sidebar-icons/StudentIcon.vue";
import UserListIcon from "@/components/icons/sidebar-icons/UserListIcon.vue";
import VideoCameraIcon from "@/components/icons/sidebar-icons/VideoCameraIcon.vue";
import SettingsIcon from "@/components/icons/sidebar-icons/SettingsIcon.vue";
import ArchiveIcon from "@/components/icons/sidebar-icons/ArchiveIcon.vue";
import LogOutIcon from "@/components/icons/sidebar-icons/LogOutIcon.vue";
import RUIcon from "@/components/icons/sidebar-icons/RUIcon.vue";
import MainLogo from "@/components/icons/MainLogo.vue";
import ArrowDownIcon from "@/components/icons/sidebar-icons/ArrowDownIcon.vue";
export default {
  components: {
    ArrowDownIcon,
    MainLogo,
    RUIcon,
    LogOutIcon,
    ArchiveIcon,
    SettingsIcon,
    VideoCameraIcon, UserListIcon, StudentIcon, DoorIcon, GraduationCap, CalendarBlankIcon, CollapseIcon},
  props: {},
  setup() {
    return {collapsed, toggleSidebar, sidebarWidthChange}
  }
}
</script>

<style scoped>

</style>
