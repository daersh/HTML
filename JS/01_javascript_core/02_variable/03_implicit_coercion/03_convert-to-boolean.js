//03_convert-to-boolean.js

// javascript 엔진은 불리언 타입이 아닌 값을 truthy 값(참으로 평가되는 값) 또는 falsey 값(거짓으로 평가가되는 값)를 반환한다.
// Truthy -> true, falsey -> false로 암묵적 타입 변환을 한다.

console.log('====== Boolean 타입으로 변환 ========');

if(true) console.log("if(true)");                       // true
if(false) console.log("if(false)");                     // falsy
if(undefined) console.log("if(undefined)");             // falsy
if(null) console.log("if(null)");                       // falsy
if(0) console.log("if(0)");                             // falsy
if(NaN) console.log("if(NaN)");                         // falsy
if('') console.log("if('')");                           // falsy
if('JavaScript') console.log("if('JavaScript')");       // truthy
