exports.out = 1;
/**호이스팅 발생 */
console.log(a);

var varName = "Javascript";

console.log(varName);

var varName = "js";

console.log(varName);

let letName = "Javascript";

console.log(letName);

// let letName = "js"; 재선언 불가능

letName = "js"; // 재할당 가능

const constName = "Javascript";

console.log(constName);

// const constName = "js"; 재선언 불가능

// constName = "js"; 재할당 불가능

var a = 1;
module.exports.a = a;
