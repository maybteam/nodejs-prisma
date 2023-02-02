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
  };
};
export default defaultSwagger;
