//04_property-change-add-remove.js

var dog={
    name: '뽀삐'
};

// 1. 프로퍼티 수정
dog.name = '두부';
console.log(dog);

// 2. 프로퍼티 동적 추가
dog.age = 2;
console.log(dog);

// 3. 프로퍼티 삭제
delete dog.age;
delete dog.something;   // 없는 것을 제거해도 코드가 정상 작동한다. 에러 조차 발생하지 않는다.
console.log(dog);