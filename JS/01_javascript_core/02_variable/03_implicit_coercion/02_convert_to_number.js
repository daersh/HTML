//02_convert_to_number.js
console.log('====== 숫자 타입으로 변환 ========');

// 덧셈을 제외한 연산은 모두 가능하다.
console.log(10+'5');                    // 105
console.log(10-'5');                    // 5
console.log(10*'5');                    // 50
console.log(10/'5');                    // 2
console.log(10%'javascript');           //  NaN
console.log(10>'5');                    // true

console.log(+'');                       // 0
console.log(-'');                       // 0
console.log(+'Javascript');             // 0
console.log(+true);                     // 1
console.log(+false);                    // 0
console.log(+null);                     // 0
console.log(+undefined);                // NaN
//console.log(+Symbol());               //  error
console.log(+new Date());               // 1710469804951
console.log(+{});                       // NaN
console.log(+[]);                       // 0
console.log(+function(){});             // NaN

// 빈문자열이거나 빈 배열, null, false는 0으로 true는 1로 반환