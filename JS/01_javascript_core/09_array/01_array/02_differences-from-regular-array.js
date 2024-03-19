// 02_differences-from-regular-array.js

const arr= [
    '홍길동',
    20,
    true,
    null,
    undefined,
    NaN,
    Infinity,
    [],
    {},
    function(){}
];
console.log(arr);

/**
 * writable - true면 값 수정 가능. 아니면 읽기만 가능
 * enumerable - true면 반복문을 사용해 나열 가능. 아니면 반복문 활용 시 포함 안됨
 * configurable - true면 프로퍼티 삭제 가능. 아니면 불가능
 */
console.log(Object.getOwnPropertyDescriptor([1,2,3]));
