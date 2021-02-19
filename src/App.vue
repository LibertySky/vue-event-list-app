<template>
  <div id="app">
    <NavBar />
    <NotificationContainer />
    <router-view :key="$route.fullPath" />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import NotificationContainer from "@/components/NotificationContainer.vue";

export default {
  components: {
    NavBar,
    NotificationContainer,
  },
};
</script>

<style>
body {
  background-color: rgb(241, 241, 241);
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 70vw;
  margin-left: auto;
  margin-right: auto;

  /* color: #2c3e50; */
}
</style>
