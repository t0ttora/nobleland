import { NextResponse } from "next/server";

// Endpoint disabled: realtime/polling removed by request. Keep a disabled response to avoid 500s until build cache is cleared.
export async function GET() {
  return NextResponse.json({ ok: false, error: "disabled", count: 0 }, { status: 404 });
}
