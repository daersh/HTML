// 01_array-method.js

const foodList = ['물회','삼계탕','수박','물회'];


//indexOf()
console.log(`foodList.indexOf('물회'): ${foodList.indexOf('물회')}`);       //0
console.log(`foodList.indexOf('삼겹살'): ${foodList.indexOf('삼겹살')}`);    //-1 없으면

//includes()
console.log(`foodList.includes('물회'): ${foodList.includes('물회')}`);
console.log(`foodList.includes('삼겹살'): ${foodList.includes('삼겹살')}`);


const chineseFood =['짜장면','짬뽕','탕수욱'];
//push()
chineseFood.push('볶음밥');
chineseFood.push('양장피');
console.log(chineseFood);

//pop()
chineseFood.pop();
console.log(chineseFood);
console.log(chineseFood.pop()); //// pop 된 값 반환

const chickenList = ['양념치킨','후라이드','파닭'];

// unshift()
chickenList.unshift('양념치킨');
chickenList.unshift('마늘치킨');
console.log(chickenList);

//shift()
chickenList.shift();
console.log(chickenList);
console.log(chickenList.shift()); //// shift 된 값 반환


//concat()
const idol1 = ['서태지와 아이들','소녀시대'];
const idol2 = ['HOT','잭스키스'];
const idol3 = ['핑클','블랙핑크'];

console.log(`idol1 기준으로 idol2 배열 concat: ${idol1.concat(idol2)}`);
console.log(`idol1 기준으로 idol2 배열 concat: ${[...idol1, ...idol2]}`); // ES6에서 방식으로 요즘은 이거 자주 사용

console.log(`idol3 기준으로 idol1, idol2를 concat: ${idol3.concat(idol1, idol2)}`);

//slice()  배열의 요소 선택 복사
//splice()  배열의 index 위치의 요소 제거 및 추가
const front = ['Html','CSS','JavaScript','Vue'];        //css javascript
console.log(front.slice(1,3));                          //원본 그대로 출력

// splice(인덱스, 제거할 길이, 추가할값1, 추가할값2, ....) ;
console.log(front.splice(1,3,'HTML','CSS','JavaScript','Vue'));
console.log(front);

// join: 배열을 우리가 원하는 구분자와 함께 결합하여 문자열로 반환
const snackList= ['candy','cake','bread','cookie'];
console.log(snackList.join(','));
console.log(snackList.join(' '));


