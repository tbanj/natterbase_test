<template>
  <div>
    <Header />
    <router-view />
  </div>
</template>


<script>
import Header from "./components/Header.vue";
export default {
  name: "app",
  components: {
    Header
    // Dashboard
  }
};
</script>

<style>
</style>
