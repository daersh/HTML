// 05_symbol_and_object

// 1. symbol type
// 

var key1 = Symbol('key');
var key2 = Symbol('key');
console.log(key1);
console.log(key2);
// literal 객체 생성
// 2. object type
var obj = {};
obj[key1] = 'value1';
obj[key2] = 'value2';
console.log(obj);
console.log(obj[key1]);             // { key: 'value1' }
console.log(obj[key2]);             // { key: 'value2' }

