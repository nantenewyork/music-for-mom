-- Subscription tracking table
create table public.subscriptions (
  id uuid not null default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  polar_subscription_id text,
  status text not null default 'trial', -- 'trial', 'active', 'canceled', 'expired'
  trial_ends_at timestamptz,
  current_period_end timestamptz,
  created_at timestamptz default now(),
  updated_at timestamptz default now(),
  primary key (id),
  unique (user_id)
);

-- Enable RLS
alter table public.subscriptions enable row level security;

-- Policies
create policy "Users can view their own subscription"
on public.subscriptions for select
using ( auth.uid() = user_id );

create policy "Users can insert their own subscription"
on public.subscriptions for insert
with check ( auth.uid() = user_id );

-- Index for faster lookups
create index subscriptions_user_id_idx on public.subscriptions(user_id);
create index subscriptions_polar_id_idx on public.subscriptions(polar_subscription_id);
