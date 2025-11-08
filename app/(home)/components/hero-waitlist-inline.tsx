"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { WaitlistDialog } from "@/components/ui/waitlist-dialog";

// Inline email capture that opens the waitlist dialog with the typed email prefilled.
export function HeroWaitlistInline() {
  const [email, setEmail] = useState("");
  const [open, setOpen] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Open regardless of email; if email present it will prefill.
    setOpen(true);
  }

  return (
    <>
      <div className="mt-6 flex w-full justify-center">
        <form onSubmit={handleSubmit} className="flex w-full max-w-md items-center gap-2" aria-label="Join waitlist quick form">
          <label htmlFor="hero-email" className="sr-only">Email address</label>
          <input
            id="hero-email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-11 flex-1 rounded-(--radius) border bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-foreground/20"
          />
          <Button size="lg" type="submit" className="shrink-0">Join Waitlist</Button>
        </form>
      </div>
      {/* Hidden trigger replaced with controlled open */}
      <WaitlistDialog
        trigger={<span className="hidden" />}
        open={open}
        onOpenChange={(o) => setOpen(o)}
        initialEmail={email}
      />
    </>
  );
}