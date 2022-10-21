import fs from "fs";

class User {
  users = [];

  constructor() {
    const userJson = fs.readFileSync("./users.json", "utf-8");
    this.users = JSON.parse(userJson).users;
  }

  getUsers() {
    return this.users;
  }

  createUser(user) {
    const { name, age, gender } = user;
    const id = new Date().getTime();
    this.users.push({
      id,
      name,
      age,
      gender,
    });
    this.saveUsers();
  }

  updateUser(user) {
    this.users.forEach((row, index) => {
      if (row.id === user.id) {
        this.users[index] = user;
      }
    });
    this.saveUsers();
  }

  deleteUser(id) {
    this.users = this.users.filter((user) => user.id !== id);
    this.saveUsers();
  }

  saveUsers() {
    fs.writeFileSync("./users.json", JSON.stringify({ users: this.users }));
  }
}

export default User;
