import { AuthController, AuthSwagger } from "./auth";
import { UserController, UserSwagger } from "./users";

export const Swaggers = {
  AuthSwagger,
  UserSwagger,
};

export const Controllers = [AuthController, UserController];
