/**
 * @typedef TDate
 * @property {Date} startDate
 * @property {Date} endDate
 */

/**
 * @function getDay 두 날짜의 차이 구하는 함수
 * @param {TDate} dates
 * @returns {number} 두 날짜의 차이
 */
const getDay = (dates) => {
  const { startDate, endDate } = dates;
  const diff =
    (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24);

  return diff;
};

console.log(
  getDay({ startDate: new Date(2021, 1, 1), endDate: new Date(2021, 1, 4) })
);

/**
 * @typedef TPerson
 * @property {string} name
 * @property {number} age
 * @property {("MALE" | "FEMALE")} gender
 */

/**
 * @class Person
 * @property {string} name
 * @property {number} age
 * @property {("MALE" | "FEMALE")} gender
 */
class Person {
  name;
  age;
  gender;

  /**
   * @constructor
   * @param {TPerson} person
   */
  constructor(person) {
    this.name = person.name;
    this.age = person.age;
    this.gender = person.gender;
  }

  /**
   * @function getName
   * @returns {string}
   */
  getName() {
    return this.name;
  }

  /**
   * @function getAge
   * @returns {number}
   */
  getAge() {
    return this.age;
  }

  /**
   * @function getGender
   * @returns {("MALE" | "FEMALE")}
   */
  getGender() {
    return this.gender;
  }

  /**
   * @function updatePerson 정보 수정
   * @param {TPerson} person
   */
  updatePerson(person) {
    this.name = person.name;
    this.age = person.age;
    this.gender = person.gender;
  }
}

const matt = new Person({ name: "matt", age: 21, gender: "MALE" });
console.log("NAME", matt.getName());
console.log("AGE", matt.getAge());
console.log("GENDER", matt.getGender());

matt.updatePerson({ name: "matt", age: 24, gender: "MALE" });

console.log("---updated---");
console.log("NAME", matt.getName());
console.log("AGE", matt.getAge());
console.log("GENDER", matt.getGender());
