<template>
  <div class="main__body">
    <sidebar-main/>
    <div class="active-page">
      <study-session/>
    </div>
  </div>
</template>

<script>



import SidebarMain from "@/components/SidebarMain.vue";
import StudySession from "@/components/StudySession.vue";

export default {
  components: {StudySession, SidebarMain}

}
</script>

<style>
body{
  background-color: #F4F4F8;
  margin-left: 274px;
}
</style>
