// 02_let.js


// 1. 변수 중복 선언 금지
let msg= 'hello';
console.log(msg);   // result: hello
// let msg = 'world';                   // err
// let msg;                             // err

// 2. 함수 레벨 스코프 -> 블록 레벨 스코프
let i = 0;
for(let i = 0; i < 10; i++){}
console.log(i);         

// 3. 변수 호이스팅을 방지하는 효과 
console.log(test);                      // err
let test;