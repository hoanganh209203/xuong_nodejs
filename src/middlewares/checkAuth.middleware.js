import { errorMessages } from "../constants/message.constant.js";
import User from "../models/user.model.js";
import { verifyToken } from "../utils/jwt.utils.js";

export const checkAuth = async (req, res, next) => {
  try {
    const token = req.headers?.authorization?.split(" ")[1];
    if (!token) {
      return res.status(400).json({
        message: errorMessages.TOKEN_INVALID,
      });
    }
    const decode = verifyToken(token);
    if (!decode) {
      return res.status(400).json({
        message: errorMessages.TOKEN_INVALID,
      });
    }
    const user = await User.findById(decode._id);
    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};