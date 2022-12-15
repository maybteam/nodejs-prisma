const defaultSwagger = {
  openapi: "3.0.0",
  info: {
    version: "1.0.0",
    title: "스웨거 연습",
    description: "스웨거 연습용 페이지입니다.",
  },
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
      },
    },
  },
};

export default defaultSwagger;
