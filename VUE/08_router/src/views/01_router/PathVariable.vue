<template>
    <div>
        <h1>Path</h1>
        <h2>{{ currentRoute.params.id }}</h2>
    </div>
</template>

<script setup>
    import {useRoute} from 'vue-router';
    const currentRoute = useRoute();
</script>

<style scoped>
    h1{
        color:rgb(12, 142, 255);
    }
</style>