import database from "../../../database";

export class UserService {
  // findById, findMany, create, update, delete

  async checkUserByEmail(email) {
    const user = await database.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) return false;

    return user;
  }

  async findUserById(id) {
    const user = await database.user.findUnique({
      where: {
        id,
      },
    });

    if (!user) throw { status: 404, message: "유저를 찾을 수 없습니다." };
    return user;
  }

  async findUsers({ skip, take }) {
    const users = await database.user.findMany({
      where: {},
      skip,
      take,
    });

    const count = await database.user.count();

    return {
      users,
      count,
    };
  }

  async createUser(props) {
    const newUser = await database.user.create({
      data: {
        name: props.name,
        email: props.email,
        phoneNumber: props.phoneNumber,
        password: props.password,
        description: props.description,
      },
    });

    return newUser.id;
  }

  async updateUser(id, props) {
    const isExist = await database.user.findUnique({
      where: {
        id,
      },
    });

    if (!isExist) throw { status: 404, message: "유저를 찾을 수 없습니다." };
    if (props.password) {
      await props.updatePassword();
    }

    await database.user.update({
      where: {
        id: isExist.id,
      },
      data: {
        name: props.name,
        email: props.email,
        phoneNumber: props.phoneNumber,
        password: props.password,
        description: props.description,
      },
    });
  }

  async deleteUser(id) {
    const isExist = await database.user.findUnique({
      where: {
        id,
      },
    });

    if (!isExist) throw { status: 404, message: "유저를 찾을 수 없습니다." };

    await database.user.delete({
      where: {
        id: isExist.id,
      },
    });
  }
}
