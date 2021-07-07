<template>
    <div :class="[$style.overlay]">
        <div :class="[$style.wrapper]">
                <header>{{ name1 }}</header>
                <PaymentsForm v-if="name1 === 'paymentsform'" />
                <EditForm v-if="name1 === 'editform'" />
                <v-btn dark color="teal" :class="[$style.modal__btn]" @click="$modal.close()">Close window</v-btn>
        </div>
    </div>
</template>

<script>
import PaymentsForm from '../PaymentsForm';
import EditForm from '../EditForm';

export default {
    components: {
        PaymentsForm,
        EditForm
    },
    props: {
        name1: String,
    },
}
</script>

<style lang="scss" module>
    .overlay {
        position: absolute;
        height: 100vh;
        width: 100%;
        background-color: rgba(170, 170, 170, 0.5);
    }
    .wrapper {
        position: absolute;
        align-items: center;
        top: 50px;
        left: 50px;
        height: 350px;
        width: 300px;
        background-color: white;
    }
    .modal__btn {
      margin-left: 16px;
    }

</style>