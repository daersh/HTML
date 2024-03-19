// 01_arrow-function-feature.js


// 1. 화살표 함수는 자체적으로 this를 가지지 않는다. (화살표 함수를 호출한 객체의 의미가 아니다.)
// 객체의 메소드 안에서 동일한 객체의 프로퍼티를 대상으로 콜백 함수를 적용할 때 사용할 수 있다.
let theater={
    store: '강남점',
    titles: ['파묘','듄2','웡카','가여운 것들','포켓몬스터'],
    showMoviesList: function(){
        console.log(this.store);
        
        this.titles.forEach(
            title => {
            console.log(this.store + " " + title);                  // better code
            }
        );

        // this.titles.forEach( 
        //     function (title) {
        //         console.log(this.store + " " + title);          // bad 이경우에는 this.store가 undefined로 반환함
        //     }
        // );
    }
}
theater.showMoviesList();

// 2. 화살표 함수는 new와 함께 호출할 수 없다.
const arrowFunc = () => {};
const normalFunc = function(){};
// new arrowFunc();    //에러 발생
new normalFunc();    

// 3. 화살표 함수는 arguments를 지원하지 않는다.
let test = function(){
    // console.log(arguments);
    const arrowFunc = () => console.log(arguments);
    arrowFunc(10,20);    // 특징: 자신의 상위인 (1,2,3,4,5)가 arguments로 전달된다.
};
test(1, 2, 3,4,5);
/**
 * 화살표 함수는 다른 함수의 인수로 전달되어 콜백함수로 사용되는 경우가 많다.
 * 위와 같은 특징들은 콜백 함수 내부의 this가 외부 함수의 this와 다르기 때문에 발생하는 문제를 해결하기 위해
 * 의도적으로 설계된 것이라 할 수 있다. (arguments도 마찬가지이다.)
 * 따라서 화살표 함수를 사용할 때는 어느정도 개념을 정확히 인지하고 써야한다.
 */
