//일반 함수
function sum(a, b) {
  return a + b;
}

//화살표 함수
const add = (a, b) => {
  return a + b;
};

console.log("sum(일반함수) : ", sum(1, 2));
console.log("add(화살표 함수) : ", add(3, 4));

function checkThis() {
  console.log(this);
}

const checkThisWithArrow = () => {
  console.log(this);
};

const obj1 = {
  a: 1,
  getThis() {
    console.log("getThis(일반함수) : ", this);
  },
  getThis2: () => {
    console.log("getThis2(화살표 함수) : ", this);
  },
};

obj1.getThis();
obj1.getThis2();
