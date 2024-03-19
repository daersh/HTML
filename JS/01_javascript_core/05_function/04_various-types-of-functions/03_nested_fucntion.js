// 03_nested_fucntion.js

// 중첩 함수
    // 함수 내부에 정의된 함수를 중첩 함수 또는 내부 함수라고 한다.
    // 중첩 함수를 포함하는 함수를 외부 함수라고 한다.
    // 일반적으로 중첩 함수는 자신을 포함하는 외부 함수를 돕는 헬퍼(helper) 함수의 역할을 한다.
    // closer 함수에 사용????????
function outer() {
    var outerVar= '외부함수';
    
    function inner() {
        var innerVar ='내부함수';
        console.log(outerVar);
        console.log(innerVar);
    }
    inner();
}

outer();

