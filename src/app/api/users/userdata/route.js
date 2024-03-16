import { verifyToken } from "@/helpers/verifyToken";
import { NextResponse } from "next/server";
import User from "@/models/user.model";
import connection from "@/dbConfig/dbConfig";

connection();

export async function GET(request) {
  try {
    // Check if the request is made during static generation
    if (request.renderMode === "passthrough") {
      return NextResponse.error(
        "Cannot access cookies during static generation",
        { status: 500 }
      );
    }

    // Access cookies only if the request is made during runtime
    const token = request.cookies.token || "";
    if (!token) {
      return NextResponse.error("Unauthorized", { status: 401 });
    }

    const userId = await verifyToken(token);
    if (!userId) {
      return NextResponse.error("Unauthorized", { status: 401 });
    }

    const user = await User.findById(userId).select("-password");
    if (!user) {
      return NextResponse.error("User not found", { status: 404 });
    }
    return NextResponse.json(user);
  } catch (error) {
    console.error("Error fetching user data:", error);
    return NextResponse.error("Internal Server Error", { status: 500 });
  }
}
