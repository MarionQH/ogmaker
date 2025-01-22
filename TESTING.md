# COMMENT TESTER 

## CREER UNE NOUVELLE BDD POUR LES TESTS

Open SQL CLI

- Linux or mac: `sudo -u postgres psql`
- Windows: `psql -U postgres`

```bash
CREATE DATABASE db_ogmaker_test;
CREATE USER user_ogmaker_test WITH SUPERUSER PASSWORD 'test_password';
GRANT ALL PRIVILEGES ON DATABASE db_ogmaker_test TO user_ogmaker_test;
ALTER DATABASE db_ogmaker_test OWNER TO user_ogmaker_test;

```

## ENV VAR DE TESTING

Copier .env.testing.example dans .env.testing

## REGISTER

- Quand je vais sur /register j'ai le formulaire de création de compte qui s'affiche
- Quand je vais sur /register, et que je remplie tous les champs de manière correcte, un nouveau compte est créé
- Quand je vais sur /register, et que je remplie tous les champs de manière correcte sauf le mot de passe qui est trop court, on reste sur la même page et une erreur s'affiche