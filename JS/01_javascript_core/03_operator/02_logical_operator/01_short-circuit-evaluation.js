// 01_short-circuit-evaluation.js 논리 연산자



// 표현식을 평가하는 도중 평가 결과가 확정된 경우 나머지 평가 과정을 생략하는 것

// 1. or의 경우
console.log('apple'||'banana');     // apple
console.log('apple'||'banana'||'orange'); // apple
console.log(''||'banana');     // banana

// 2. and의 경우
console.log('apple'&&'banana');     // banana
console.log('apple'&&'banana'&&'orange'); // orange

// 3. not의 경우
console.log('apple'!=='banana');     // true
console.log('apple'!=='banana'&&'orange'); // orange
console.log('apple'!=='banana'||'orange'); // true
console.log('apple'!=='banana'||'orange'||'apple'); // true
console.log('apple'!=='banana'||'orange'||'apple'||'banana'); // true
console.log('apple'!=='banana'||'orange'||'apple'||'banana'||'orange'); // true
console.log('apple'!=='banana'||'orange'||'apple'||'banana'||'orange'||'apple'); // false
console.log('apple'!=='banana'||'orange'||'apple'||'banana'||'orange'||'apple'||'banana'); // false
console.log('apple'!=='banana'||'orange'||'apple'||'banana'||'orange'||'apple'||'banana'||'orange'); // false

var num1=2;
if(num1 %2==0){
    console.log('짝수');
}else{
    console.log('홀수');
}

// 단축 평가를 활용하여 같은 결과를 얻을 수 있다.
num1 %2 == 0 && console.log('짝수');    // 나눈 값이 0이 맞으면서 콘솔로그에 정보가 있으면 뒤에 검사까지 가므로 출력
num1 %2 == 0 || console.log('홀수');    // 나눈값이 0이 맞으므로 다음꺼 검사 안하여 패쓰
