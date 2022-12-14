export class UserDTO {
  id;
  firstName;
  lastName;
  age;

  constructor(user) {
    this.id = user.id;
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.age = user.age;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
