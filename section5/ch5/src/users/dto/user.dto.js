export class UserDTO {
  id;
  name;
  email;
  phoneNumber;
  age;

  constructor(user) {
    this.id = user.id;
    this.name = user.name;
    this.email = user.email;
    this.phoneNumber = user.phoneNumber;
    this.age = user.age;
  }
}
