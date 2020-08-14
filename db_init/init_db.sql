CREATE SCHEMA IF NOT EXISTS "squeue";

CREATE TABLE IF NOT EXISTS "squeue"."users" (
    cust_id SERIAL PRIMARY KEY,
    first_name text,
    last_name text,
    email text,
    phone_number text
);

CREATE TABLE IF NOT EXISTS "squeue"."queue" (
    cust_id int,
    first_name text,
    last_name text,
    purpose_for_visit text,
    start_time timestamptz,
    expiry_time timestamptz
);