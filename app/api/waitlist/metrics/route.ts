import { NextResponse } from "next/server";

// Endpoint disabled: metrics removed by request. Return a disabled result to avoid errors from leftover callers.
export async function GET() {
  return NextResponse.json({ ok: false, error: "disabled", count: 0, today: 0 }, { status: 404 });
}
