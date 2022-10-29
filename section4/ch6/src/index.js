import express from "express";
import cors from "cors";
import helmet from "helmet";

import controllers from "./controllers";

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

app.listen(8000);
