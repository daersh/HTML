// 05_recursive-function.js

// 재귀
function factorial(num) {
    if (num <= 1) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}

for(i=0; i<10; i++) {
    console.log(factorial(i) );
}

// 재귀 함수는 반복처리를 반복문 없이 구현할 수 있다는 장점이 있고 추가 변수를 쓰지 않아도 되지만 
// 무한 반복, 스택 오버플로우를 조심할 것