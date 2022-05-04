CREATE DATABASE teste_ubi;

CREATE TABLE users (
  id serial PRIMARY KEY,
  email varchar(80) NOT NULL UNIQUE,
  password text NOT NULL
);