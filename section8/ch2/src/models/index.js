import { AuthController, AuthSwagger } from "./auth";
import { UserController, UserSwagger } from "./users";
import { PostController, PostSwagger } from "./posts";

export const Controllers = [AuthController, UserController, PostController];
export const Swaggers = {
  UserSwagger,
  AuthSwagger,
  PostSwagger,
};
