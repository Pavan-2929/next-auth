import { verifyToken } from "@/helpers/verifyToken";
import { NextResponse } from "next/server";
import User from "@/models/user.model";
import connection from "@/dbConfig/dbConfig";

connection();

export async function GET(request) {
  try {
    const userId = await getDataFromToken(request);
    const user = await User.findOne({ _id: userId }).select("-password");
    return NextResponse.json({
      mesaaage: "User found",
      data: user,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
