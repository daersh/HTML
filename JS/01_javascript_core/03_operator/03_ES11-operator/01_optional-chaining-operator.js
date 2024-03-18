// 01,. optional-chaining-operator(옵셔널 체이닝 연산자)

/**
 * ECMA11(ECMAScript2020 License)에서 도입된 연산자로 좌항의 피연산자가 null 또는 undefined인 경우 undefined을 반환하고 그렇지 앟으면 우항의 프로퍼티 참조를 이어간다.
 * 
 */

var obj=null;
// var val= obj.value;  //err 발생
// console.log(val);

var val= obj?.value;        //npe 방지
console.log(val);

var str= '';                // falsy하지만 null이나 undefined는 아니다.
var len = str?.length;
console.log(len);
