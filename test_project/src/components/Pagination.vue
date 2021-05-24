<template>
<div :class="[$style.pagination__block]">
    <button @click="setPrevPage" :disabled="getPageNumber == 0">Prev</button>
    <div v-for="(i, index) in getPageCount" :key="index">
        <button @click="setPage(i)">{{ i }}</button>
    </div>
    <button @click="setNextPage" :disabled="getPageNumber == getPageCount -1">Next</button>
   
</div>
</template>

<script>

import { mapMutations, mapGetters } from 'vuex';

export default {
    methods: {
        ...mapMutations([
            'setNextPage', 'setPrevPage', 'setPage'
        ]),
    },
    computed: {
        ...mapGetters([
            'getPageNumber', 'getPageCount'
        ]),
    },
}
</script>

<style lang="scss" module>
    .pagination__block {
        display: flex;
        margin-top: 30px
    }
</style>