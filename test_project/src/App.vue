<template>
<div id="app">
<header><h2>My personal costs</h2>
      <router-link to="/dashboard">Dashboard</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/404">404</router-link>
</header>
<main>
  <router-view />
</main>
</div>
</template>
 
<script>

export default {
  name: "App",
  data() {
    return {
  }
  },
  
  mounted() {
    this.$router.push({ name: 'dashboard'});
  }
};
</script>
 
<style lang="scss" module>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
</style>