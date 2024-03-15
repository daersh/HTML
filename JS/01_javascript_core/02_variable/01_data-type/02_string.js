/*
 * 문자열 타입
*/

var str = "hello";
console.log(typeof str);

//일반 문자열 내에서 줄바꿈은 불가능하다.
// var str1 = "hello, 
//     World!!";

//백틱(`) 를 붙이면 됨((') 가 아님)
var str2 = `안녕하세요
반갑습니다.`;
console.log('multiline: ',str2);

//문자열 이어붙이기
var lastName = "홍";
var firstName = "길동";
console.log('my name is '+firstName +lastName + '!');
// 표현식 삽입*(${})과 함께 사용하면 문자열 연산보다 가독성 좋고 간편하게 문자열을 조합할 수 있다. 무조건 백키(₩) 사용
console.log(`my name is ${firstName} ${lastName}!`);
console.log(`my name is ${firstName} ${lastName}!${1+2}`);


/**
 * 문자열 타입은 추가적으로 세 가지 특별한 값도 표현할 수 있다.
 * \n: 줄바꿈
 * \t: 탭 
 * \r: ��������
 * \f: ���
 */