-- 1. Create the table for saving music
create table public.saved_music (
  id uuid not null default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  composer text,
  title text,
  youtube_id text,
  description text,
  composer_info text,
  music_info text,
  mood text,
  created_at timestamptz default now(),
  primary key (id)
);

-- 2. Enable Row Level Security (RLS)
-- This is critical! It ensures users can ONLY see/edit their own data.
alter table public.saved_music enable row level security;

-- 3. Create Policies

-- Allow users to view their own music
create policy "Users can view their own saved music"
on public.saved_music for select
using ( auth.uid() = user_id );

-- Allow users to add music (insert)
create policy "Users can add music"
on public.saved_music for insert
with check ( auth.uid() = user_id );

-- Allow users to delete their own music
create policy "Users can delete their own music"
on public.saved_music for delete
using ( auth.uid() = user_id );
