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
  }

  #getUsers(req, res) {
    res.status(200).json({ users });
  }
}

export const userController = new UserController();
