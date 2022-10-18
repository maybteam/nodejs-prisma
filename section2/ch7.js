const arr1 = [2, 3, 4, 5, 6];
const obj1 = {
  name: "matt",
  age: 20,
  hobby: "coding",
  language: "javascript",
};

const arr2 = arr1.map((value, index) => {
  return value + 1;
});

console.log("---map result---\n", arr2);

console.log("\n---forEach array---");
arr1.forEach((value, index) => {
  console.log({ value, index });
});

console.log("\n---Object obj1---");
console.log(Object.entries(obj1));

console.log("\n---for in obj1---");
for (const key in obj1) {
  console.log({ key, value: obj1[key] });
}

console.log("\n---for of obj1 entries---");
for (const value of Object.entries(obj1)) {
  console.log(value);
}

console.log("\n---for of obj1 entries with key value---");
for (const [key, value] of Object.entries(obj1)) {
  console.log({ key, value });
}

// for (const key of obj1) {
//   console.log({ key, value: obj1[key] });
// }

console.log("\n---for of arr1---");
for (const value of arr1) {
  console.log(value);
}

console.log("\n---for in arr1---");
for (const index in arr1) {
  console.log({ index, value: arr1[index] });
}

const promiseFunction = () => {
  return new Promise((resolve) => {
    resolve("Promise result");
  });
};

console.log("\n---async map---");
const promiseMap = arr1.map(async () => {
  const result = await promiseFunction();
  console.log({ result });
  return result;
});

console.log({ promiseMap });

const asyncForOf = async () => {
  console.log("\n---async for of---");
  for (const value of arr1) {
    const result = await promiseFunction();
    console.log({ result });
  }
};

asyncForOf();
