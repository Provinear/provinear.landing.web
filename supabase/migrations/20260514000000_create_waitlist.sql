-- Migration: create waitlist table
-- Stores early access sign-ups from the Provinear landing page.

create table if not exists public.waitlist (
  id          uuid primary key default gen_random_uuid(),
  email       text not null,
  intent      text not null check (intent in ('discover', 'sell')),
  source      text not null default 'homepage-prelaunch',
  created_at  timestamptz not null default now()
);

-- Prevent duplicate emails per intent (one person can sign up as both customer and provider)
create unique index if not exists waitlist_email_intent_unique
  on public.waitlist (lower(email), intent);

-- Index for admin queries sorted by sign-up time
create index if not exists waitlist_created_at_idx
  on public.waitlist (created_at desc);

-- Enable Row Level Security
alter table public.waitlist enable row level security;

-- Allow anonymous inserts (the landing page is public, no auth required)
create policy "Allow public inserts"
  on public.waitlist
  for insert
  to anon
  with check (true);

-- Deny all reads from the client — reads should go through the service role only
create policy "Deny public reads"
  on public.waitlist
  for select
  to anon
  using (false);
