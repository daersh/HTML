<template>
    <div :class="{container: true , dark: darkState}" >
        props 입력: <input v-model="message"/>
        <PropsChild :message="message" ></PropsChild>
        
        
        <input v-model="readValue"/>
        <ReadProps :readValue ="readValue"> </ReadProps>
        부모의 readValue: {{readValue}}
    <DarkMode @toggle="toggleDarkMode"/>
    </div>
</template>


<!-- 
    props
        부모에서 자식 컴포넌트로 데이터 전달할 때 우리는 다양한 {slot}을 이용할 수 있다.
        하지만 slot은 컴텐츠(또는 구조)를 전달하기 위해 사용하는 것으로 단일 데이터 전달할 때는 부적합하다.
        부모에게 전달받은 데이터를 조작하는데에도 어려움이 있다,
        그러므로 데이터를 전달하기 위해서만 props를 사용한다.
        
        -중요-
            (props는 자식에게 물려주면 자식은 readOnly로 써야한다. vue는 자식 컴포넌트가 물려받은 값을 수정해도 부모 컴포넌트에 영향을 주지 않는다.)

 -->
<script setup>
    import {ref} from "vue";
    import PropsChild from "./PropsChild.vue";
    import DarkMode from "./DarkMode.vue";
    import ReadProps from "./ReadProps.vue";
    const message = ref("hello");
    const darkState = ref(false);
    const readValue = ref('Vue는 즐겁다.');
    function toggleDarkMode() {
        darkState.value =!darkState.value;
    }

</script>


<style  scoped>
    .container{
        border: 1px solid ;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .dark{
        background-color: rgb(35, 35, 35);
        color: white;
    }

</style>