"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { useCallback, useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Aurora from "@/app/noblesuite/components/aurora";
import { cn } from "@/lib/utils";
import { Check, ChevronsUpDown, Factory, Truck, BriefcaseBusiness, Ship, Warehouse, PackageSearch, MoreHorizontal, Rocket, Sparkles, Lightbulb, MessageSquareQuote } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Command, /* CommandEmpty */ CommandGroup, /* CommandInput */ CommandItem, CommandList } from "@/components/ui/command";

export type WaitlistPayload = {
  email: string;
  name?: string;
  company?: string;
  role?: string;
  message?: string;
};

export function WaitlistDialog({
  trigger,
  initialEmail,
  open: controlledOpen,
  onOpenChange,
}: {
  trigger?: React.ReactNode;
  initialEmail?: string;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}) {
  const [internalOpen, setInternalOpen] = useState(false);
  const isControlled = typeof controlledOpen === "boolean";
  const open = isControlled ? (controlledOpen as boolean) : internalOpen;
  const setOpen = (v: boolean) => (isControlled ? onOpenChange?.(v) : setInternalOpen(v));
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);
  const messageRef = useRef<HTMLTextAreaElement | null>(null);
  const [emailDefault, setEmailDefault] = useState<string>("");
  const [roleOpen, setRoleOpen] = useState(false);
  const [roleValue, setRoleValue] = useState<string>("");

  const roles = [
    { value: "forwarder", label: "Forwarder", description: "Freight forwarding & logistics ops", icon: Truck },
    { value: "shipper", label: "Shipper", description: "Manufacturers, brands & exporters", icon: Factory },
    { value: "broker", label: "Broker / Agent", description: "Customs & compliance professionals", icon: BriefcaseBusiness },
    { value: "carrier", label: "Carrier", description: "Air, ocean & ground transport operators", icon: Ship },
    { value: "warehouse", label: "Warehouse Ops", description: "3PL & fulfillment centers", icon: Warehouse },
    { value: "procurement", label: "Procurement", description: "Sourcing & purchasing roles", icon: PackageSearch },
    { value: "other", label: "Other", description: "Other role or title", icon: MoreHorizontal },
  ];

  // Message seed helpers
  const messageSeeds = {
    curious: [
      "Just exploring what NobleVerse can do for our operations.",
      "Curious about the roadmap & core logistics features.",
      "Looking to see if it fits our existing stack.",
      "Evaluating platforms—wanted to learn more about yours.",
      "Researching solutions for multi-party shipment visibility.",
    ],
    excited: [
      "Really excited about the idea—love the unified platform vision!",
      "This looks promising; eager to try it with our team soon.",
      "Pumped about collaboration & intelligent automation angles.",
      "The approach resonates—keen to get early access.",
      "Love the brand and narrative; want to be part of the journey.",
    ],
    pilot: [
      "Interested in a pilot to evaluate visibility workflows.",
      "We’d like to pilot NobleVerse with a small trade lane.",
      "Exploring an early access pilot with 1–2 customers.",
      "Looking for structured pilot + shared success metrics.",
      "Want to test integrating forwarders and internal ops.",
    ],
    feedback: [
      "I have feedback on shipment rooms & integrations roadmap.",
      "Happy to share operations feedback from a forwarder view.",
      "Can provide detailed requirements for carrier collaboration.",
      "Interested in giving product usability feedback regularly.",
      "Have ideas on analytics panels & exception handling.",
    ],
  } as const;

  const setSeedMessage = (kind: keyof typeof messageSeeds) => {
    const list = messageSeeds[kind];
    const text = list[Math.floor(Math.random() * list.length)];
    if (messageRef.current) {
      messageRef.current.value = text;
    }
  };

  const onSubmit = useCallback(async (formData: FormData) => {
    setError(null);
    setSuccess(false);
    setLoading(true);
    const payload: WaitlistPayload = {
      email: String(formData.get("email") || "").trim(),
      name: String(formData.get("name") || "").trim() || undefined,
      company: String(formData.get("company") || "").trim() || undefined,
      role: String(formData.get("role") || "").trim() || undefined,
      message: String(formData.get("message") || "").trim() || undefined,
    };
    const emailOk = /.+@.+\..+/.test(payload.email);
    if (!emailOk) {
      setLoading(false);
      setError("Please enter a valid email address.");
      return;
    }
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Request failed");
      setSuccess(true);
      if (formRef.current) formRef.current.reset();
      setTimeout(() => {
        if (isControlled) onOpenChange?.(false); else setInternalOpen(false);
      }, 1800);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }, [isControlled, onOpenChange]);

  // update email default whenever dialog opens
  // ensures the input is prefilled with latest initialEmail value
  // without forcing a controlled input
  useEffect(() => {
    if (open) {
      setEmailDefault(initialEmail ?? "");
    }
  }, [open, initialEmail]);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        {trigger ?? <Button variant="outline">Join Waitlist</Button>}
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <Dialog.Content className="fixed z-[101] left-1/2 top-1/2 w-[95vw] max-w-5xl -translate-x-1/2 -translate-y-1/2 rounded-(--radius) border border-white/10 bg-background/95 p-0 shadow-xl focus:outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95">
          <div className="relative grid grid-cols-1 md:grid-cols-[0.4fr_0.6fr] items-stretch">
            <div className="relative overflow-hidden rounded-l-(--radius) min-h-[500px] isolate hidden md:block">
              <div className="absolute inset-0 p-4">
                <div className="relative h-full w-full overflow-hidden rounded-xl border border-white/10 bg-black/20">
                  <Aurora
                    colorStops={["#ff5a26", "#ff7a52", "#ff5a26"]}
                    blend={0.65}
                    amplitude={0.9}
                    speed={0.45}
                  />
                  <div
                    className="pointer-events-none absolute inset-0"
                    style={{
                      background:
                        "radial-gradient(120% 120% at 50% 0%, rgba(0,0,0,0.0) 0%, rgba(0,0,0,0.18) 55%, rgba(0,0,0,0.38) 100%)",
                    }}
                  />
                </div>
              </div>
            </div>
            <form
              ref={formRef}
              aria-busy={loading}
              className="relative z-10 flex min-h-[500px] max-h-[85vh] overflow-auto minimal-scrollbar p-6 flex-col gap-4"
              action={(fd) => { void onSubmit(fd); }}
            >
              <Dialog.Title className="text-xl font-semibold">Join the Waitlist</Dialog.Title>
              <Dialog.Description className="-mt-1 text-sm text-muted-foreground">
                Be the first to know about launches and early access programs.
              </Dialog.Description>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" required placeholder="team@nobleverse.co" defaultValue={emailDefault} />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" type="text" required placeholder="Oluş Emre Demir" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="company">Company (optional)</Label>
                <Input id="company" name="company" type="text" placeholder="Noble Expres Inc." />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="role">Role (optional)</Label>
                <input type="hidden" name="role" value={roleValue} />
                <Popover open={roleOpen} onOpenChange={setRoleOpen}>
                  <PopoverTrigger asChild>
                    <Button variant="outline" role="combobox" aria-expanded={roleOpen} className="w-full justify-between">
                      {roleValue ? roles.find(r => r.value === roleValue)?.label : "Select a role (optional)"}
                      <ChevronsUpDown className="opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-[--radix-popover-trigger-width] p-0">
                    <Command>
                      <CommandList>
                        <CommandGroup>
                          {roles.map((r) => (
                            <CommandItem key={r.value} value={r.value} onSelect={(current) => { setRoleValue(current === roleValue ? "" : current); setRoleOpen(false); }}>
                              <r.icon className="w-4 h-4" />
                              <div className="flex flex-col">
                                <span className="font-medium">{r.label}</span>
                                <span className="text-xs text-muted-foreground">{r.description}</span>
                              </div>
                              <Check className={cn("ml-auto", roleValue === r.value ? "opacity-100" : "opacity-0")} />
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="message">Message (optional)</Label>
                <div className="flex flex-wrap gap-2">
                  <Button type="button" size="sm" variant="secondary" onClick={() => setSeedMessage('curious')} className="gap-1"><Lightbulb className="h-3.5 w-3.5" />Just curious</Button>
                  <Button type="button" size="sm" variant="secondary" onClick={() => setSeedMessage('excited')} className="gap-1"><Sparkles className="h-3.5 w-3.5" />Excited</Button>
                  <Button type="button" size="sm" variant="secondary" onClick={() => setSeedMessage('pilot')} className="gap-1"><Rocket className="h-3.5 w-3.5" />Pilot</Button>
                  <Button type="button" size="sm" variant="secondary" onClick={() => setSeedMessage('feedback')} className="gap-1"><MessageSquareQuote className="h-3.5 w-3.5" />Feedback</Button>
                  <Button type="button" size="sm" variant="ghost" onClick={() => { if (messageRef.current) messageRef.current.value=''; }} className="gap-1">Clear</Button>
                </div>
                <textarea ref={messageRef} id="message" name="message" placeholder="What would you like to achieve with NobleVerse?" className="min-h-24 md:min-h-32 h-full resize-y rounded-(--radius) border bg-background px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-foreground/20" />
              </div>
              <div aria-live="polite" className="min-h-[1.25rem]">
                {error && <p className="text-sm text-destructive">{error}</p>}
                {success && <p className="text-sm text-green-600">Thanks! You’re on the list.</p>}
              </div>
              <div className="mt-2 flex items-center justify-end gap-2">
                <Dialog.Close asChild>
                  <Button variant="ghost" type="button">Cancel</Button>
                </Dialog.Close>
                <Button type="submit" disabled={loading}>
                  {loading ? "Submitting…" : "Submit"}
                </Button>
              </div>
            </form>
            {success && (
              <div className="absolute inset-0 z-20 grid place-items-center bg-black/70 backdrop-blur-sm animate-in fade-in-0 duration-300">
                <div className="text-center">
                  <div className="mx-auto mb-3 size-14 rounded-full bg-green-500/20 border border-green-500/40 grid place-items-center">
                    <Check className="h-7 w-7 text-green-400 animate-in zoom-in-95 duration-300" />
                  </div>
                  <p className="text-lg font-semibold">Thanks! You’re on the list.</p>
                </div>
              </div>
            )}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
