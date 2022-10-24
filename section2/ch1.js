/**호이스팅 발생 */
console.log(a);
// console.log(b);
var a = 1;
let b = 2;

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

function foo() {
  var fooVar = "fooVar";
  if (true) {
    var fooVar2 = "fooVar2";
  }

  console.log("fooVar", fooVar);
  console.log("fooVar2", fooVar2);
}

console.log("out fooVar", fooVar);

function boo() {
  let booLet = "booLet";
  if (true) {
    let booLet2 = "booLet2";
    console.log("booLet", booLet2);
  }
  console.log("booLet", booLet);
  console.log("booLet2", booLet2); //오류
}
