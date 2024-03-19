// 01_immediately-invoked-function.js 
// 즉시 실행 함수
// 함수 정의와 동시에 즉시 호출되는 함수로 단 한번만 호출고고ㅓ 다시 호출 불가하다.

console.log('=============== Immediately Invoked Function ===================');
(function(){
    console.log('익명 함수이다. 함수 정의와 동시에 호출되는 익명 즉시 실행 함수이다.');
})();

(function(name){
    console.log('기명 즉시 실행 함수! 함수 정의와 동시 호출!!!');
    console.log(`${name}님 하이요~`);
}    
)('홍길동');

// hello('홍길동이');

// 즉시 실행 함수 내에 코드를 모아 두면 혹시 있을 수 도 있는 변수나 함수 이름 충돌 방지 가능하다.
// 별도로 다시 호출할 일 없는 함수인 경우 적용.
// 그렇게 잘 쓰는 경우 없다.