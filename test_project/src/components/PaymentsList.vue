<template>
<div :class="[$style.wrapper]">
<div :class="[$style.costs__list, $style.costs__list_head]">
    <div :class="[$style.costs__list_n]">#</div>
    <div :class="[$style.costs__list_el]">Date</div>
    <div :class="[$style.costs__list_el]">Category</div>
    <div :class="[$style.costs__list_el]">Price</div>
</div>
<div v-for="(p, index) in getPaginatedData" :key="index" :class="[$style.costs__list]">
    <div :class="[$style.costs__list_n]">{{ getSize*getPageNumber+1+index }}</div>
    <div :class="[$style.costs__list_el]">{{ p.date }}</div>
    <div :class="[$style.costs__list_el]">{{ p.category }}</div>
    <div :class="[$style.costs__list_el]">{{ p.price }}</div>
</div>
<Pagination />
</div>
</template>
 
<script>
import { mapGetters, mapMutations } from 'vuex'
import Pagination from "../components/Pagination.vue";

export default {
    components: {
        Pagination
    },
    methods: {
        ...mapMutations([
            'setPageCount'
        ]),

    },
    computed: {
 
        ...mapGetters([
            'getPaginatedData', 'getSize', 'getPageNumber', 'getPaymentsList'
        ])
    },
 
}
</script>
 
<style lang="scss" module>
.wrapper {
font-size: 22px;

}
.costs__list {
display: flex
 
}
.costs__list_head {
margin-bottom: 20px;
}
.costs__list_el {
width: 200px;
}
.costs__list_n {
width: 100px;
}
.pagination__block {
    display: flex;
    margin-top: 30px
    
}
 

</style>