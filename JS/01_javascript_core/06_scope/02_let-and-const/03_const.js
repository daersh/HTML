// 03_const.js

// final 변수 (상수)

// const x;             선언과 동시에 초기화 안하면 에러 발생
const x = 10;
console.log(x);
// x= 1;                변수 변경 불가
// console.log(x);

// 일반적인 상수는 자바처럼 대문자+ 스네이크 표기법으로 표현한다.
const DISCOUNT_RATE = 0.15;
let price = 15000;
let discountPrice = price * (1-DISCOUNT_RATE);  // 15000 * 0.15 = 12500
console.log(discountPrice);

/**
 * ES6 이후라면 var 사용 x
 * 재할당 필요하면 한정하여 let 키워드 사용
 * 변경이 발생하지 않고 읽기 전용으로 사용하는 원시 값, 객체는 const키워드 사용
 * const는 재할당을 금지하여 더 안전하기ㄷ 때문에 이 방식을 권장한다.
    * 참고. 전역변수보다 지역변수를 사용하자.       (전역 변수는 생명주기가 길고 계속 존재하므로 리소스 낭비 가능성 존재 때문)   속도 개선을 위하기도 하다.
 */