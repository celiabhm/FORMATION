create database shop;
use shop;
create table product(
id_product int primary key auto_increment,
name_product varchar(50) not null,
description_product text not null,
price_product real
)Engine=InnoDB;

create table seller(
id_product int primary key auto_increment,
name_seller varchar(50) not null, 
first_name_seller varchar(50) not null
)Engine=InnoDB;

create table category(
id_category int primary key auto_increment,
name_category varchar(50) not null
)Engine=InnoDB;

create table receipt(
id_receipt int primary key auto_increment,
date_receipt datetime not null
)Engine=InnoDB;

create table to_add(
id_product int not null,
id_receipt int not null,
qtx_add int not null,
primary key(id_product, id_receipt)
)Engine=InnoDB;

alter table product add column id_category int;

alter table product 
add constraint fk_posseder_category
foreign key(id_category)
references category (id_category);

alter table receipt add column id_seller int;
alter table seller change id_product id_seller int;

alter table receipt
add constraint fk_receipt_seller
foreign key(id_seller)
references seller(id_seller);

alter table to_add
add constraint fk_add_product
foreign key(id_product)
references product(id_product);

alter table to_add
add constraint fk_have_receipt
foreign key(id_receipt)
references receipt(id_receipt);