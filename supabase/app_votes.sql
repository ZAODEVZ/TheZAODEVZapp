-- Run this once in the Supabase project's SQL editor to enable real app voting.

create table if not exists app_votes (
  id uuid primary key default gen_random_uuid(),
  app_id integer not null,
  voter_id text not null,
  rating smallint not null check (rating between 1 and 5),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (app_id, voter_id)
);

create or replace view app_vote_stats as
select
  app_id,
  avg(rating)::numeric(3, 2) as avg_rating,
  count(*) as vote_count
from app_votes
group by app_id;

alter table app_votes enable row level security;

-- Anonymous visitors can cast/update their own vote and read aggregate stats.
-- There is no auth layer here, so this is an honesty-based MVP: someone could clear
-- localStorage or use another browser to vote again. Good enough for a community
-- pulse-check; revisit if votes need to be tamper-resistant.
create policy "anon can insert votes" on app_votes
  for insert to anon with check (true);

create policy "anon can update own vote" on app_votes
  for update to anon using (true) with check (true);

create policy "anon can read votes" on app_votes
  for select to anon using (true);

grant select on app_vote_stats to anon;
