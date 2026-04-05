import { NextResponse } from "next/server";
export async function POST(req: Request) {
  const { password } = await req.json();

  if (!process.env.SPOTD_PASSWORD) {
    return NextResponse.json(
      { error: "Password not configured" },
      { status: 500 },
    );
  }

    const isValid = password === process.env.SPOTD_PASSWORD;

    if (!isValid) {
        return NextResponse.json({error: "Incorrect Password"}, {status: 401})
    }

    return NextResponse.json({success: true})
}
