// 01_constructor_function.js

//생성자 함수

// 1. 객체 리터럴 방식
const student1={
    name: '홍길동',
    age: 20,
    getInfo: function() {
        return `${this.name} is ${this.age} years old`;
    }
}
const student2={
    name: '홍',
    age: 222,
    getInfo: function() {
        return `${this.name} is ${this.age} years old`;
    }
}


console.log(student1.getInfo());
console.log(student2.getInfo());


// 객체 리터럴 방식으로 수백명을 만들 경우?


// 2. 생성자 함수 방식
/**
 * 객체를 생성하기 위한 프로퍼티들을 하나의 탬플릿 개념으로 생성자 함수로써 작성하면
 * 동일한 프로퍼티를 가지는 여러 객체들을 쉽게 생성해 낼 수 있다.
 */
function Student(name, age) {
    console.log('이 생성자의 this is ' + this );
    // 이 생성자 함수를 통해 생성될 객체가 this이다.
    this.name = name;
    this.age = age;
    this.getInfo = function() {
        //메서드가 호출한 객체가 this이다.
        return `${this.name} is ${this.age} years old`;
    }
}

const stu = new Student('엄복동', 20);
const stu2 = new Student('자전거', 222);

// 각 객체의 메서드 호출
console.log(stu.getInfo());
console.log(stu2.getInfo());
