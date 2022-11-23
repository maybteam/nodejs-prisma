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
    this.router.get("/:id", this.#getUser.bind(this));
    this.router.post("/", this.#createUser.bind(this));
    this.router.patch("/:id", this.#updateUser.bind(this));
    this.router.delete("/:id", this.#deleteUser.bind(this));
  }

  #getUsers(req, res, next) {
    res.status(200).json({ users: this.#users });
  }

  #getUser(req, res, next) {
    try {
      const { id } = req.params;

      const user = this.#users.find((user) => user.id === Number(id));

      if (!user) {
        throw { status: 404, message: "유저를 찾을 수 없습니다." };
      }

      res.status(200).json({ user });
    } catch (err) {
      next(err);
    }
  }

  #createUser(req, res, next) {
    try {
      const { name, age } = req.body;
      const id = new Date().getTime();

      this.#users.push({ id, name, age });

      res.status(201).json({ id });
    } catch (err) {
      next(err);
    }
  }

  #updateUser(req, res, next) {
    try {
      const { id } = req.params;
      const { name, age } = req.body;

      const idx = this.#users.findIndex((user) => user.id === Number(id));

      if (!idx) {
        throw { status: 404, message: "유저를 찾을 수 없습니다." };
      }

      this.#users[idx] = { ...this.#users[idx], name, age };

      res.status(204).json({});
    } catch (err) {
      next(err);
    }
  }

  #deleteUser(req, res, next) {
    try {
      const { id } = req.params;

      const idx = this.#users.findIndex((user) => user.id === Number(id));

      if (!idx) {
        throw { status: 404, message: "유저를 찾을 수 없습니다." };
      }

      this.#users = this.#users.filter((user) => user.id !== Number(id));

      res.status(204).json({});
    } catch (err) {
      next(err);
    }
  }
}

const userController = new UserController();
export default userController;
