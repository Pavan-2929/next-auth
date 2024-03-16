import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

export const verifyToken = (request) => {
  try {
    const token = request.cookies.get("token")?.value || "";

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);

    return decodedToken.id;
  } catch (error) {
    console.log(error);
  }
};
