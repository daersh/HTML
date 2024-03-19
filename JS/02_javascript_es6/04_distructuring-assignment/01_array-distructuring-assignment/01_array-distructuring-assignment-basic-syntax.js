// 01_array-distructuring-assignment-basic-syntax.js

// 배열 구조 분해 할당 문법
/**
 * 구조 분해 할당을 사용하여 배열이나 객체를 가각의 변수로 분해하여 연결(할당)할 수 있다.
 */

let nameArr = ['gildong','hong'];
// let firstName = nameArr[0];
// let lastName = nameArr[1];
// console.log(firstName+' ' +lastName);

let [firstName,lastName] = nameArr;
console.log(firstName+' '+lastName);

// 반환값이 배열인 메서드를 활용한 구조분해 할당
let [firstName2,lastName2] = 'Saimdang shin'.split(' ');
console.log(firstName2+' '+lastName2);
let [firstName3,lastName3] = 'Saimdang shin'.match(/[a-z]+/gi);
console.log(firstName3+' '+lastName3);

// 구조분해 할당 시 쉼표를 활용하여 불필요한 배열 요소를 버릴 수 있다.
let [firstName4, ,lastName4] = ['firstName', 'middleName','lastName']
console.log(firstName4+' '+lastName4);
