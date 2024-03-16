export async function GET() {
  try {
    return NextResponse.json("is working");
  } catch (error) {
    console.log(error);
  }
}
