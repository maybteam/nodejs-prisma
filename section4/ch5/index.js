import express from "express";
import cors from "cors";
import helmet from "helmet";

import { users } from "./users.js";

const app = express();

// 미들웨어를 먼저 작성합니다.
app.use(express.json({ limit: "700mb" }));
app.use(
  cors({
    origin: "*",
  })
);
app.use(helmet());

app.get("/users", (req, res) => {
  res.status(200).json({ users });
});

app.post("/users", (req, res) => {
  const { name, age } = req.body;
  const id = new Date().getTime();

  users.push({ id, name, age });

  res.status(201).json({ id });
});

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

app.delete("/users", (req, res) => {
  const { id } = req.params;
  users = users.filter((user) => user.id !== Number(id));

  res.status(204).json({});
});

app.listen(8000);
