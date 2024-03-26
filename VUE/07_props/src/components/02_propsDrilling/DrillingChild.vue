<template>
    <div>
        <h2>
            child: {{ count }}
        </h2>

        <button @click="count++">child++</button>
        <DrillingGrandChild  ></DrillingGrandChild>
    
    </div>
</template>

<script setup>
    import { ref,inject } from 'vue';
    import DrillingGrandChild from './DrillingGrandChild.vue';
    const injectCount = inject('count');
    const count = ref(injectCount);
</script>

<style scoped>

</style>