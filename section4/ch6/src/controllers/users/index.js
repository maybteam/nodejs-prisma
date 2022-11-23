import { Router } from "express";

// 라우터와 app 등록할 경로 지정을 위한 class
class UserController {
  router;
  path = "/users";
  #users = [
    {
      id: 1,
      name: "John",
      age: 24,
    },
    {
      id: 2,
      name: "Sally",
      age: 31,
    },
  ];

  constructor() {
    this.router = Router();
    this.#init();
  }

  //#은 private을 의미
  //다른 코드에서 접근 불가
  #init() {
    this.router.get("/", this.#getUsers.bind(this));
    this.router.post("/", this.#createUser.bind(this));
    this.router.patch("/:id", this.#updateUser.bind(this));
    this.router.delete("/:id", this.#deleteUser.bind(this));
  }

  #getUsers(req, res) {
    const id = 20;

    const user = this.#users.find((user) => user.id === Number(id));

    console.log(user.age);

    res.status(200).json({ users: this.#users });
  }

  #createUser(req, res) {
    const { name, age } = req.body;
    const id = new Date().getTime();

    this.#users.push({ id, name, age });

    res.status(201).json({ id });
  }

  #updateUser(req, res) {
    const { id } = req.params;
    const { name, age } = req.body;

    this.#users.forEach((user, index) => {
      if (user.id === Number(id)) {
        this.#users[index] = { ...user, name, age };
      }
    });

    res.status(204).json({});
  }

  #deleteUser(req, res) {
    const { id } = req.params;

    this.#users = this.#users.filter((user) => user.id !== Number(id));

    res.status(204).json({});
  }
}

const userController = new UserController();
export default userController;
