// 01_arrow-function-basic-syntax.js

var message;

//기존 함수 표현식
message = function(name) {
    return `Hello, ${name}!`;
};
console.log(message('이현우'));

// function 키워드 생략 및 화살표로 표기 (이것도 " 익 명 함 수 " 이다.)
message = (name) => {   
    return `Hello, ${name}!`;
}
console.log(message('이현우'));

// 더 업그레이드 버전  
// 함수 실행 구문이 하나만 있는 경우 중괄호 생략 가능
// 함수 내부의 명령문이 값으로 평가될 수 있는 표현식일 경우 암묵적으로 반환한다.(return 생략 가능)
message = (name) => `Hello, ${name}`;
console.log(message('이현우'));
message = () => 1+2;
console.log(message());


message = (val1, val2) => "Arrow" + val1 + val2; ;
console.log(message('aaa', 'bbb'));
// 매개변수가 하나인 경우에만 () 생략이 가능하다. 
message = val1 => "Arrow" + val1; ;
console.log(message('function is strange~~!!!!!'));

