const defaultSwagger = ({ title, description, servers }) => {
  return {
    openapi: "3.0.0",
    info: {
      version: "0.0.1",
      title: "example",
      description: "",
      termsOfService: "",
      contact: {},
      license: {
        name: "",
      },
    },
    servers: [
      {
        url: "http://localhost:8000",
        description: "dev",
        variables: {},
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
    tags: [],
    externalDocs: {
      url: "",
      description: "",
    },
  };
};
export default defaultSwagger;
