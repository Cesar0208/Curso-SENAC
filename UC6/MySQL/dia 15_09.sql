create database comercial;

use comercial;

create table comclien(
	n_numeclien int not null auto_increment primary key,
    c_codiclien varchar(10),
    c_nomeclien varchar(100),
    c_razaclien varchar(100),
    d_dataclien date,
    c_cnpjclien varchar(20),
    c_foneclien varchar(20)
);

create table comforne(
	n_numeroforne int not null auto_increment primary key,
    c_codiforne varchar(10),
    c_nomeforne varchar(100),
    c_razaforne varchar(100),
    c_foneforne varchar(20)
);

create table comvende(
	n_numevende int not null auto_increment primary key,
    c_codivende varchar(10),
    c_nomevende varchar(100),
    c_razavende varchar(100),
    c_fonevende varchar(20),
    n_porcvende decimal(10,2)
);

create table comprodu(
	n_numeprodu int not null auto_increment primary key,
    c_codiprodu varchar(20),
    c_descprodu varchar(100),
    n_valoprodu decimal(10,2),
    c_situprodu varchar(1),
    n_numeforne int
);

create table comvendas(
	n_numevenda int not null auto_increment primary key,
    c_codivenda varchar(10),
    n_numeclien varchar(10),
    n_numeforne int not null,
    n_numevende int not null,
    n_valovenda decimal(10,2),
    n_descvenda decimal(10,2),
    n_totalvenda decimal(10,2),
    d_datavenda date
);

create table comivenda(
	n_numeivenda int not null auto_increment primary key,
    n_numevenda int not null,
    n_numeprodu int not null,
    n_valoivenda decimal(10,2),
    n_qtdeivenda int,
    n_descivenda decimal(10,2)
);

alter table comvenda
alter table comvenda add constraint fk_comprodu_comvende
foreign key(n_numevende) references comvende(n_numevende)
on delete no action
on update no action;