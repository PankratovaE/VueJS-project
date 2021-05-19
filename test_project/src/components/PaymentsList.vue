<template>
<div :class="[$style.wrapper]">
<div :class="[$style.costs__list, $style.costs__list_head]">
    <div :class="[$style.costs__list_n]">#</div>
    <div :class="[$style.costs__list_el]">Date</div>
    <div :class="[$style.costs__list_el]">Category</div>
    <div :class="[$style.costs__list_el]">Price</div>
</div>
<div v-for="(p, index) in paginatedData" :key="index" :class="[$style.costs__list]">
    <div :class="[$style.costs__list_n]">{{ size*pageNumber+1+index }}</div>
    <div :class="[$style.costs__list_el]">{{ p.date }}</div>
    <div :class="[$style.costs__list_el]">{{ p.category }}</div>
    <div :class="[$style.costs__list_el]">{{ p.price }}</div>
</div>
<div :class="[$style.pagination__block]">
<button @click="prevPage" :disabled="pageNumber == 0">Prev</button>
<div v-for="(i, index) in pageCount" :key="index">
    <button @click="goToPage(i)">{{ i }}</button>
</div>
<button @click="nextPage" :disabled="pageNumber + 1 == pageCount">Next</button>
</div>
</div>
</template>
 
<script>
export default {
props: {
items: {
type: Array,
required: true,
},
size: {
type: Number,
required: false,
default: 8,
},
},
data() {
return {
pageNumber:0,
 
}
},
methods: {
    nextPage() {
        this.pageNumber++;
        console.log(this.items)
    },
    prevPage() {
        this.pageNumber--;
    },
    goToPage(i) {
        this.pageNumber = i - 1;
    }
},
computed: {
    pageCount() {
        let l = this.items.length,
        s = this.size;
        return Math.ceil(l/s);
    },
    paginatedData() {
        const start = this.pageNumber * this.size,
        end = start + this.size;
        return this.items.slice(start, end);
    }
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