create database atividade;

use atividade;

create table clientes(
	nome varchar(30),
    idade int,
    cidade varchar(30),
    ativo bool
);

INSERT INTO clientes (nome, idade, cidade, ativo) VALUES
('Ana Souza', 25, 'São Paulo', TRUE),
('Bruno Lima', 32, 'Rio de Janeiro', FALSE),
('Carlos Mendes', 40, 'Belo Horizonte', TRUE),
('Daniela Rocha', 29, 'São Paulo', TRUE),
('Eduardo Silva', 35, 'Curitiba', FALSE),
('Fernanda Costa', 22, 'Recife', TRUE),
('Gustavo Nunes', 28, 'Fortaleza', TRUE),
('Helena Martins', 45, 'Rio de Janeiro', FALSE),
('Igor Ferreira', 31, 'São Paulo', TRUE),
('Juliana Alves', 38, 'Curitiba', TRUE);

select * from clientes where idade > 30;

select * from clientes where cidade = "São Paulo" or cidade = "Rio de Janeiro";

select * from clientes where ativo = 0 and idade < 35;

select * from clientes where ativo = 1 and cidade != "Curitiba";

select * from clientes where idade between 25 and 40 and cidade = "Recife" or cidade = "Fortaleza";

select * from clientes where cidade != "São Paulo" and idade > 30;

select * from clientes where ativo = 1 and idade < 30;

select * from clientes where ativo = 0 and cidade != "Belo Horizonte";

select * from clientes where idade not between 25 and 35 and ativo = 1;

select * from clientes where cidade = "São Paulo" and ativo = 0;