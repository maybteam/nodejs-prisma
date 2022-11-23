import cors from "cors";
import helmet from "helmet";

import express from "express";

let users = [
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

const app = express();

// 미들웨어를 먼저 작성합니다.
app.use(express.urlencoded({ extended: true, limit: "700mb" }));
app.use(
  cors({
    origin: "*",
  })
);
app.use(helmet());

/**
 * 미들웨어
 * app.use((req, res, next) => {})
 * ex) const helmetMiddleware = helmet();
 * app.use(helmetMiddleware);
 */

//GET /users
app.get("/users", (req, res) => {
  res.status(200).json({ users });
});

//POST /users
app.post("/users", (req, res) => {
  const { name, age } = req.body;
  const id = new Date().getTime();

  users.push({ id, name, age });

  res.status(201).json({ id });
});

//PATCH /users/:id
// ex) /users/1 => req.params.id = 1
app.patch("/users/:id", (req, res) => {
  const { id } = req.params;
  const { name, age } = req.body;

  users.forEach((user, index) => {
    if (user.id === Number(id)) {
      users[index] = { ...user, name, age };
    }
  });

  res.status(204).json({});
});

//DELETE /users/:id
app.delete("/users", (req, res) => {
  const { id } = req.params;
  users = users.filter((user) => user.id !== Number(id));

  res.status(204).json({});
});

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
