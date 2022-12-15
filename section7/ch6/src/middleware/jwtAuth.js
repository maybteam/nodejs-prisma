import dotenv from "dotenv";
import database from "../database";
dotenv.config();

export const jwtAuth = async (req, res, next) => {
  try {
    const headers = req.headers;
    const authorization = headers["authorization"] || headers["Authorization"];
    if (
      authorization?.includes("Bearer") ||
      authorization?.includes("bearer")
    ) {
      if (typeof authorization === "string") {
        const bearers = authorization.split(" ");
        if (bearers.length === 2 && typeof bearers[1] === "string") {
          const accessToken = bearers[1];

          const decoded = jwt.verify(accessToken, process.env.JWT_SECRET);
          const user = await database.user.findUnique({
            where: {
              id: decoded.id,
            },
          });

          if (user) {
            req.user = user;
          } else {
            req.user = undefined;
          }

          next();
        } else {
          next({ status: 400, message: "Authorization Fail" });
        }
      } else {
        next({ status: 400, message: "Authorization Fail" });
      }
    } else {
      next();
    }
  } catch (err) {
    next(err);
  }
};
