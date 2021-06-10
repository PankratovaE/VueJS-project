<template>
  <v-row>
    <v-col>
      <v-dialog
        v-model="formIsVisible"
        max-width="300px"
        >
        <template v-slot:activator="{ on }">
          <v-btn 
            color="teal"
            dark
            v-on="on"
            class="my-8"
          >
          Add new cost
          <v-icon dark>mdi-plus</v-icon>
          </v-btn>
        </template>
        <v-card>
          <PaymentsForm />
        </v-card>
      </v-dialog>
        <PaymentsList />
    </v-col>
    <v-col>
      <canvas
        ref="canvas"
        :class="[$style.diagram__size]"
        >
      </canvas>
    </v-col>
  </v-row>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import PaymentsList from "../components/PaymentsList.vue";
import PaymentsForm from "../components/PaymentsForm.vue";
import { Doughnut } from "vue-chartjs";

export default {
  extends: Doughnut,
  data() {
    return {
      formIsVisible: false,
      data: {
        labels: [],
        datasets: [{
            label: '# of Votes',
            data: [],
            backgroundColor: [
              'rgb(0, 191, 161)',
              'rgb(239, 195, 186)',
              'rgb(209, 79, 76)',
              'rgb(1, 149, 206)',
              'rgb(148, 86, 162)',
            ],
        }]
      }
    }
  },
  methods: {
    ...mapActions([
      'fetchData', 'fetchCategoriesList'
    ]),

    clicked() {
      this.formIsVisible = !this.formIsVisible;
    },
    totalPrice() {
      // console.log('in total price')
      // console.log(this.getCategoriesList)
      return this.getCategoriesList.map(category => {
      return this.getPaymentsList.reduce((total, cur) => {
        if (cur.category === category) {
          total += cur.price;
        }
        return total;
      }, 0)
    })
    }
  }, 
  components: {
    PaymentsList,
    PaymentsForm,
  },
  created() {
    this.fetchData();
    this.fetchCategoriesList();
    this.$data.data.labels = this.getCategoriesList;
    this.$data.data.datasets[0].data = this.totalPrice();
  },
  mounted() {
    this.renderChart(this.data)
    console.log(this.getCategoriesList)
    console.log(this.$data.data.labels)
    
  },
  computed: {
    ...mapGetters([
      'getCategoriesList', 'getPaymentsList'
    ]),
  },
  updated() {
    this.$data.data.datasets[0].data = this.totalPrice();
    //     console.log(this.getCategoriesList)
    // console.log(this.$data.data.labels)
  }
}  
</script>

<style lang="scss" module>
#app {
font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
font-size: 26px;
}
.diagram__size {
  display: block;
  max-width: 500px;
  max-height: 500px;

}
</style>