const arr = [1, 2, 3, 4, 5];

const promiseFunction = (value) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(value);
    }, 1000);
  });
};
const mapFunc = async () => {
  const mapRes = await Promise.all(
    arr.map(async (value) => {
      const result = await promiseFunction(value);
      const result2 = await promiseFunction(result + 1);

      return result2;
    })
  );
  console.log({ mapRes });
};

mapFunc();
const forFunc = async () => {
  for (const value in arr) {
    const result = await promiseFunction(value);
    console.log({ result });
  }
};

// forFunc();
