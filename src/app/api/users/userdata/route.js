import { verifyToken } from "@/helpers/verifyToken";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/user.model";
import connection from "@/dbConfig/dbConfig";

connection()

export async function GET(request) {
    try {
        const userId = await verifyToken(request)

        const user = await User.findById(userId).select("-password")

        return  NextResponse.json(user)
    } catch (error) {
        console.log(error);
    }
}