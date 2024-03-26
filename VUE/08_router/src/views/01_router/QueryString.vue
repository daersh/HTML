<template>
    <div>
        <h1>querystring</h1>

        <h2>{{ currentRoute.query }}</h2>
        <h2>{{ currentRoute.query.name }}</h2>
        <h2>{{ currentRoute.query.age }}</h2>
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