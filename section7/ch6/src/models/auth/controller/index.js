import { Router } from "express";
import { AuthService } from "../service";
import { LoginDTO, RegisterDTO } from "../dto";

class AuthController {
  authService;
  router;
  path = "/auth";

  constructor() {
    this.router = Router();
    this.authService = new AuthService();
    this.init();
  }

  init() {
    this.router.post("/register", this.register.bind(this));
    this.router.post("/login", this.login.bind(this));
    this.router.post("/refresh", this.refresh.bind(this));
  }

  async register(req, res, next) {
    try {
      const body = req.body;

      const { accessToken, refreshToken } = await this.authService.register(
        new RegisterDTO(body)
      );

      res.status(200).json({
        accessToken,
        refreshToken,
      });
    } catch (err) {
      next(err);
    }
  }

  async login(req, res, next) {
    try {
      const body = req.body;

      const { accessToken, refreshToken } = await this.authService.login(
        new LoginDTO(body)
      );

      res.status(200).json({
        accessToken,
        refreshToken,
      });
    } catch (err) {
      next(err);
    }
  }
  async refresh(req, res, next) {
    try {
      const body = req.body;

      const { accessToken, refreshToken } = await this.authService.refresh(
        body.accessToken,
        body.refreshToken
      );

      res.status(200).json({
        accessToken,
        refreshToken,
      });
    } catch (err) {
      next(err);
    }
  }
}

const authController = new AuthController();
export default authController;
