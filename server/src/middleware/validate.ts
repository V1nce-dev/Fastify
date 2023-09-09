import { Request, Response, Next } from "express";
import jwt from "jsonwebtoken";

const Verify = (req: Request, res: Response, next: Next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(" ")[1];

    jwt.verify(token, process.env.JWT_SECET, (error, user) => {
      if (error) {
        console.error(error);
        return res.status.json({
          error: "Failed to verify token",
          details: error.message,
        });
      }
      req.user = { _id: user._id };
      next();
    });
  } else {
    res.status(400).json({ error: "No authorization header provided" });
  }
};

export default Verify;
