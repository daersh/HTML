

<template>
    
    <h1> {{ props.readValue }} </h1>
    자식의 readValue를 수정하기
    <input type="text" v-model="props.readValue">
</template>

<script setup>
    import {defineProps} from "vue";
    const props = defineProps({
        readValue: String,
    });

</script>

<style scoped>

</style>