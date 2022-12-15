export class UsersDTO {
  id;
  name;
  phoneNumber;
  email;
  description;

  constructor(user) {
    this.id = user.id;
    this.name = user.name;
    this.phoneNumber = user.phoneNumber;
    this.email = user.email;
    this.description = user.description;
  }
}
