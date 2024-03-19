// 01_first-class-object.js

//일급객체
/**
 * 1. 무명의 리터럴로 생성할 수 있다. 즉 런타임에 생성이 가능하다.
 * 2. 변수나 자료구조(객체, 배열)에 저장할 수 있다.
 * 3. 함수의 매개변수로 전달할 수 있다.
 * 4. 함수의 반환값으로 사용할 수 있다.
 */


// 1, 2 번 만족
var hello = function(){
    return 'Hello';
}

// 3,4 만족
function repeat(func, count){
    for(var i = 0; i < count; i++){
        console.log(func());
    }
    return function(){
        console.log(`${count} 번 반복 완료`);
    }
}
var returnFunc = repeat(hello, 3);
returnFunc();
repeat(hello, 4)();