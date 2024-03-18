//03_property-access.js
//property 접근

var dog={
    name: '뽀삐',
    eat: function(food) {
        
        //console.log(`${name}은 ${food}를 맛있게 먹는다.`);     //this. 이 없으면 전역 변수를 뜻한다.
        console.log(`${this.name}은 ${food}를 맛있게 먹는다.`);     //메서드에서 this는 메소드를 호출한 객체이다.
        return '잘먹었네';
    }
}

// 1. 맞침표'.' 표기법(dot notation)
console.log(dog.name);
dog.eat('사료');

// 2. 대괄호'[]' 표기법(square bracket notation) 
console.log(dog['name']);
dog['eat']('고구마') ;

// 2-1 대괄호 표기법만 가능한 경우
var obj = {
    'dash-key': 'dash-value',           //이러한 경우 대괄호를 사용해야 한다.
    0: 1
}
// console.log(obj.dash-key);   err
// console.log(obj.'dash-key'); err
// console.log(obj.0);          err
console.log(obj['dash-key']);           // 프로퍼티 키가 식별자 네이밍 규칙을 준수하지 않은 이름일 경우 반드시 대괄호 표기법을 사용한다.
console.log(obj[0]);                    // 프로퍼티 키가 숫자일 경우 [] or [''] 표기법을 사용한다.
console.log(obj['0']);
