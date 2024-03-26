<template>
    <div>
        <h1>MyComponent</h1>

    </div>
</template>

<script>
import {onMounted} from 'vue';
export default {
    setup(){
      onMounted( async() => {
        console.log('onMounted');
      })
    }
}

</script>

<style scoped>

</style>