import { CreateUserDTO } from "../../users/dto";
import { UserService } from "../../users/service";
import jwt from "jsonwebtoken";

import dotenv from "dotenv";
dotenv.config();

export class AuthService {
  userService;

  constructor() {
    this.userService = new UserService();
  }

  // props : RegisterDTO
  async register(props) {
    const isExist = await this.userService.checkUserByEmail(props.email);

    if (isExist) throw { status: 400, message: "이미 존재하는 이메일입니다." };

    const newUserId = await this.userService.createUser(
      new CreateUserDTO({
        ...props,
        password: await props.hashPassword(),
      })
    );

    const accessToken = jwt.sign({ id: newUserId }, process.env.JWT_KEY, {
      expiresIn: "2h",
    });
    const refreshToken = jwt.sign({ id: newUserId }, process.env.JWT_KEY, {
      expiresIn: "14d",
    });

    console.log({ accessToken, refreshToken });

    return { accessToken, refreshToken };
  }

  async login(props) {
    const isExist = await this.userService.checkUserByEmail(props.email);

    if (!isExist) throw { status: 404, message: "유저를 찾을 수 없습니다." };

    const isPasswordCorrect = await props.comparePassword(isExist.password);

    if (!isPasswordCorrect)
      throw { status: 400, message: "비밀번호가 일치하지 않습니다." };

    const accessToken = jwt.sign({ id: isExist.id }, process.env.JWT_KEY, {
      expiresIn: "2h",
    });
    const refreshToken = jwt.sign({ id: isExist.id }, process.env.JWT_KEY, {
      expiresIn: "14d",
    });
    return {
      accessToken,
      refreshToken,
    };
  }
}