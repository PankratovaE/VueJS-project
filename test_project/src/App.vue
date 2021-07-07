<template>
  <v-app>
    <v-system-bar app flat>
        <v-btn :ripple="false" plain to="/dashboard">Dashboard</v-btn>
        <v-btn :ripple="false" plain to="/about">About</v-btn>
        <v-btn :ripple="false" plain to="/404">404</v-btn>
    </v-system-bar>
    <v-app-bar app flat><span class="text-h4">My personal costs</span></v-app-bar>
    <v-main>
      <transition name="fade">
        <Modal v-if="shown" :name1="shown" />
      </transition>
      <router-view />
    </v-main>
  
  </v-app>
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
  :global(.fade-enter-active), :global(.fade-leave-active) {
    transition: opacity 1s;
  }
  :global(.fade-enter), :global(.fade-leave-to) {
    opacity: 0;
  }
</style>