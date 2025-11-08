import { NextResponse } from "next/server";
import { createAdminClient } from "../../../lib/supabase";
import type { WaitlistInsert } from "@/types/supabase";

// Basic POST handler for waitlist submissions.
// In production this would forward to a queue, CRM, or email service.
export async function POST(req: Request) {
  const data = await req.json().catch(() => null);
  if (!data) {
    return NextResponse.json({ ok: false, error: "bad_request" }, { status: 400 });
  }
  const email = String(data.email || "").trim();
  if (!/.+@.+\..+/.test(email)) {
    return NextResponse.json({ ok: false, error: "invalid_email" }, { status: 400 });
  }
  const name = data.name || null;
  const company = data.company || null;
  const role = data.role || null;
  const message = data.message || null;

  const supabase = createAdminClient();
  if (!supabase) {
    console.log("[waitlist] (no supabase env) submission", { email, name, company, role, message });
    return NextResponse.json({ ok: true, warning: "no_supabase_config" });
  }

  const payload: WaitlistInsert = { email, name, company, role, message };
  const { error } = await supabase.from("waitlist").insert(payload);
  if (error) {
    // 23505 unique violation (e.g., duplicate email)
    const code = (error as { code?: string }).code;
    const message = (error as { message?: string }).message || "";
    const isConflict = code === '23505' || /duplicate key/i.test(message);
    if (isConflict) {
      return NextResponse.json({ ok: true, duplicate: true }, { status: 409 });
    }
    console.error("[waitlist] supabase insert error", error);
    return NextResponse.json({ ok: false, error: "storage_error" }, { status: 500 });
  }
  return NextResponse.json({ ok: true });
}

export async function GET() {
  return NextResponse.json({ ok: true, message: "POST to submit waitlist entry" });
}