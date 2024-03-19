// 01_array-and-object-copy.js

// 스프레드 문법을 이용한 배열 및 객체 복사

// 1. 배열 복사
let arr = [10,30,20];
let arrCopy = arr;          // 얕은 복사
let arrCopy1 = [...arr];    // 깊은 복사

console.log(arr);
console.log(arrCopy);

console.log(arr === arrCopy);  // 얕운 복사이기 때문에 true
console.log(arr === arrCopy1);  // 깊은 복사이기 때문에 false

// 2. 객체 복사
let obj = {name: '홍길동', age: 20, addr: 'seoul', hobby: ['coding','music']};
// let objCopy = {...obj};
let age = 30;
let objCopy = {...obj,age}; // obj의 age 빼고 복사하고 age는 30이 들어가게 된다. ( 나머지 연산자 개념 )

console.log(obj); //{ name: '홍길동', age: 20, addr: 'seoul', hobby: [ 'coding', 'music' ] }
console.log(objCopy); //{ name: '홍길동', age: 30, addr: 'seoul', hobby: [ 'coding', 'music' ] }
console.log(obj === objCopy);  // 깊은 복사이기 때문에 false
