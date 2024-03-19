// 01_RegExp.js


let regexp = /j/i;  // 패턴: j, 플래그 옵션: i => 대소문자 구별 없이

let target = 'JavaScript';

regexp = new RegExp('j','i');
regexp = new RegExp(/j/,'i');
regexp = new RegExp(/j/i);

console.log(regexp.test(target));


