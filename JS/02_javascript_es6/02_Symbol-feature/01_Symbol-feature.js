// 01_Symbol-feature.js

//심볼 특징
let student = {
    name: '홍길동'
}

let id = Symbol('id');
student[id] = 1;        // property 추가
console.log(student[id]);   

// 객체가 가진 프로퍼티 확인
console.log(Object.keys(student));                      // Symbol('id') 안나옴
console.log(Object.getOwnPropertyNames(student));       // Symbol('id') 안나옴

for(let key in student) {
    console.log(key);                                   // Symbol('id') 안나옴
}
// 즉 Symbol('id')은 숨기기 위해 사용할 수 있다. (숨김 프로퍼티)
/**
 * 기존에 작성 된 코드에 영향을 주지 않고 새로운 프로퍼티를 추가하기 위해,
 * 즉 하위 호환성을 보장하기 위해 도입되었다고 할 수 있다.
 */
