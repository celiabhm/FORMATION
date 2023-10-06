create database test;
CREATE DATABASE test;
create database test_lundi;
create user 'celia'@'localhost' identified by 'celia31150';
grant all privileges on *.* to'celia'@'localhost';
flush privileges;
create table users(
id int primary key not null auto_increment,
name varchar(100),
email varchar(255) not null, 
birthday date);
insert into users (name,email,birthday)
values ('anais','anais@hotmail.com','2002-09-28');
insert into users (name,email,birthday)
values ('kylian','kylian@hotmail.com','2000-07-16');
create index testindex on users (name);
create database shop_db;
create user 'admin'@'localhost' identified by 'mdpadmin31';
grant all privileges on *.* to'admin'@'localhost';
create user 'developer'@'localhost' identified by 'passdeveloper';
grant alter,create,drop,index,update on *.* to 'developer'@'localhost';
create table Customer(
id int primary key auto_increment,
username varchar(16) not null, 
email varchar(255) not null unique, 
password varchar(32) not null,
create_time timestamp
);
create table Address(
id int primary key auto_increment,
road_number int, 
road_name varchar(100) not null,
zip_code char(5) not null,
city_name varchar(100) not null, 
country_name varchar(100) not null
);
create table Order(
id int primary key auto_increment, 
ref varchar(45) unique not null,
date date not null, 
shipping_cost decimal(6.2) default 0.00, 
total_amount decimal(6.2) default 0.00
);
drop table Orders;
 create table `Order`(
 id int primary key auto_increment, 
ref varchar(45) unique not null,
date date not null, 
shipping_cost decimal(6.2) default 0.00, 
total_amount decimal(6.2) default 0.00
);
create table Product(
ref char(20) primary key, 
name varchar(100) not null, 
price decimal(6.2) not null, 
description longtext, 
stock int default 0
);
create table Order_product(
ref_product char(20), 
id_order int,
foreign key(ref_product) references Product(ref) on delete cascade, 
foreign key(id_order) references `Order`(id) on delete cascade, 
quantity int default 0
);
alter table Address 
drop column zip_code;
alter table Address 
drop column country_name;
alter table Address
drop column city_name;
create table City(
id int primary key auto_increment, 
zip_code char(5) not null,
city_name varchar(100) not null
);
create table Country(
id int primary key auto_increment, 
country_name varchar(100) not null
);


 



