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
import store from "../stores/state";

export default {
  computed: {
    collapsed() {
      return store.state.collapsed
    },
  },
  components: {StudySession, SidebarMain}

}
</script>

<style>

</style>
