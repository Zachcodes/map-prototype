create table user_roles (
    id serial primary key,
    role text
)

create table if not exists primary_industry (
    id serial primary key,
    industry_name text,
    api_name text
)

create table if not exists business (
    id serial primary key,
    business_name varchar(150),
    email varchar(100),
    phone varchar(15),
    mailing_street varchar(100),
    mailing_city varchar(50),
    mailing_state varchar(50),
    website text,
    company_logo_url text,
    primary_industry_id integer references primary_industry(id)
)

create table if not exists users (
    id serial primary key,
    username varchar(50),
    password varchar(80),
    role_id integer references user_roles(id),
    business_id integer references business(id)
)

create table if not exists business_user_link (
    id serial primary key,
    users_id integer references users(id),
    business_id integer references business(id)
)

create table if not exists coordinates (
    id serial primary key,
    address text,
    lat text,
    lng text,
    description text,
    business_id integer references business(id)
)

