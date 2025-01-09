# Jumpstart AdonisJS 6

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
CREATE DATABASE db_startado;
CREATE USER user_startado WITH SUPERUSER PASSWORD 'password';
GRANT ALL PRIVILEGES ON DATABASE db_startado TO user_startado;
ALTER DATABASE db_startado OWNER TO user_startado;

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