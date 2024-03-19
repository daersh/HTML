// 01_spread-syntax.js

// 스프레드 문법, 전개 문법

let arr = [10,20,30];
console.log(...arr);

// 두줄 다 같은 결과
console.log(`가장 큰 값: ${Math.max(10,30,20)}`);       
console.log(`가장 큰 값: ${Math.max(...arr)}`);

let arr1 = [10,30,20];
let arr2 = [100,300,200];

// 배열을 결합(concat)해서 하나의 배열로 만듦
console.log([...arr1,...arr2]);   //배열로 바꿔줌
console.log(...arr1, ...arr2);
console.log(...arr1, -1,...arr2,-2,-3);


console.log(`가장 큰 값: ${Math.max(...arr1,...arr2)}`);

// 문자열일 때 
let str = 'JavaScript';
console.log(...str);
console.log([...str]);  //배열로 바꿔줌                 // 스프레드 연산자로 문자 하나씩 들어간 배열을 쉽게 만들 수 있다.
console.log([Array.from(str)]);  //배열로 바꿔줌        // 무언가를 배열로 바꿀 때 보편적으로 사용하는 배열의 from 메서드
