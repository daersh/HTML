/**
 * data-type은 값의 종률르 말하며 자바스크립트(ES6{ECMAScript 6})는 7개의 데이터 타입이 있다.
 * (number, string, boolean, undefined, null, symbol, object 7가지)을 제공한다.
 */

//1. number
// 정수, 실수, 음수 모두 숫자 타입이다. - 내부적으로는 실수로만 인식한다.
var integer = 10;
var double = 10.5;
var negative = -10;
console.log(typeof integer);
console.log(typeof double);
console.log(typeof negative);
console.log(10/4);

/**
 * 숫자 타입은 추가적으로 세 가지 특별한 값도 표현할 수 있다.
 * Infinity: 양의 무한
 * -Infinity: 음의 무한
 * NaN:산술 연산 불가(not-a-number)
*/
console.log(10/0);              // Infinity
console.log(10/-0);             // -Infinity
console.log(1*'문자열');          // NaN        //문자열은 "" , '' 둘 중 아무거나 쓰면 된다~~~ (* @ _ @ *) (SAI: semi-colon auto Injection)

//2. string


//3. boolean

//4. undefined

//5. null

//6. symbol

//7.  object - 핵심 위 6개 빼면 다 객체이다. (함수도 객체이다.)

