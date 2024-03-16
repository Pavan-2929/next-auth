import jwt from "jsonwebtoken";

export const verifyToken = (token) => {
  try {
    if (!token) {
      return null; // Token is missing, return null
    }

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    return decodedToken.id;
  } catch (error) {
    console.error("Error verifying token:", error);
    throw new Error("Invalid token"); // Throw error when token is invalid
  }
};
