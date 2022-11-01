// console.log로 실행할 때의 순서는 크게 신경쓰지 않으셔도 됩니다.
// 주석을 통해 하나씩 실행해보세요

const callbakHell = () => {
  setTimeout(() => {
    console.log("하나");
    setTimeout(() => {
      console.log("둘");
      setTimeout(() => {
        console.log("셋");
        setTimeout(() => {
          console.log("넷");
        }, 0);
      }, 0);
    }, 0);
  }, 0);
};

callbakHell();

// 바로 실행되는 프로미스
const promiseExample = new Promise((resolve, reject) => {
  console.log("프로미스 실행!!");

  resolve("성공!!");
});

promiseExample.then((result) => {
  console.log("Promise Example Result : ", result);
});

//함수를 호출할 때 실행되는 프로미스
const promiseFunction = (text) => {
  return new Promise((resolve, reject) => {
    if (!text) reject("인자를 넣어주세요!");

    console.log(text);
    resolve(text);
  });
};

promiseFunction("인자").then((res) => {
  console.log("Promise Function Result : ", res);
});

promiseFunction("첫번째")
  .then(() => {
    return promiseFunction("두번째");
  })
  .then(() => {
    return promiseFunction("세번째");
  })
  .then(() => {
    return promiseFunction("네번째");
  })
  .catch((err) => {
    console.log(err);
  });

const startAsync = async () => {
  console.log("Async Function Start");
  const promiseFunctionResult = await promiseFunction("await promise");

  console.log("await Result : ", promiseFunctionResult);
  return "Async Function End";
};

startAsync().then((res) => {
  console.log("startAsync Result", res);
});
