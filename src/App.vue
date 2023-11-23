<template>
  <div class="main__body">
    <sidebar-main/>
    <div class="active-page" :class="{ 'active-page--roll': collapsed }">
      <study-session/>
    </div>
  </div>
</template>

<script>



import SidebarMain from "@/components/SidebarMain.vue";
import StudySession from "@/components/StudySession.vue";
import {collapsed} from "../stores/sidebarState";

export default {
  setup(){
    return {collapsed}
  },
  components: {StudySession, SidebarMain}

}
</script>

<style>
body{
  background-color: #F4F4F8;
}
.active-page{
  margin-left: 274px;
}
.active-page--roll{
  margin-left: 75px;
}
</style>
