export class CreateUserDTO {
  firstName;
  lastName;
  age;

  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  getNewUser() {
    return {
      id: new Date().getTime(),
      firstName: this.firstName,
      lastName: this.lastName,
      age: this.age,
    };
  }
}
