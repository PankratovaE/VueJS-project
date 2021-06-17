<template>
        <v-form class="px-4 py-4">
            <v-text-field
                v-model="date"
                @click="shown = true">
            </v-text-field>
            <v-overlay v-show="shown">
                <v-date-picker
                    v-model="date"
                    elevation="2"
                    >
                </v-date-picker>
            </v-overlay>
            <v-select
                :items="getCategoriesList"
                label="Categories"
                v-model="category">
                <!-- <option v-for="cat in getCategoriesList" :key="cat">{{ cat }}</option> -->
            </v-select>
            <!-- <input :class="[$style.input__block_el]" placeholder="category" v-model="category" /> -->
            <v-text-field
                label="price"
                v-model.number="price">
            </v-text-field>
            <v-btn color="teal" dark  @click="save">ADD <v-icon dark>mdi-plus</v-icon></v-btn>
        </v-form>
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
            shown: false
        }
    },
    watch: {
        date() {
            this.shown = false;
        }
    },
    methods: {
        ...mapMutations([
            'addPaymentsListData', 'sendData'
        ]),

        save() {
            const { date, category, price } = this;
            this.$store.commit('addPaymentsListData', { date, category, price });
            // this.$store.dispatch('sendData');
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
</style>