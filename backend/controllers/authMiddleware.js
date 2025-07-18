import { JWT_SECRET } from "./config.js";
// import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(403).json({});
  }
  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.UserId = decoded.UserId;
    next();
  } catch (e) {
    return res.json({
      msg: "Error",
    });
  }
};

export default authMiddleware;
