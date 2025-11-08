// Generated helper types for Supabase tables used in the project.
// Expand or regenerate as schema evolves. Keeps API route logic strongly typed.

export interface WaitlistRow {
  id: string;           // uuid
  email: string;        // text, unique (lowercase index)
  name: string | null;  // text
  company: string | null; // text
  role: string | null;  // text (selected via combobox)
  message: string | null; // text (free-form)
  created_at: string;   // timestamptz
  source: string | null; // text (future: capture UTM/referrer)
}

// Insert shape (omit generated columns, make optional nullable fields)
export interface WaitlistInsert {
  email: string;
  name?: string | null;
  company?: string | null;
  role?: string | null;
  message?: string | null;
  source?: string | null;
}

// Minimal public export container if more tables added later
export interface DatabaseTables {
  waitlist: {
    Row: WaitlistRow;
    Insert: WaitlistInsert;
  };
}

export type { WaitlistRow as Waitlist, WaitlistInsert as NewWaitlistEntry };
