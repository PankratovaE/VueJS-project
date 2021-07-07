<template>
<div :class="[$style.wrapper]">
 
<div :class="[$style.input__block]">
<input :class="[$style.input__block_el]" placeholder="date" v-model="date" />
<select v-model="category">
    <option v-for="cat in getCategoriesList" :key="cat">{{ cat }}</option>
</select>
<!-- <input :class="[$style.input__block_el]" placeholder="category" v-model="category" /> -->
<input :class="[$style.input__block_el]" placeholder="price" v-model.number="price" />
<button :class="[$style.input__block_btn]" @click="save">ADD +</button>
</div>
</div>
</template>
 
<script>
import { mapMutations, mapGetters } from 'vuex';

export default {
    props: {
    
    },
    data() {
        return {
            date: '',
            category: '',
            price: 0,
        }
    },
    methods: {
        ...mapMutations([
            'addPaymentsListData',
        ]),

        save() {
            const { date, category, price } = this;
            this.$store.commit('addPaymentsListData', { date, category, price });
           
        },
    },
    mounted() {
        this.category = this.$route.params.category;
        this.price = this.$route.query.price;
        this.date = this.getCurDate;
    },
    computed: {
        ...mapGetters([
            'getCategoriesList', 'getCurDate'
        ]),
    },
    
}
</script>
 
<style lang="scss" module>
.wrapper {
margin: 0 auto;
padding: 0px;
font-size: 28px;
}
.input__block {
width: 200px;
display: flex;
flex-direction: column;
margin: 20px 20px;
}
.input__block_el {
height: 30px;
margin-top: 10px;
border: 1px solid rgb(182, 182, 182);
border-radius: 3px;
}
.input__block_btn {
width: 150px;
height: 30px;
margin-top: 10px;
align-self: flex-end;
}
 
</style>