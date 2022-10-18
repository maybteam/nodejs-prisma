class Person {
  name;
  age;

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getName() {
    console.log(this.name);
  }

  getAge() {
    console.log(this.age);
  }

  sayHello() {
    console.log(
      `hello. 저의 이름은 ${this.name}입니다. 제 나이는 ${this.age}살입니다.`
    );
  }

  walk() {
    console.log("1걸음 걸었습니다.");
  }
}

class Warrior extends Person {
  weapon;

  constructor(name, age, weapon) {
    super(name, age);
    this.weapon = weapon;
  }

  eat() {
    console.log("밥을 2공기 먹어요.");
  }

  fight() {
    if (this.name === "matt") {
    } else this.name === "jane";
    console.log(`${this.weapon}을 가지고 싸웁니다.`);
  }
}

const matt = new Warrior("matt", 20, "단검");

matt.sayHello();
matt.eat();
matt.walk();

matt.fight();
