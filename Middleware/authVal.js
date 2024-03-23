import jwt from "jsonwebtoken";

export const VToken = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  try {
    if (!authHeader || !authHeader.startsWith("Bearer")) {
      return res.status(401).json({ message: "Unauthorized: No token found" });
    }

    const token = authHeader.split(" ")[1];

    if (!token) {
      return res.status(401).json({ message: "Unauthorized: No token found" });
    }

    const payload = jwt.verify(token, process.env.Secret);

    req.user = payload.courier; // Set user ID from token payload
    req.admin = payload.user; // Set admin status from token payload

    next();
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
