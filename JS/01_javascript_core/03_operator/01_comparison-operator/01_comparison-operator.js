//01_comparison-operator.js

// 01. comparison-operator

// 동등/ 동일(일치) 비교 연산자

// 1. 숫자 1, 문자 '1'
console.log(`1 == 1: ${1 == 1}`);
console.log(`1 == '1': ${1 == '1'}`);
console.log(`1 == true: ${'1' == true}`); 
console.log(`1 === '1': ${1 === '1'}`); // 자료형까지 일치하는지는 === 으로 비교

console.log(`0 === false: ${0 === false}`); // 자료형까지 일치하는지는 === 으로 비교

// 2. NaN은 자신과 일치하지 않는 유일한 값이다.
console.log(`NaN == NaN: ${NaN == NaN}`);           //false
console.log(`NaN === NaN: ${NaN === NaN}`);         //false

// 2-1. Number.isNaN() 함수를 통해 비교 가능하다.
console.log(`isNaN(NaN): ${isNaN(NaN)}`);          //true
console.log(`Number.isNaN(NaN): ${Number.isNaN(NaN)}`); //true

// 3. 일치하지 않는 값 비교
console.log(`1!='1': ${1!='1'}`); 
console.log(`1== '1': ${1== '1'}`);
console.log(`1 > 1: ${1 > 1}`);                     
console.log(`1 > '1': ${1 > '1'}`);                 
console.log(`1 > true: ${'1' > true}`); 
console.log(`1 >= '1': ${1 >= '1'}`); 
console.log(`0 >= false: ${0 >= false}`); 
