// 03_function-parameter.js

// 함수의 매개변수에서 구조 분해 할당

let exampleProduct = {
    items: ["coffee", "donut"  ],
    producer: '신사임댱'
}

function displayProduct({producer = '아무개', items = [],width = 10, height = 20}){
    console.log(`producer: ${producer}`);
    console.log(`items: ${items}`);
    console.log(`width: ${width}`);
    console.log(`height: ${height}`);
    console.log('--------------------');

}
displayProduct(exampleProduct);

// 함수 호출 시 객체를 던지면 내부적으로 매개변수에 적힌 구조분해할당이 일어난다.
let {producer = '아라비아', items = [],width = 100, height =200} = exampleProduct;
