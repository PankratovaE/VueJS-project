<template>
    <div :class="[$style.overlay]">
        <div :class="[$style.wrapper]">
                <header>{{ name1 }}</header>
                <PaymentsForm v-if="name1 === 'paymentsform'" />
                <EditForm v-if="name1 === 'editform'" />
                <button :class="[$style.modal__btn]" @click="$modal.close()">Close window</button>
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
        height: 300px;
        width: 300px;
        background-color: white;
        border: 1px solid grey;
    }
    .modal__btn {
        width: 150px;
        height: 30px;
        margin-left: 70px;
    }

</style>