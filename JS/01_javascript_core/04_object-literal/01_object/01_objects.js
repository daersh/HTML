
//자바 스크립트는 객체 기반 프로그래밍 언어로 원시 값을 제외한 나머지 값(함수 배열 정규 표현식 등)은 객체이다.


var student ={
    //key: 값의 쌍으로 구성된 프로퍼티(속성)
    name: '홍길동',
    age: 20,
    major: '컴퓨터공학',
    // 메서드: 프로퍼티(상태 데이터)를 참조하고 조작할 수 있는 동작(behavior)(기능)
    getInfo: function(){
        return this.name +'' + this.age +'' + this.major;
    }
} //리터럴 객체의 중괄호는 코드 블록과는 다르다.(세미클론을 붙인다.)
console.log(student); 
console.log(student.getInfo());
console.log(student.age);
console.log(student.getInfo);
