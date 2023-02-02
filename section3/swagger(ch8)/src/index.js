import express from "express";
import cors from "cors";
import helmet from "helmet";
import { errRouter } from "../src/controllers/global";
import swaggerUi from "swagger-ui-express";
import { options, swaggerDocs } from "./swagger";
import Controllers from "./controllers";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(helmet());
Controllers.forEach((controller) => {
  app.use(controller.path, controller.router);
});
app.use(errRouter);
app.get("/swagger.json", (req, res) => {
  res.status(200).json(swaggerDocs);
});
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(undefined, options));

app.listen(8000, () => {
  console.log("서버가 시작되었습니다. PORT : 8000");
});
