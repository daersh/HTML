// 01_property-value-shorthand.js

var id= 'p-001';
var price = 30000;

var product = {
    id: id,
    price: price
};

// ES6에서는 프로퍼티 값으로 변수를 사용하는 경우 변수 이름과 프로퍼티 키가 동일한 이름일 때 생략할 수 있다. 
// 프로퍼티는 변수 이름과 일치되게 자동 생성된다.
var product2 = {id,price};      // 이렇게 줄여서 쓸 수 있다.

console.log(product);
console.log(product2);
