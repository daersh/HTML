// 01_in-operator.js in 연산자
// 프로퍼티 존재 여부 확인하기 -true or false

var student = {
    name: '홍길동',
    age: 20,
    test: undefined
};


console.log('name' in student); // true
console.log('age' in student); // true
console.log('test' in student); // false

//for in 문
// 객체의 모든 프로퍼티 키 순회
for (var key in student) {
    console.log(`key: ${key}`);
    console.log(`student[${key}]: ${student[key]}`);        // 대괄호 표기법으로 접근하지만 key는 변수이므로 
                                                            // 홀따옴표(')를 붙이면 안된다.
    console.log(`<td>${student[key]}</td>`);
}

