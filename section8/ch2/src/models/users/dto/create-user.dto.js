export class CreateUserDTO {
  name;
  phoneNumber;
  email;
  password;
  description;

  constructor(user) {
    this.name = user.name;
    this.phoneNumber = user.phoneNumber;
    this.email = user.email;
    this.password = user.password;
    this.description = user.description;
  }
}
