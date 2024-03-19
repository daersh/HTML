// 01_[[Prototype]].js

// 모든 객체는 프로토 타입 객체에 접근할 수 있다.

const user = {
    activate: true,
    login: function() {
        if(this.activate) {
            console.log('로그인 성공');
        } else {
            console.log('로그인 실패');
        }
    }
}

console.log(user.__proto__.constructor === Object);
console.log(user.__proto__ === Object.prototype);

const user2 = {
    activate: false,
    login: function() {
        if(this.activate) {
            console.log('로그인 성공');
        } else {
            console.log('로그인 실패');
        }
    }
}

console.log(user2.__proto__);
const student = {
    passion: true
}
console.log(student.__proto__);

student.__proto__ = user2;              // 부모 객체를 자신의 프로토타입에 담으면 상속 개념이 된다.!!!!!!!!!!!!@!@!!@!@!@!@!@!@!@!@!@!@!@!@!@!@
console.log(student.__proto__);
student.login();

// prototype chain
const greedyStudent = {
    class: 1502,
    __proto__: student
}
console.log(greedyStudent.__proto__);
greedyStudent.login();
greedyStudent.activate = true;
greedyStudent.login();