<template>
<div id="app">
<header><h2>My personal costs</h2></header>
<main>
<button @click="clicked">Add new cost</button>
<PaymentsForm @add="onDataAdded" v-if="formIsVisible" />
<PaymentsList :items="paymentsList" />
</main>
</div>
</template>
 
<script>
import PaymentsList from "./components/PaymentsList.vue";
import PaymentsForm from "./components/PaymentsForm.vue";

export default {
name: "App",
data() {
return {
paymentsList: [
{
date: '13.05.2021',
category: 'Education',
price: 1,
},
{
date: '12.05.2021',
category: 'Education',
price: 2,
},
{
date: '11.05.2021',
category: 'Education',
price: 3,
},
{
date: '10.05.2021',
category: 'Education',
price: 4,
},
{
date: '13.05.2021',
category: 'Education',
price: 5,
},
{
date: '12.05.2021',
category: 'Education',
price: 6,
},
{
date: '11.05.2021',
category: 'Education',
price: 7,
},
{
date: '10.05.2021',
category: 'Education',
price: 8,
},
{
date: '13.05.2021',
category: 'Education',
price: 9,
},
{
date: '12.05.2021',
category: 'Education',
price: 10,
},
{
date: '11.05.2021',
category: 'Education',
price: 11,
},
{
date: '10.05.2021',
category: 'Education',
price: 12,
},
{
date: '13.05.2021',
category: 'Education',
price: 13,
},
{
date: '12.05.2021',
category: 'Education',
price: 14,
},
{
date: '11.05.2021',
category: 'Education',
price: 15,
},
{
date: '10.05.2021',
category: 'Education',
price: 16,
},
{
date: '13.05.2021',
category: 'Education',
price: 17,
},
{
date: '12.05.2021',
category: 'Education',
price: 18,
},
{
date: '11.05.2021',
category: 'Education',
price: 19,
},
{
date: '10.05.2021',
category: 'Education',
price: 20,
},
{
date: '13.05.2021',
category: 'Education',
price: 21,
},
{
date: '12.05.2021',
category: 'Education',
price: 22,
},
{
date: '11.05.2021',
category: 'Education',
price: 23,
},
{
date: '10.05.2021',
category: 'Education',
price: 24,
},
],
formIsVisible: false,
}
},
methods: {
onDataAdded(data) {
this.paymentsList.push(data)
},
clicked() {
this.formIsVisible = !this.formIsVisible;
console.log(this.formIsVisible);
},
},
components: {
PaymentsList,
PaymentsForm,

},
};
</script>
 
<style lang="scss" module>
#app {
font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
font-size: 26px;
}
</style>