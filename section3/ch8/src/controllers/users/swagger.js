export const getUsersSwagger = {
  "/users": {
    get: {
      tags: ["Users"],
      summary: "유저 정보 불러오기",
      description: "유저 정보를 불러옵니다.",
      requestBody: {},
      responses: {
        200: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                result: {
                  type: "object",
                  example: {
                    users: [{ id: "number", name: "string", age: "number" }],
                  },
                  extra: {
                    users: {
                      type: "array",
                      items: {
                        id: {
                          type: "number",
                        },
                        name: {
                          type: "string",
                        },
                        age: {
                          type: "number",
                        },
                      },
                    },
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

export const getUser = {
  "/users/{id}": {
    get: {
      tags: ["Users"],
      summary: "유저 정보 한명 불러오기",
      description: "유저 정보 한명을 불러옵니다.",
      parameters: [
        {
          in: "path",
          name: "id",
          required: true,
          schema: {
            type: "number",
          },
        },
      ],
      requestBody: {},
      responses: {
        200: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                result: {
                  type: "object",
                  example: {
                    user: { id: "number", name: "string", age: "number" },
                  },
                  extra: {
                    user: {
                      type: "object",
                      items: {
                        id: {
                          type: "number",
                        },
                        name: {
                          type: "string",
                        },
                        age: {
                          type: "number",
                        },
                      },
                    },
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

export const createUser = {
  "/users": {
    post: {
      tags: ["Users"],
      summary: "유저 생성하기",
      description: "유저를 생성합니다.",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              example: {
                name: "string",
                age: "string",
              },
              extra: {
                name: {
                  type: "string",
                  description: "이름",
                },
                age: {
                  type: "number",
                  description: "아이디",
                },
              },
            },
          },
        },
      },
      responses: {
        201: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                result: {
                  type: "object",
                  example: {
                    users: [{ id: "number", name: "string", age: "number" }],
                  },
                  extra: {
                    users: {
                      type: "array",
                      items: {
                        id: {
                          type: "number",
                        },
                        name: {
                          type: "string",
                        },
                        age: {
                          type: "number",
                        },
                      },
                    },
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

export const updateUser = {
  "/users/:id": {
    patch: {
      tags: ["Users"],
      summary: "유저 수정하기",
      description: "유저를 수정합니다.",
      parameters: [
        {
          in: "path",
          name: "id",
          required: true,
          schema: {
            type: "number",
          },
        },
      ],
      requestBody: {
        content: {
          "application/json": {
            schema: {
              type: "object",
              example: {
                name: "string",
                age: "string",
              },
              extra: {
                name: {
                  type: "string",
                  description: "이름",
                },
                age: {
                  type: "number",
                  description: "아이디",
                },
              },
            },
          },
        },
      },
      responses: {
        204: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                result: {
                  type: "object",
                  example: {},
                  extra: {},
                },
              },
            },
          },
        },
      },
    },
  },
};

export const deleteUser = {
  "/users/:id": {
    delete: {
      tags: ["Users"],
      summary: "유저 삭제하기",
      description: "유저를 삭제합니다.",
      parameters: [
        {
          in: "path",
          name: "id",
          required: true,
          schema: {
            type: "number",
          },
        },
      ],
      requestBody: {},
      responses: {
        204: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                result: {
                  type: "object",
                  example: {},
                  extra: {},
                },
              },
            },
          },
        },
      },
    },
  },
};
