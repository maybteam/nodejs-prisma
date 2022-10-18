const obj2 = {
  a: 1,
  b: 2,
  c: 3,
};

const { a1, b1, c1 } = {
  a1: 1,
  b1: 2,
  c1: 3,
};

console.log(a1, b1, c1);

const { a, ...obj3 } = obj2;
console.log(obj3);

const arr1 = [1, 2, 3];

const [arrA, arrB, arrC] = [1, 2, 3];

console.log(arrA, arrB, arrC);

const [arrA1, ...arr2] = arr1;

console.log(arr2);

//이름과 나이만 출력하고 싶어요
function foo(obj1) {
  const { address, ...obj2 } = obj1;
  console.log(obj1.name, obj1.age);
  console.log(obj2);
}

const obj1 = {
  name: "boo",
  age: 2,
  address: "서울",
};

foo(obj1);
