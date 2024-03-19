// 02_result.js
// 반환문

function hello(name) {
    return `Hello, ${name}!`;
    console.log(name);  // 반환문 이후 코드는 무시
}
console.log(hello('you guan soong'));

function func(){
    console.log("함수가 실행됐는데 반환이 안보여유~~~~@@");
    // 반환 값을 지정하지 않거나 생략하면 undefined가 반환된다.
}

console.log(func());
