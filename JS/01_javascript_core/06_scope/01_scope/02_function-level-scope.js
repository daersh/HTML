// 02_function-level-scope.js
// 함수 레벨 스코프
/**
 * c, java 등 대부분 프로그래밍 언어는 코드블록(if,for,while,try/catch 등)이 지역 스코프를 만드는 블록 레벨 스코프(block level scope)를 가진다.
 * 하지만 var 키워드로 선언도 된 변수는 함수의 코드블록(함수 몸체)만 지역 스코프로 인정하는 함수 레벨 스코프(function block level scope)를 가진다.
 * 이후 이 부분을 통일하기 위해 ES6에서 도입된 let, const 키워드를 다루게 된다.
 */


var i = 0;

// for 문 코드 블럭() 내부에서 i라는 변수는 지역변수의 개념이 아니다 
// 함수{} 블럭 아니면 var은 하나의 스코프로 보지 않는다.
for(var i = 0; i < 10; i++){}

console.log(i);         // result: 10  변수명이 같은 지역변수가 외부 지역변수에 영향을 준다 (var 때문에 ~~~~@~@~@~@~@~@~@~@~)

// var 이 문제다.
// 이래서 var을 안쓰고 let을 사용한다.
let j = 0;
for(let j = 0; j < 10; j++){}
console.log(j);         // result: 0

