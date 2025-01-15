# OgMaker AdonisJS 6

## Prerequisites

```bash
nodejs version : 22
git version 2.46.0
PostgreSQL version : 17.2
```

## Install a local DB

Open SQL CLI

- Linux or mac: `sudo -u postgres psql`
- Windows: `psql -U postgres`

Windows or Linux: you will need to provide the password set during the installation unless you ran it as an administrator.

```sql
CREATE DATABASE db_ogmaker;
CREATE USER user_ogmaker WITH SUPERUSER PASSWORD 'password';
GRANT ALL PRIVILEGES ON DATABASE db_ogmaker TO user_ogmaker;
ALTER DATABASE db_ogmaker OWNER TO user_ogmaker;

```

## Install env var

copy .env.example into .env

## Install project locally

```shell
npm install
node ace migration:run
node ace db:seed
npm run dev
```

## Access the project on your local Server

Once the server is running, open your browser and navigate to:

<http://localhost:3333>

## Log in as User

Email : <User1@test.com>"

Password : 12345678
