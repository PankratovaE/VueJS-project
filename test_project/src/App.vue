<template>
<div id="app">
<header><h2>My personal costs</h2></header>
<main>
<button @click="clicked">Add new cost</button>
<PaymentsForm  v-if="formIsVisible" />
<PaymentsList />
<Pagination />
</main>
</div>
</template>
 
<script>
import PaymentsList from "./components/PaymentsList.vue";
import PaymentsForm from "./components/PaymentsForm.vue";
import Pagination from "./components/Pagination.vue";

import { mapActions } from 'vuex';


export default {
  name: "App",
  data() {
    return {
    
    formIsVisible: false,
  }
  },
  methods: {
    ...mapActions([
      'fetchData', 'fetchCategoriesList'
    ]),
    
    clicked() {
      this.formIsVisible = !this.formIsVisible;
      console.log(this.formIsVisible);
    },
  },
  components: {
    PaymentsList,
    PaymentsForm,
    Pagination
  },
  mounted() {
    this.fetchData();
    this.fetchCategoriesList();
  }
};
</script>
 
<style lang="scss" module>
#app {
font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
font-size: 26px;
}
</style>