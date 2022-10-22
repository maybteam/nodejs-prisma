import express from "express";
import cors from "cors";
import helmet from "helmet";
import dayjs from "dayjs";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { nanoid } from "nanoid";

const today = dayjs().format("YYYY-MM-DD");
console.log({ today });

const passwordHash = bcrypt.hashSync("1234", 10);
console.log({ passwordHash });

const token = jwt.sign("1234", "secret");
console.log({ token });

const id = nanoid();
console.log({ id });

const app = express();

app.use(cors());
app.use(helmet());

app.get("/", (req, res) => {
  res.status(200).send("Express");
});

app.listen(8000);
