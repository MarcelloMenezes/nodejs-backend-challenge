CREATE DATABASE teste_ubi;

CREATE TABLE users (
  id serial PRIMARY KEY,
  email varchar(80) NOT NULL UNIQUE,
  password text NOT NULL
);

CREATE TABLE tasks (
	id serial PRIMARY KEY,
  description text NOT NULL,
  insertion_date timestamp NOT NULL,
  update_date timestamp NOT NULL,
  deadline date NOT NULL,
  completed boolean DEFAULT false NOT NULL,
  user_id integer REFERENCES users(id)
);