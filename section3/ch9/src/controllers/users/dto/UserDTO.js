class UserDTO {
  id;
  name;
  age;

  constructor(user) {
    this.id = user.id;
    this.name = user.name;
    this.age = user.age;
  }

  getUser() {
    return {
      id: this.id,
      name: this.name,
      age: this.age,
    };
  }
}

export default UserDTO;
