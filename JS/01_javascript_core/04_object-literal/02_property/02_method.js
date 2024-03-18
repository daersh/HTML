//02_method.js
//자바 스크립트으 ㅣ함수는 객체이다. 함수는 값으로 취급할 ㅅ수 있고 프로퍼티 값으로 사용할 수 도 있다.

var dog={
    name: '뽀삐',
    eat: function(food) {
        
        //console.log(`${name}은 ${food}를 맛있게 먹는다.`);     //this. 이 없으면 전역 변수를 뜻한다.
        console.log(`${this.name}은 ${food}를 맛있게 먹는다.`);     //메서드에서 this는 메소드를 호출한 객체이다.
        return '잘먹었네';
    }
}

console.log(dog.name);
console.log('console.log(dog.eat()):   ' + dog.eat());
console.log('console.log(dog.eat(\'사료\')):   ' + dog.eat('사료'));
