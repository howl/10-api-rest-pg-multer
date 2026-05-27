DROP TABLE IF EXISTS users, services;

CREATE TABLE IF NOT EXISTS users (
  id serial NOT NULL PRIMARY KEY,
  name varchar(30) NOT NULL,
  email varchar(255) UNIQUE NOT NULL,
  password varchar(72) NOT NULL,
  creation_date timestamp DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO users (name, email, password)
VALUES
  ('Zapato', 'zapato@example.com', 'INVALID_PASSWORD'),
  ('Chotobuque', 'chotobuque@example.com', 'INVALID_PASSWORD'),
  ('Alfiler', 'alfiler@example.com', 'INVALID_PASSWORD'),
  ('Troca', 'troca@example.com', 'INVALID_PASSWORD');

CREATE TABLE IF NOT EXISTS services (
  id serial NOT NULL PRIMARY KEY,
  name varchar(100) NOT NULL,
  description text NOT NULL,
  category varchar(15),
  price numeric(19, 4),
  creation_date date DEFAULT CURRENT_DATE
);

INSERT INTO services (name, description, category, price)
VALUES
  ('Servicio 1', 'Descripción del servicio 1', 'Asistencia', 543.78),
  ('Servicio 2', 'Descripción del servicio 2', 'Entretenimiento', 93.67),
  ('Servicio 3', 'Descripción del servicio 3', 'Autonomía', 52.18),
  ('Servicio 4', 'Descripción del servicio 4', 'Educación', 84.93);
