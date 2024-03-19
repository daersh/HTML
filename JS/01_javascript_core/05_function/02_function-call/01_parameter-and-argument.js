// 01_parameter-and-argument.js   
// 매개 변수와 인수

// 함수 선언문
function hello(name) {
    console.log(name);

    console.log('arguments:', arguments);       //모든 인수(전달인자,매개변수)는 암묵적으로 arguments에 보관된다!!!!!!!! ( 일종의 " 가 변 인 자 " 개념이다. )
    console.log('arguments.length:', arguments.length);
    for (i in arguments ) {
        console.log('arguments[' + i + ']:', arguments[i]);
    }

    return `Hello, ${name}!`;
}

console.log("1.");
var result =  hello('홍길동');
console.log(result);

console.log("2.");
result =  hello();
console.log(result);

console.log("3.");
result =  hello('이순신','유관순');
console.log(result);                //이순신.

