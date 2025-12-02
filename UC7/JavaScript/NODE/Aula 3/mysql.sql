CREATE DATABASE api_usuarios_node;

USE api_usuarios_node;

CREATE TABLE `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
);

INSERT INTO usuarios (nome, email) VALUES 
('Cleber', 'cleber@teste.com'),
('Maria', 'maria@teste.com');