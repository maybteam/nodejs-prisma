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

console.log("\n---reduce example---");

const redueResult = arr1.reduce((acc, next) => {
  return (acc += next);
}, 0);
console.log(redueResult);

const promiseFunction = (value) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Promise Result : ${value}`);
    }, 1000 - value * 150);
  });
};

console.log("\n---async map---");
const promiseMapResult = arr1.map(async (value) => {
  const result = await promiseFunction(value);
  console.log("async map", result);
  return result;
});
console.log(promiseMapResult);

console.log("\n---async for of---");
// 순서 O, 병렬 X
const asyncForOf = async () => {
  for (const value of arr1) {
    const result = await promiseFunction(value);
    console.log({ result });
  }
};

asyncForOf();

console.log("\n---Promise with reduce---");
//순서 O, 병렬 O
const promiseReduce = async () => {
  const results = [];
  await arr1.reduce(async (promise, value) => {
    console.log(promise, { value });
    await promise;
    const result = await promiseFunction(value);

    results.push(result);
  }, Promise.resolve());
  console.log("promise reduce", { results });
};
promiseReduce();

//순서 X, 병렬 O
const promiseMap = async () => {
  const results = await Promise.all(
    arr1.map(async (value) => {
      const result = await promiseFunction(value);

      return result;
    })
  );

  console.log("promise map", results);
};

promiseMap();
