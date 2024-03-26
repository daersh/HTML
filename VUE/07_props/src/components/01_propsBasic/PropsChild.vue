<template>

        <h3>입력 받은 값: {{ props.message }}</h3>

</template>

<script setup>
    import {defineProps} from "vue";
    // defineProps함수를 통해 String형의 메시지 props를 받아 props 변수에 저장한다.
    const props = defineProps({
        message: String
    });
</script>

<style scoped>

</style>