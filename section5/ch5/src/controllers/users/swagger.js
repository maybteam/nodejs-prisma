export const getUserSwagger = {
  "/detail/:id": {
    get: {
      tags: ["User"],
      summary: "유저 상세 조회합니다.",
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
      responses: {
        200: {
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  user: {
                    type: "object",
                    properties: {
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
};

export const getUsersSwagger = {
  "/detail/:id": {
    post: {
      tags: ["User"],
      summary: "유저 상세 조회합니다.",
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
      responses: {
        200: {
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  user: {
                    type: "object",
                    properties: {
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
};
