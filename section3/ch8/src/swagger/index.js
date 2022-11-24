import * as Swaggers from "../controllers/swagger";
import DefaultSwagger from "./default";

const { paths } = Object.values(Swaggers).reduce((acc, apis) => {
  const API = Object.values(apis).map((api) => {
    return { ...api };
  });

  API.forEach((api) => {
    acc.paths = {
      ...acc.paths,
      ...api,
    };
  });
  return acc;
}, {});

export const swaggerDocs = {
  ...DefaultSwagger({
    title: "예시",
    description: "예시 설명",
    servers: ["http://locahost:8000"],
  }),
  paths,
};
export const options = {
  swaggerOptions: {
    url: "/swagger.json",
  },
};
