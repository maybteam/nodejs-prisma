import { Router } from "express";

import { UserDTO, UserInputDTO } from "./dto";

// 라우터와 app 등록할 경로 지정을 위한 class
class UserController {
  router;
  path = "/users";
  users = [
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      age: 24,
    },
    {
      id: 2,
      firstName: "Bruce",
      lastName: "William",
      age: 31,
    },
    {
      id: 3,
      firstName: "Tony",
      lastName: "Stark",
      age: 24,
    },
  ];

  constructor() {
    this.router = Router();
    this.init();
  }

  init() {
    this.router.get("/", this.getUsers.bind(this));
    this.router.post("/", this.createUser.bind(this));
    this.router.patch("/:id", this.updateUser.bind(this));
    this.router.delete("/:id", this.deleteUser.bind(this));
  }

  getUsers(req, res) {
    const users = this.users.map((user) => new UserDTO(user).getUser());
    res.status(200).json({ users });
  }

  createUser(req, res) {
    const { firstName, lastName, age } = req.body;
    const user = new UserInputDTO({ firstName, lastName, age }).getUser();

    this.users.push(user);

    res.status(201).json({ id: user.id });
  }

  updateUser(req, res) {
    const { id } = req.params;
    const { firstName, lastName, age } = req.body;

    this.users.forEach((user, index) => {
      if (user.id === Number(id)) {
        this.users[index] = { firstName, lastName, age, ...user };
      }
    });

    res.status(204).json({});
  }

  deleteUser(req, res) {
    const { id } = req.params;

    this.users = this.users.filter((user) => user.id !== Number(id));

    res.status(204).json({});
  }
}

const userController = new UserController();
export default userController;
