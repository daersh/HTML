// 04_object-distructuring-assignment-basic-syntax.js

// 객체 구조 분해 할당 기본 문법
let pants = {

    productName:'배기팬츠',
    color : '검정색',
    price: 30000,
    getInfo(){
        console.log(this.productName, this.color, this.price);
    }
}

// let prductName = pants.productName;
// let color = pants.color;
// let price = pants.price;
// console.log(prductName, color, price);
let { productName, color, price,getInfo } = pants;
// let {color, price, productName } = pants;        // 순서 달라도 ㄱㅊ. 변수명만 똑같게 하면 된다!!!!!!!!!
console.log(productName, color);
console.log(getInfo);
getInfo();

// 객체 구조분해 할당으로 꺼낸 변수 대신 다른 걸 쓰고 싶다면..

