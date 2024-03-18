// 객체는 프로퍼티의 집합이며, 프로퍼티는 키와 값으로 구성된다.

var obj = {
    normal: 'normal value',
    '@ s p a c e @': 'space value', // 띄어쓰기나 특수기호('_' '$' 제외)사용하면 홀따옴표로 프로퍼티 지정해야한다.
                                    // 가능하나 지양할 것. 
                                    // 숫자인 프로퍼티 키는 문자열로 변환됨
    '':'',                              // 예약어 키는 오률를 발생시키지는 않지만 권장 안함,
    '0':1,                          // 이미 존재하는 키를 중복 선언하면 나중 선언한 프로퍼티가 기존 프로퍼티 덮어씀
    'var':'var',                                
    'normal': 'new value'
                                    
};

// 동적 프로퍼티 추가 구문(기존 없는 프로퍼티에 접근하면 프로퍼티가 생성된다.) 아래 방식 다 같음
//1.
// obj['test'] = 'test value';
//2.
// var key = 'test';
// obj[key] = 'test value';
//3.
obj.test='test value';


console.log(obj);