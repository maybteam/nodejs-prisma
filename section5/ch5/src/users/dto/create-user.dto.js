export class CreateUserDTO {
  name;
  email;
  phoneNumber;
  age;

  constructor(user) {
    this.name = user.name;
    this.email = user.email;
    this.phoneNumber = user.phoneNumber;
    this.age = user.age;
  }
}
