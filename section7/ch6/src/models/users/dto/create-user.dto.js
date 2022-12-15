export class CreateUserDTO {
  age;
  name;
  phoneNumber;
  email;
  password;

  constructor(user) {
    this.age = user.age;
    this.name = user.name;
    this.phoneNumber = user.phoneNumber;
    this.email = user.email;
    this.password = user.password;
  }
}
