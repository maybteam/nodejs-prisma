export const createPost = {
  "/posts": {
    post: {
      tags: ["Post"],
      summary: "게시글 생성",
      security: [
        {
          bearerAuth: [],
        },
      ],
      requestBody: {
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                title: {
                  type: "string",
                },
                content: {
                  type: "string",
                },
                tags: {
                  type: "array",
                  items: {
                    type: "string",
                  },
                },
              },
            },
          },
        },
      },
      responses: {
        201: {
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  id: {
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

export const createComment = {
  "/posts/comments": {
    post: {
      tags: ["Post"],
      summary: "댓글 생성",
      security: [
        {
          bearerAuth: [],
        },
      ],
      requestBody: {
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                content: {
                  type: "string",
                },
                postId: {
                  type: "string",
                },
              },
            },
          },
        },
      },
      responses: {
        201: {
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  id: {
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

export const createChildComment = {
  "/posts/child-comments": {
    post: {
      tags: ["Post"],
      summary: "자식 댓글 생성",
      security: [
        {
          bearerAuth: [],
        },
      ],
      requestBody: {
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                content: {
                  type: "string",
                },
                parentCommentId: {
                  type: "string",
                },
              },
            },
          },
        },
      },
      responses: {
        201: {
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  id: {
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
