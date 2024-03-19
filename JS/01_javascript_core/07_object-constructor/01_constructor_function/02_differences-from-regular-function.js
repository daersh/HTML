// 02_differences-from-regular-function.js

// 일반 함수와의 차이점들
function Student(name, age) {
    this.name = name;
    this.age = age;
    this.getInfo = function() {
        return `${this.name} is ${this.age} years old`;
    }
}

// 일반 함수와 생성자 함수의 특별한 형식적 차이 없다.
// new 연산자 없이 호출하면 일반 함수로 동작한다,


const stu = Student('복동', 20);            // built-in function
console.log(stu);
console.log(typeof Number('1'));

// 생성자 함수가 new 연산자 없이 호출되는 것을 방지하기 위해 ES6에서는 new.target을 지원하낟. 
// 이를 통해 new 없어도 new를 붙여주게 해서 빌트인 함수로 만들기

function Dog(name, age) {
    if(!new.target){                            // new 없이 함수 호출 시 true가 되게 하는 구문으로 생성자 호출을 재귀호출하여 생성 된 인스턴스를 반환한다.
        return new Dog(name, age);
    }
}
const dog = Dog('똥강아지', 20);                //built-in function
console.log(dog);
const dog2 = new Dog('똥강아지', 20);
console.log(dog2);

// 제공되는 빌트인 함수들: object, String, Number, Boolean, Date, Regex...
