DROP DATABASE IF EXISTS CsMicroBD;
CREATE DATABASE CsMicroBD;
USE CsMicroBD;

create table TipoProduto (
id_tipo integer not null primary key auto_increment,
desc_tipo varchar(100) not null);

create table Modelo (
id_modelo integer not null primary key auto_increment,
desc_modelo varchar(100));

create table Marca (
id_marca integer not null primary key auto_increment,
desc_marca varchar(100),
logo_marca varchar(100),
url_marca varchar(100));

create table Produto (
id_produto integer not null primary key auto_increment,
desc_produto varchar(100),
id_cliente integer,
id_tipo integer,
id_marca integer,
id_modelo integer,
nr_serie varchar(50),
capacidade integer,
problema varchar(1000),
dt_cadastro datetime);

create table Servico (
id_servico integer not null primary key auto_increment,
titulo varchar(100),
desc_servico varchar(500),
img varchar(100),
ordem_apresentacao integer, -- se ordem_apresentacao = 0 o serviço não será apresentado
url varchar(100),
ativo boolean);