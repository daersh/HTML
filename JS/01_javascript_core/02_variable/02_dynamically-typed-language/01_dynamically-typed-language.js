//01_dynamically-typed-language.js
/** 
 * symbol은 es6에서 추가 된 7번 째 타입으로 변경 불가능한 원시 타입의 값이다.
 * 다른 값과 중복되지 않는 유일무이한 값으로 이름 충돌 위험이 업슨ㄴ 객체의 유일한 프로퍼티 키를 만들기 위해 사용한다.
 * sybol 외의 원시 값은 리터럴을 통해 생성하지만 심볼은 Symbol 함수를 통해 호출하여 생성한다.
 */

var test;
console.log(typeof test);

test = 10;
console.log('10=       '+typeof test);

test = '10';
console.log('\'10\'=     '+typeof test);

test = true;
console.log('true=     '+typeof test);

test = null;
console.log('null=     '+ test);

test = Symbol();
console.log('Symbol()= '+typeof test);

test = {};
console.log('{}=       '+typeof test);

test = [];
console.log('[]=       '+typeof test);

test = function(){};
console.log('function(){}=     '+typeof test);

