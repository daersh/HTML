// 01_define-function.js

// function-declaration( 함수 선언문 ).
function hello(name) {
    return `Hello, ${name}!`;
}
console.log(hello('홍길동'));

// function-expression( 함수 표현식 ).
// 자바 스크립트의 함수는 객체 타입의 값으로 값의 설정을 갖는 객체를 일급 객체라고 한다.   [일 급 객 체 (4가지 조건을 만족하면 "일급객체"라고 한다. )]
// 함수는 일급 객체이므로 함수 리터럴 로 생성한 함수 객체를 변수에 할당할 수 있다.
var hello2 = function(name) {
    return `Hello, ${name}!`;
};
console.log(hello2('홍길동'));

