create extension if not exists pgcrypto;

create table if not exists public.profiles (
  id uuid primary key default gen_random_uuid(),
  auth_user_id uuid unique,
  full_name text not null,
  email text unique not null,
  phone text,
  city text,
  user_type text not null check (user_type in ('cliente', 'profissional')),
  created_at timestamp with time zone default now()
);

create table if not exists public.professionals (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid not null references public.profiles(id) on delete cascade,
  coren text,
  specialty text,
  base_price numeric(10,2) default 0,
  bio text,
  is_approved boolean default false,
  rating numeric(3,2) default 0,
  created_at timestamp with time zone default now()
);

create table if not exists public.service_requests (
  id uuid primary key default gen_random_uuid(),
  client_profile_id uuid not null references public.profiles(id) on delete cascade,
  professional_id uuid not null references public.professionals(id) on delete cascade,
  service_type text,
  preferred_date date,
  preferred_time time,
  notes text,
  status text not null default 'pending' check (status in ('pending', 'accepted', 'done', 'cancelled')),
  total_value numeric(10,2) default 0,
  created_at timestamp with time zone default now()
);

create table if not exists public.reviews (
  id uuid primary key default gen_random_uuid(),
  service_request_id uuid not null references public.service_requests(id) on delete cascade,
  rating integer not null check (rating between 1 and 5),
  comment text,
  created_at timestamp with time zone default now()
);
