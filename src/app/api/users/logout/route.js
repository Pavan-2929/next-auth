import { NextResponse } from "next/server";

export async function GET() {
  try {
    const respone = NextResponse.json({
      message: "Logout Successful",
      success: false,
    });

    respone.cookies.set("token", "", { httpOnly: true, expires: new Date(0) });

    return respone;
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
