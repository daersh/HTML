// 01_var.js


//   ========= var를 사용하지 말아야 할 이유 3가지 =========

// 1. 변수 중복 선언 허용
var msg= 'hello';
console.log(msg);   // result: hello
var msg = 'world';
console.log(msg); // result: world

var msg;
console.log(msg); // result: world      undefined가 아닌 이전 값이 나온다................................................................

// 2. 함수 레벨 스코프를 가지는 문제
// 앞서 살펴봄(01_scope/02_function-level-scope.js)에서

//3. 변수 호이스팅
/**
 * var 키워드로 하면 변수 호이스팅에 의해 변수 선언문이 스코프의 선두로 올라가게 된다.
 * 즉, 변수 선언문 이전에 참조할 수 있게 되는 문제가 발생한다.
 * 이는 오류가 발생하지 않지만 프로그램의 흐름에 맞지 않고 가독성을 떨어뜨린다.
 */
console.log(test);
test = '반갑습니다.';
var test = 'test';      
console.log(test);