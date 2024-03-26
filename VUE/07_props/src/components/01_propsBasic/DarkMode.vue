

<!-- 
    자식 컴포넌트가 부모 컴포넌트로 발산(emit(이벤트 이름))
 -->
 
<template>
    <button @click='emit("toggle")'> darck mode</button>
</template>

<script setup>
    // 부모의 이벤트 가져오기 위함
    // 자식이 부모에도 영향을 주기 위해 사용
    import {defineEmits} from "vue";

    // 부모로부터 물려받은 toggle이라는 이벤트를 호출할 수 있는 "함수" 를 반환(defineEmits를 활용하며 배열로 이벤트 이름 작성)
    const emit = defineEmits(['toggle']);   // 부모의 toggle을 가져오겠다.


</script>

