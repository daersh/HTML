// 01_global-and-local.js
//전역, 지역 스코프


var x = 'global-x';
var y = 'global-y';

function outer(){
    // outer의 
    var z = "outer-local-z";

    console.log(x);
    console.log(y);
    console.log(z);

    function inner(){
        var z = "inner-local-z";
        console.log(x);
        console.log(y);
        console.log(z);
    }
    
    inner();
}

outer();

// 스코프 체인

/**
 * 전역 스코프 -> 아우터 지역 스코프 -> 이너 지역 스코프 순으로 우선순위가 결정 된다.
 * 모든 스코프는 하나의 계층적 구조로 연결되며 자바스크립트 엔진은 스코프 체인을 통해 변수를 
 * 참조하는 코드의 스코프에서 시작하여 상위 스코프 방향으로 이동하며 선언된 변수를 검색한다.
 * 하위 스코프에서 유효한 변수를 상위 스코프에서는 참조할 수 없다.
 */