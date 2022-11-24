import * as Swaggers from "../controllers/swagger";
import DefaultSwagger from "./default";

const { paths } = Object.values(Swaggers).reduce(
  (acc, apis) => {
    const APIs = Object.values(apis).map((api) => {
      return { ...api };
    });

    APIs.forEach((api) => {
      const key = Object.keys(api)[0];
      if (!acc.paths[key]) {
        acc.paths = {
          ...acc.paths,
          ...api,
        };
      } else {
        acc.paths[key] = {
          ...acc.paths[key],
          ...api[key],
        };
      }
    });

    return acc;
  },
  { paths: {} }
);

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
