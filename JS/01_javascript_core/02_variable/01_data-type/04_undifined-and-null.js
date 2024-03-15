/*04. undefined-and-null */

// 1. undefined type 
/*
    var 키워드로 선언한 변수는 암묵적으로 undefined 로 초기화 되어 있다.
    변수를 선언한 이후 값을 할당하지 않는 변수는 undefined 를 지닌다.
    개발자가 의도적으로 변수에 할당하는 것은 본래 취지와 어긋나고 혼란을 줄 수 있으므로 지양한다.
*/

var undefinedVar= undefined;                    // 지양할 것
console.log(undefinedVar);
console.log(typeof undefinedVar);

// 2. null type
// 변수에 값이 없다는 것을 의도적으로 명시할 때 사용한다.
var nullVar = '아무문자들어가유~~~~~~~~~~~~~~~~';
nullVar = null;                                 // 이전 참조를 제거하여 더이상 'something'을 참조하지 않는다.
console.log(nullVar);
console.log(typeof nullVar);

