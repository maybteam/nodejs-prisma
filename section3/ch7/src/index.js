import express from "express";
import cors from "cors";
import helmet from "helmet";

import controllers from "./controllers";
import { errRouter } from "./controllers/global";

const app = express();

// 미들웨어를 먼저 작성합니다.
app.use(express.json({ limit: "700mb" }));
app.use(
  cors({
    origin: "*",
  })
);
app.use(helmet());

controllers.forEach((controller) => {
  app.use(controller.path, controller.router);
});

app.use(errRouter);
app.use((err, req, res, next) => {
  res.status(500).json({ message: "에러가 발생했어요!" });
});

app.listen(8000);
