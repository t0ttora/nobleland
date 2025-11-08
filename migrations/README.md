# How to apply these migrations on Supabase

1. Create a new project at <https://supabase.com/> or use your existing one.
2. Open the SQL editor and run the contents of `0001_waitlist.sql`.
   - This will create the `waitlist` table, indexes, enable RLS and insert policies, and an admin view.
3. Set environment variables in `.env.local` (or your deployment secrets):
   - `SUPABASE_URL=...` (project URL)
   - `SUPABASE_SERVICE_ROLE_KEY=...` (service role key)
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY=...` (anon key)
4. Deploy your app; the API route `/api/waitlist` will insert entries server-side using the service role when present.

## Notes

- RLS allows inserts for anon and authenticated users; no select/update/delete is allowed for anon.
- The service role bypasses RLS and can read `public.waitlist_admin_view` for dashboards.
- A unique index on `lower(email)` ensures each email appears once; duplicates return HTTP 409.
