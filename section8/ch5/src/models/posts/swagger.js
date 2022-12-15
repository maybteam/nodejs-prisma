export const getPost = {
  "/posts/detail/:id": {
    get: {
      tags: ["Post"],
      summary: "게시글 상세 조회합니다.",
      security: [
        {
          bearerAuth: [],
        },
      ],
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
                  post: {
                    type: "object",
                    properties: {
                      id: {
                        type: "string",
                      },
                      title: {
                        type: "string",
                      },
                      content: {
                        type: "string",
                      },
                      createAt: {
                        type: "string",
                        format: "date-time",
                      },
                      likeCount: {
                        type: "number",
                      },
                      isLiked: {
                        type: "boolean",
                      },
                      user: {
                        type: "object",
                        properties: {
                          id: {
                            type: "string",
                          },
                          name: {
                            type: "string",
                          },
                          email: {
                            type: "string",
                          },
                          description: {
                            type: "string",
                          },
                          phoneNumber: {
                            type: "string",
                          },
                        },
                      },
                      comments: {
                        type: "array",
                        items: {
                          type: "object",
                          properties: {
                            id: {
                              type: "string",
                            },
                            content: {
                              type: "string",
                            },
                            user: {
                              type: "object",
                              properties: {
                                id: {
                                  type: "string",
                                },
                                name: {
                                  type: "string",
                                },
                                email: {
                                  type: "string",
                                },
                                description: {
                                  type: "string",
                                },
                                phoneNumber: {
                                  type: "string",
                                },
                              },
                            },
                            childComments: {
                              type: "array",
                              items: {
                                id: {
                                  type: "string",
                                },
                                title: {
                                  type: "string",
                                },
                                content: {
                                  type: "string",
                                },
                                createAt: {
                                  type: "string",
                                  format: "date-time",
                                },
                                likeCount: {
                                  type: "number",
                                },
                                isLiked: {
                                  type: "boolean",
                                },
                                user: {
                                  type: "object",
                                  properties: {
                                    id: {
                                      type: "string",
                                    },
                                    name: {
                                      type: "string",
                                    },
                                    email: {
                                      type: "string",
                                    },
                                    description: {
                                      type: "string",
                                    },
                                    phoneNumber: {
                                      type: "string",
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                      tags: {
                        type: "object",
                        properties: {
                          id: {
                            type: "string",
                          },
                          name: {
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
        },
      },
    },
  },
};

export const getPosts = {
  "/posts": {
    get: {
      tags: ["Post"],
      summary: "게시글 목록 조회합니다.",
      parameters: [
        {
          in: "query",
          name: "searchValue",
          schema: {
            type: "string",
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
                  post: {
                    type: "object",
                    properties: {
                      id: {
                        type: "string",
                      },
                      title: {
                        type: "string",
                      },
                      content: {
                        type: "string",
                      },
                      createAt: {
                        type: "string",
                        format: "date-time",
                      },

                      user: {
                        type: "object",
                        properties: {
                          id: {
                            type: "string",
                          },
                          name: {
                            type: "string",
                          },
                          email: {
                            type: "string",
                          },
                          description: {
                            type: "string",
                          },
                          phoneNumber: {
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
        },
      },
    },
  },
};

export const postLike = {
  "/posts/:id/like-combined": {
    delete: {
      tags: ["Post"],
      summary: "게시글 좋아요를 하기 혹은 삭제하기",
      parameters: [
        {
          in: "path",
          name: "id",
          required: true,
          schema: {
            type: "string",
          },
        },
      ],
      requestBody: {
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                isLike: {
                  type: "boolean",
                },
              },
            },
          },
        },
      },
      responses: {
        204: {
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {},
              },
            },
          },
        },
      },
    },
  },
};

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

export const updatePost = {
  "/posts/:id": {
    patch: {
      tags: ["Post"],
      summary: "게시글 수정하기",
      security: [
        {
          bearerAuth: [],
        },
      ],
      parameters: [
        {
          in: "path",
          name: "id",
          required: true,
          schema: {
            type: "string",
          },
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
        204: {
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {},
              },
            },
          },
        },
      },
    },
  },
};

export const updateComment = {
  "/comments/:commentId": {
    patch: {
      tags: ["Post"],
      summary: "댓글 수정하기",
      security: [
        {
          bearerAuth: [],
        },
      ],
      parameters: [
        {
          in: "path",
          name: "commentId",
          required: true,
          schema: {
            type: "string",
          },
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
              },
            },
          },
        },
      },
      responses: {
        204: {
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {},
              },
            },
          },
        },
      },
    },
  },
};

export const deletPost = {
  "/posts/:id": {
    delete: {
      tags: ["Post"],
      summary: "게시글 삭제하기",
      security: [
        {
          bearerAuth: [],
        },
      ],
      parameters: [
        {
          in: "path",
          name: "id",
          required: true,
          schema: {
            type: "string",
          },
        },
      ],
      responses: {
        204: {
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {},
              },
            },
          },
        },
      },
    },
  },
};

export const deleteComment = {
  "/comments/:commentId": {
    delete: {
      tags: ["Post"],
      summary: "댓글 삭제하기",
      security: [
        {
          bearerAuth: [],
        },
      ],
      parameters: [
        {
          in: "path",
          name: "commentId",
          required: true,
          schema: {
            type: "string",
          },
        },
      ],
      responses: {
        204: {
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {},
              },
            },
          },
        },
      },
    },
  },
};
