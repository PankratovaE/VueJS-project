<template>
  <div>
      <button @click="clicked">Add new cost</button>
      <PaymentsForm v-if="formIsVisible"/>
      <PaymentsList />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import PaymentsList from "../components/PaymentsList.vue";
import PaymentsForm from "../components/PaymentsForm.vue";


export default {
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
  },
  mounted() {
    this.fetchData();
    this.fetchCategoriesList();
  }
}
</script>

<style lang="scss" module>
#app {
font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
font-size: 26px;
}
</style>