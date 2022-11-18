class UserInputDTO {
  firstName;
  lastName;
  age;
  constructor({ firstName, lastName, age }) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  getUser() {
    return {
      id: new Date().getTime(),
      firstName: this.firstName,
      lastName: this.lastName,
      age: this.age,
    };
  }
}

export default UserInputDTO;
