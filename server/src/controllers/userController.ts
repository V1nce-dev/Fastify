import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import User from "../model/usermodel";

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.JWT_SECRET, { expiresIn: "7d" });
};

const register = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ message: "Both fields are required" });
    }

    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: "User already exist" });
    }

    const user = new User({ username, password });
    await user.save();

    const token = createToken(user._id);
    return res.status(200).json({ token });
  } catch (error) {
    return res.status(500).json({ message: "Error in registration" });
  }
};

const authenticate = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ message: "Both fields are required" });
    }

    const user = await User.findOne({ username });
    if (!user) {
      return res
        .status(400)
        .json({ message: "Authenticatoin failed. User not found" });
    }

    const ValidPassword = await user.comparePassword(password);
    if (!ValidPassword) {
      return res
        .status(400)
        .json({ message: "Authentication failed, invalid password" });
    }

    const token = createToken(user._id);

    return res.status(200).json({ token });
  } catch (error) {
    return res.status(500).json({ message: "Error in authenticatoin" });
  }
};

export default { register, authenticate };
