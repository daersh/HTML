<template>
    
    <h3>grand-child: {{ injectCount }} </h3>
    <button @click="injectCount++"> grand-child ++ </button>
</template>

<script setup>
    import { ref, inject } from 'vue'
    const injectCount = inject('count');
</script>
