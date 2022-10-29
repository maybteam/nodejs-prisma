import { Router } from "express";
import { users } from "./users.js";
class UserController {
  router = Router();
  path = "/users";

  constructor() {
    this.#init();
  }

  #init() {
    this.router.get("/", this.#getUsers);
    this.router.post("/", this.#createUser);
    this.router.patch("/:id", this.#updateUser);
    this.router.delete("/:id", this.#deleteUser);
  }

  #getUsers(req, res) {
    res.status(200).json({ users });
  }

  #createUser(req, res) {
    const { name, age } = req.body;
    const id = new Date().getTime();

    users.push({ id, name, age });

    res.status(201).json({ id });
  }

  #updateUser(req, res) {
    const { id } = req.params;
    const { name, age } = req.body;

    users.forEach((user, index) => {
      if (user.id === Number(id)) {
        users[index] = { ...user, name, age };
      }
    });

    res.status(204).json({});
  }

  #deleteUser(req, res) {
    const { id } = req.params;
    users = users.filter((user) => user.id !== Number(id));

    res.status(204).json({});
  }
}

export const userController = new UserController();
