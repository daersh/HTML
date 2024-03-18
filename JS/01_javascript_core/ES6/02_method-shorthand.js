// 02_method-shorthand.js  메서드 단축


var dog={
    name: '뽀삐',
    eat: function(food) {
        console.log(`${this.name}은 ${food}를 야무지게 먹는다.`);     
        return '존맛';
    }
}
dog.eat('버네너');


// 에크마스크립트? 6 이후부터는 메서드를 정의할 때 콜론(:)과 function 키워드를 생략할 수 있다. 현재까지 14버전까지 나왔지만 6만 알아도 된다. 자바도 이를 영감받아 람다식을 만들었다.
var dog2 ={
    name: '뽀삐',
    eat(food) {                                                     // eat: fucntion(food) -> eat(food)
        console.log(`${this.name}은 ${food}를 야무지게 먹는다.`);    
        return '존맛';
    }
}
dog.eat('버네너');
dog2.eat('키위');