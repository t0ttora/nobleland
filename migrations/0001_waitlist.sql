-- Enable extensions commonly needed
create extension if not exists "uuid-ossp";
create extension if not exists pgcrypto;

-- Waitlist table
create table if not exists public.waitlist (
  id uuid primary key default uuid_generate_v4(),
  email text not null,
  name text,
  company text,
  role text,
  message text,
  created_at timestamp with time zone not null default now(),
  created_by uuid, -- optional user id if you auth in the future
  constraint email_chk check (position('@' in email) > 1)
);

-- Unique index on email (one entry per email)
create unique index if not exists waitlist_email_unique on public.waitlist (lower(email));

-- Index created_at for ordering
create index if not exists waitlist_created_at_idx on public.waitlist (created_at desc);

-- Row Level Security
alter table public.waitlist enable row level security;

-- Policy: Allow inserts to everyone (anonymous) but only specific columns
-- If you want to restrict by origin, add checks here or use Edge Functions with secret.
drop policy if exists waitlist_insert on public.waitlist;
create policy waitlist_insert
on public.waitlist
for insert
to anon, authenticated
with check (true);

-- Policy: No select/update/delete for anon by default
drop policy if exists waitlist_select_self on public.waitlist;
create policy waitlist_select_self
on public.waitlist
for select
using (auth.role() = 'authenticated' and created_by = auth.uid());

-- Service role bypasses RLS automatically; create a view for admin dashboards
create or replace view public.waitlist_admin_view as
select id, email, name, company, role, message, created_at
from public.waitlist;

revoke all on public.waitlist_admin_view from public;
-- Only service role can select the admin view via server-side key
-- (Supabase service role bypasses RLS and privilege checks)

comment on table public.waitlist is 'Public waitlist signups created via website form. RLS allows inserts for anon.';
comment on view public.waitlist_admin_view is 'Admin view for server-side reporting.';
