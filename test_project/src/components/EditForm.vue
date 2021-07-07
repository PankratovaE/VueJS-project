<template>
  <div :class="[$style.wrapper]">
 
<div :class="[$style.input__block]">
<input :class="[$style.input__block_el]" placeholder="date" v-model="date" />
<select v-model="category">
    <option v-for="cat in getCategoriesList" :key="cat">{{ cat }}</option>
</select>
<input :class="[$style.input__block_el]" placeholder="price" v-model.number="price" />
<button :class="[$style.input__block_btn]" @click="editItem">Save changes</button>
<button :class="[$style.input__block_btn]" @click="delItem">Remove item</button>

</div>
</div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex';

export default {
  data() {
    return {
      price: 0,
      category: '',
      date: '',
    }
  },
  methods: {
    ...mapActions([
      'setNewValue',
    ]),
    editItem() {
      const { date, category, price } = this;
      this.$store.commit('setNewValue', { category, date, price});
      this.$modal.close();
    },
    delItem() {
      this.$store.commit('delItem');
      this.$modal.close();
    },
  },

  computed: {
        ...mapGetters([
            'getCategoriesList', 'getEditObj'
        ]),
    },
    mounted() {
      let { category, date, price } = this.getEditObj;
      this.category = category;
      this.date = date;
      this.price = price;
      this.$modal.EventBus.$on('edit', this.editItem);
      this.$modal.EventBus.$on('delItem', this.delItem);
    },

    beforeDestroy () {
      this.$modal.EventBus.$off('edit', this.editItem);
      this.$modal.EventBus.$off('delItem', this.delItem);
    }
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