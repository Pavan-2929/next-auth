// pages/api/users/userdata.js

import { verifyToken } from "@/helpers/verifyToken";
import User from "@/models/user.model";
import connection from "@/dbConfig/dbConfig";
import { NextApiRequest, NextApiResponse } from "next";

connection();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const userId = await verifyToken(token);

    if (!userId) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const user = await User.findById(userId).select("-password");
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error("Error fetching user data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
