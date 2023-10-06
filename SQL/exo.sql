create database chocoblast;
use chocoblast;

CREATE TABLE users (
    id_users INT PRIMARY KEY AUTO_INCREMENT,
    name_users VARCHAR(50),
    first_name_users VARCHAR(50),
    email_users VARCHAR(50),
    password_users VARCHAR(100),
    image_users VARCHAR(100),
    statut_users TINYINT
	)ENGINE=INNODB;
    
create table chocoblast(
id_chocoblast int primary key auto_increment, 
slogan_chocoblast text not null, 
date_creation_chocoblast date not null, 
status_chocoblast tinyint
)Engine=InnoDB;

create table roles(
id_role int primary key auto_increment, 
name_role varchar(50)
)Engine=InnoDB;

create table comments(
id_comments int primary key auto_increment, 
note_comments int not null,
contenu_comments text,
date_creation datetime not null,
statut_comments tinyint
)Engine=InnoDB;

alter table users add column id_roles int;
alter table chocoblast add column cible int;
alter table chocoblast add column auteur int;
alter table comments add column id_chochoblast int;
alter table comments add column auteur int; 
 
 
alter table comments change id_chochoblast id_chocoblast int;

alter table comments
add constraint fk_possede_chocoblast
foreign key(id_chocoblast)
references chocoblast(id_chocoblast);

alter table roles change id_role id_roles int;

alter table users
add constraint fk_possede_roles
foreign key(id_roles)
references roles (id_roles);






