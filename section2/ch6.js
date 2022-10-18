// console.log("실행 전");
// setTimeout(() => {
//   console.log("실행!!");
// }, 1000);
// console.log("실항 후");

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

const promiseFunction = (text) => {
  return new Promise((resolve, reject) => {
    if (!text) reject("인자를 넣어주세요!");

    console.log(text);
    resolve(text);
  });
};

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
