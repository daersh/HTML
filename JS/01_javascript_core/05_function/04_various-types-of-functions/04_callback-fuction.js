// 04_callback-fuction.js

//전달 받은 값을 1 증가시켜 반환하는 함수
function increase(num) {
    return num + 1;
}
// 전달 받은 값을 1 감소시켜 반환하는 함수
function decrease(num) {
    return num - 1;
}

//전달 받은 함수에 전달 받은 값을 적용시켜 주는 고차 함수(전달 받은 함수를 활용하는 함수)
function apply(func, value) {
    return func(value);         // 콜백 함수라 한다.
}

var num = 100;
console.log(apply(increase, decrease(num)));
console.log(apply(decrease, num));
console.log(apply(increase, increase(num)));
console.log(apply(decrease, decrease(num)));

// 배열의 정렬을 다룰 때의 예시
console.log([1, 2, 3, 4, 5].sort(function (a, b) {
    return a - b;
}));
console.log([1, 2, 3, 4, 5].sort(function (a, b) {
    return b - a;
}));

// callback 함수
// 비동기처리(이벤트, 타이머, ajax, fetch ...) 에 활용되는 중요한 패턴이다.
// 