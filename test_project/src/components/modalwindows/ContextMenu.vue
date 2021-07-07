<template>
  <div :class="[$style.wrapper]">
      <div>
        <div @click="editItem">Редактировать</div>
        <div @click="delItem">Удалить</div>
      </div>
      <PaymentsForm v-if="editForm" />
  </div>
</template>

<script>
import PaymentsForm from '../PaymentsForm.vue';

export default {
    components: {
        PaymentsForm,
    },
    data() {
        return {
            editForm: false,
        }
    },
    props: {
        item: {},
    },
    methods: {
        editItem () {
            this.editForm = true;
            this.$modal.edit(this.item);
        },
        delItem () {
            this.$modal.delItem(this.item);
        }
    }
}
</script>

<style lang="scss" module>
    .wrapper {
        background: coral;
        position: absolute;
        top: 200px;
        left: 800px;
    }

</style>