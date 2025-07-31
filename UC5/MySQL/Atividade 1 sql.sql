create database BibliotecaComunitaria;

use BibliotecaComunitaria;

create table livros(
	id int primary key AUTO_INCREMENT,
    titulo varchar(50),
    autor varchar(50),
    ano_publicacao year
);

create table leitores(
	id int primary key auto_increment,
    nome varchar(50),
    email varchar(70),
    data_cadastro date
);

insert into livros
(titulo, autor, ano_publicacao)
values
('A Arte da Guerra', 'Sun Tzu', 2000),
('O Pequeno Príncipe', 'Antoine de Saint-Exupéry', 1943),
('O Gênio do Crime', 'João Carlos Marinho', 1969);

insert into leitores
(nome, email, data_cadastro)
values
("Cleber", "cleber@gmail.com", "2025-07-22"),
("Mariana", "mariana@gmail.com", "2022-01-01"),
("Jão", "jao@gmail.com", "2020-12-12");

select * from livros;
select * from leitores;