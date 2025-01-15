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

## View all routes

node ace list:routes

## Create a unit test

node ace make:test users/hash --suite=unit

then copy/paste content from node ace make:test users/hash --suite=unit

```ts
import { test } from '@japa/runner'

import hash from '@adonisjs/core/services/hash'
import User from '#models/user'

test('hashes user password when creating a new user', async ({ assert }) => {
  const user = new User()
  user.password = 'secret'
  user.email = 'a@b.c'

  await user.save()

  assert.isTrue(hash.isValidHash(user.password))
  assert.isTrue(await hash.verify(user.password, 'secret'))
})
```
