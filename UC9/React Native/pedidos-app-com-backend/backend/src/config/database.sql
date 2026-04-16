create database pedidos_db;

use pedidos_db;

create table pedidos (
	id int auto_increment primary key,
    cliente varchar(100) not null,
    produto varchar(100) not null,
    quantidade int not null,
    valor decimal(10,2) not null
);

select * from pedidos;