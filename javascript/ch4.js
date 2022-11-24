const obj1 = {
  a: 1,
  b: 2,
  sum() {
    console.log(this);
    const arrowThis = () => {
      console.log(`arrow this`, this);
    };
    arrowThis();
  },
};

function getThis() {
  console.log(this);
}

getThis();

obj1.sum();

const bindObj = getThis.bind(obj1);
bindObj();