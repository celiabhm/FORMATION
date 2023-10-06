create database tp_bonus;
use tp_bonus;

create table produit(
id int primary key auto_increment not null,
nom_produit varchar(50) not null,
description_produit text not null,
url_produit varchar(50) not null,
tarif_produit float not null, 
nombre_stock_produit int unsigned not null,
id_categorie int not null,
id_marque int not null
)Engine=InnoDB;

create table roles(
id int primary key auto_increment not null,
nom_roles varchar(50) not null
)Engine=InnoDB;

create table employe(
id int primary key auto_increment not null,
nom_employe varchar(50) not null,
prenom_employe varchar(50) not null,
id_roles int not null
)Engine=InnoDB;

create table marque(
id int primary key auto_increment not null,
nom_marque varchar(50) not null
)Engine=InnoDB;

create table categorie(
id int primary key auto_increment not null,
nom_categorie varchar(50) not null
)Engine=InnoDB;

create table ticket(
id int primary key auto_increment not null,
date_ticket datetime not null,
id_employe int not null
)Engine=InnoDB;

create table ajouter(
id_produit int not null,
id_ticket int not null
)Engine=InnoDB;

INSERT INTO categorie(nom_categorie) values
('Alimentaire'),('Entretien'),('Boisson');

INSERT INTO marque (nom_marque) values
('Panzani'),('Ariel'),('Legal'),('Brossard'),('Marche'),('Mr Propre'),('Milka'),('Président'),('Bonne Maman'),('Evian'),('Elle & Vire'),('Coca Cola'),('Lactel'),('Francine'),('Soplin');

INSERT INTO roles (nom_roles) values
('Gérant'),('Vendeur'),('Livreur');

INSERT INTO employe(nom_employe, prenom_employe,id_roles) values
('Lambert','Capucine',1),
('Margaux','Jean',2),
('Dupond','Mathys',2),
('Boyer','Edouard',3),
('Picard','Iris',2),
('Payet','Raphaelle',2),
('Nguyen','Mathieu',3),
('Bourhis','Julie',2);

INSERT INTO produit (nom_produit,description_produit,url_produit,tarif_produit,nombre_stock_produit,id_categorie,id_marque)values
('Pates Penne','Paquet de 500gr de pâtes, penne','./img/penne.png',1.80,25,1,1),
('Lessive liquide','Lessive de 30 lavages','./img/lessive.png',9.60,10,2,2),
('Paquet café', 'Paquet de 36 dosettes Senseo','./img/cafe.png',4.20,30,3,1),
('Pain','Baguette de pain de 250gr','./img/pain.png',1.10,20,4,1),
('Tomate','Tomate en barquette de 500gr','./img/tomate.png',2.60,5,18,1),
('Eau de javel','Eau de javel en bouteille de 1L','./img/javel.png',1.80,6,2),
('Chocolat','Tablette de chocolat au lait','./img/chocolat.png',0.80,50,7,1),
('Camembert','Camembert de 250gr','./img/fromage.png',2.10,29,8,1),
('Madelaine','Madelaine individuel en sachet x12','./img/gateau.png',2.89,32,9,1),
('Bouteille eau','Pack de bouteille eau 1.5Litres','./img/eau.png',2.69,49,10,3),
('Beurre','Plaquette de beurre doux de 250gr','./img/beurre.png',3.19,19,11,1),
('Soda Cola','Bouteille de soda 1.5Litres','./img/coca.png',1.23,35,12,3),
('Lait','Pack de 6 bouteilles de lait de 1L','./img/lait.png',6.48,20,13,3),
('Farine','Farine en sac de 1kg','.img/farine.png',1.49,16,14,1),
('Essuie Tout','Essuie Tout 3 rouleaux','./img/sopalin.png',3.24,22,15,3);

INSERT INTO ticket (date_ticket,nom_vendeur,prenom_vendeur)values
('2023-01-22','Margaux','Jean'),
('2023-01-24','Dupond','Mathys'),
('2023-01-28','Picard','Iris'),
('2023-02-05','Dupond','Mathys'),
('2023-02-07','Margaux','Jean'),
('2023-02-08','Picard','Iris'),
('2023-02-09','Payet','Raphaelle'),
('2023-03-03','Margaux','Jean'),
('2023-03-04','Payet','Raphaelle'),
('2023-03-05','Bourhis','Julie'),
('2023-04-09','Margaux','Jean'),
('2023-04-10','Margaux','Jean'),
('2023-05-06','Bourhis','Julie'),
('2023-05-07','Bourhis','Julie'),
('2023-05-08','Dupont','Mathys'),
('2023-06-02','Picard','Iris'),
('2023-06-07','Bourhis','Julie'),
('2023-06-08','Dupond','Mathys'),
('2023-06-11','Payet','Raphaelle'),
('2023-06-14','Bourhis','Julie');