<template>
<div id="app">
  
<header><h2>My personal costs</h2>
    <Modal v-if="shown" :name1="shown" />
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
      shown: '',
  }
  },
  components: {
    Modal: () => import('./components/modalwindows/Modal.vue'),
  },
  methods: {
        onShow(name) {
            this.shown = name;
        },
        onClose() {
            this.shown = '';
        }
    },
  mounted() {
    this.$router.push({ name: 'dashboard'});
    this.$modal.EventBus.$on('show', this.onShow);
    this.$modal.EventBus.$on('close', this.onClose);
  },
  beforeDestroy() {
    this.$modal.EventBus.$off('show', this.onShow);
    this.$modal.EventBus.$off('close', this.onClose);
  }
};
</script>
 
<style lang="scss" module>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
</style>