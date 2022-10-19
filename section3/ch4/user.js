import fs from "fs";
/**
 * @typedef TUser
 * @property {number} id
 * @property {string} name
 * @property {number} age
 * @property {("MALE" | "FEMALE")} gender
 */

/**
 * @typedef TCreateUser
 * @property {string} name
 * @property {number} age
 * @property {("MALE" | "FEMALE")} gender
 */

/**
 * @class User
 * @property {User[]} users
 */
class User {
  users = [];

  constructor() {
    const userJson = fs.readFileSync("./users.json", "utf-8");
    this.users = JSON.parse(userJson).users;
  }

  /**
   * @function getUsers 유저 정보 가져오기
   * @returns {TUser[]}
   */

  getUsers() {
    return this.users;
  }

  /**
   * @function updatePerson 정보 수정
   * @param {TCreateUser} user
   */
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

  /**
   * @function updateUser
   * @param {TUser} user
   */
  updateUser(user) {
    this.users.forEach((row, index) => {
      if (row.id === user.id) {
        this.users[index] = user;
      }
    });
    this.saveUsers();
  }

  /**
   * @function deleteUser
   * @param {number} id
   */
  deleteUser(id) {
    this.users = this.users.filter((user) => user.id !== id);
    this.saveUsers();
  }

  /**
   * @function saveUsers 파일에 유저 정보 저장
   */
  saveUsers() {
    fs.writeFileSync("./users.json", JSON.stringify({ users: this.users }));
  }
}

export default User;
