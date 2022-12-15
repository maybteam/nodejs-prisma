export const register = {
  "/auth/register": {
    post: {
      tags: ["Auth"],
      summary: "회원가입",
      requestBody: {
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                name: {
                  type: "string",
                },
                age: {
                  type: "number",
                },
                email: {
                  type: "string",
                },
                phoneNumber: {
                  type: "string",
                },
                password: {
                  type: "string",
                },
              },
            },
          },
        },
      },
      responses: {
        200: {
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  accessToken: {
                    type: "string",
                  },
                  refreshToken: {
                    type: "string",
                  },
                },
              },
            },
          },
        },
      },
    },
  },
};

export const login = {
  "/auth/login": {
    post: {
      tags: ["Auth"],
      summary: "로그인",
      requestBody: {
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                email: {
                  type: "string",
                },
                password: {
                  type: "string",
                },
              },
            },
          },
        },
      },
      responses: {
        200: {
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  accessToken: {
                    type: "string",
                  },
                  refreshToken: {
                    type: "string",
                  },
                },
              },
            },
          },
        },
      },
    },
  },
};