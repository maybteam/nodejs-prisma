import cors from "cors";
import express from "express";
import helmet from "helmet";
import { Controllers } from "./models";
import { swaggerDocs, options } from "./swagger";
import swaggerUi from "swagger-ui-express";
import database from "./database";
import { jwtAuth } from "./middleware";

(async () => {
  const app = express();
  await database.$connect();

  // 미들웨어
  app.use(cors()); // next();
  app.use(helmet()); // next();
  app.use(express.json()); //next();
  app.use(express.urlencoded({ extended: true, limit: "700mb" })); //next();
  app.use(jwtAuth);

  Controllers.forEach((controller) => {
    app.use(controller.path, controller.router);
  });

  app.get("/swagger.json", (req, res) => {
    res.status(200).json(swaggerDocs);
  });
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(undefined, options));

  // req : 요청 -> Request
  // res : 응답 -> Response
  app.get("/", (req, res) => {
    res.send("Nodejs 강의 재밌어요!");
  });

  app.use((err, req, res, next) => {
    res
      .status(err.status || 500)
      .json({ message: err.message || "서버에서 에러가 발생하였습니다." });
  });

  app.listen(8000, () => {
    console.log("서버가 시작되었습니다.");
  });
})();
