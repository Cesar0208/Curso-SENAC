create database restricoes;

use restricoes;

create table pessoas(
	id int not null primary key auto_increment,
	nome varchar(50) not null,
    genero enum('M', 'F'),
    peso decimal(5,2),
    altura decimal(3,2),
    nacionalidade varchar(25) default ('Brasileiro')
);

insert into pessoas
(nome, genero, peso, altura, nacionalidade)
values 
("Clebin", "M", 67.50, 1.70, "Alemão"),
("Maria", "F", 55.90, 1.65, "Britanica");

insert into pessoas
(nome, genero, peso, altura)
values 
("Ricardo", "M", 88.40, 1.90);

drop table pessoas;

select * from pessoas;

alter table pessoas
add column telefone varchar(14);

alter table pessoas
drop column telefone;

alter table pessoas
add column telefone varchar(14) first;

alter table pessoas
modify column telefone int;

alter table pessoas
change column telefone Tel int;

alter table usuarios 
rename to pessoas;

select nome,nacionalidade from pessoas where id = 2;