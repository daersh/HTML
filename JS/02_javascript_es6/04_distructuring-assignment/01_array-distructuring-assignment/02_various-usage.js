// 02_various-usage.js

// 다양한 사용법

// 객체의 프로퍼티에도 한번에 구조 분해 할당 후 추가할 수 있다.
let user = {};
[user.firstName, user.lastName] = "gwansoon yu".split(' ');
console.log(user);

// 나머지 요소 한번에 가져오기
let [sign1, sign2, ...rset] = ['양자리','황소자리','쌍둥이자리','게자리','사자자리'];
console.log(sign1, sign2, rset);

// 변수 교환 용도로도 사용할 수 있다.
let student = '유관순';
let teacher = '홍길동';
[student, teacher] = [teacher, student];
console.log(student, teacher);

// 기본값을 설정하고 사용할 수 있다.
let [firstName5= '아무개', lastName5 = '김' ]= ["길동"];
console.log(firstName5, lastName5);
