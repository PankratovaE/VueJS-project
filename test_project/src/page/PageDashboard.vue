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
            class="my-4"
          >
          Add new cost
          <v-icon dark>mdi-plus</v-icon>
          </v-btn>
        </template>
        <v-card>
          <PaymentsForm />
        </v-card>
      </v-dialog>
        <PaymentsList @updateChart="updateChart"/>
    </v-col>
    <v-col class="my-4">
      <canvas
        ref="canvas"
        :class="[$style.diagram__size]"
        >
      </canvas>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from 'vuex';
import PaymentsList from "../components/PaymentsList.vue";
import PaymentsForm from "../components/PaymentsForm.vue";
import { Doughnut } from "vue-chartjs";


export default {
  extends: Doughnut,
  data() {
    return {
      formIsVisible: false,
      chartData: {
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
    clicked() {
      this.formIsVisible = !this.formIsVisible;
    },
    totalPrice() {
      return this.getCategoriesList.map(category => {
      return this.getPaymentsList.reduce((total, cur) => {
        if (cur.category === category) {
          total += +cur.price;
        }
        return total;
      }, 0)
    })
    },
    updateChart() {
      this.$data.chartData.datasets[0].data = this.totalPrice();
      this.renderChart(this.chartData)
    }
  }, 
  components: {
    PaymentsList,
    PaymentsForm,
  },

  mounted() {
    this.$data.chartData.labels = this.getCategoriesList;
    this.$data.chartData.datasets[0].data = this.totalPrice();
    this.renderChart(this.chartData)
  },
  computed: {
    ...mapGetters([
      'getCategoriesList', 'getPaymentsList'
    ]),
  },
  updated() {
    this.$data.chartData.datasets[0].data = this.totalPrice();
  },
  watch: {
  chartData () {
    console.log('from watch dashboard');
    this.renderChart(this.chartData)
  }
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
  margin-top: 64px;

}
</style>