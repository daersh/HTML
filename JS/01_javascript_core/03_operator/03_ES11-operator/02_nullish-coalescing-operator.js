//02_nullish-coalescing-operator.js 널 병합 연산자

/*
    ECMA11에서 도입된 연산자로 좌항의 연산자가 널 또는 undefined인 경우 우항의 피연산자를 반환하고,
    그렇지 않으면 좌항의 연산자 반환
    변수에 기본 값을  설정할 때 유용하다.
*/

var test=null?? '기본 값';
console.log(test);

var value1= ''||'기본값';
var value2= ''??'기본값';
console.log(value1);
console.log(value2);

