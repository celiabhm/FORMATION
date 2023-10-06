create database videaste;
use videaste;

create table utilisateur(
id_utilisateur int primary key auto_increment not null,
nom_utilisateur varchar(50) not null, 
prenom_utilisateur varchar(50) not null, 
email_utilisateur varchar(50)not null, 
mot_de_passe_utilisateur varchar(100) not null,
statut_utilisateur bool not null
)Engine=InnoDB;

create table roles(
id_roles int primary key auto_increment not null,
nom_roles varchar(50) not null
)Engine=InnoDB;

create table message(
id_message int primary key auto_increment not null,
contenu_message varchar(255) not null,
date_message datetime not null,
statut_message bool not null
)Engine=InnoDB;

create table commentaire(
id_commentaire int primary key auto_increment not null,
contenu_commentaire varchar(255) not null,
date_commentaire datetime not null,
statut_commentaire bool not null
)Engine=InnoDB;

create table groupe(
id_groupe int primary key auto_increment not null,
nom_groupe varchar(50) not null
)Engine=InnoDB;

create table categorie(
id_categorie int primary key auto_increment not null,
nom_categorie varchar(50) not null
)Engine=InnoDB;

create table article(
id_article int primary key auto_increment not null,
titre_article varchar(50) not null,
date_article datetime not null,
statut_article bool not null,
contenu_article text not null
)Engine=InnoDB;

create table media(
id_media int primary key auto_increment not null,
url_media varchar(100) not null,
nom_media varchar(50) not null
)Engine=InnoDB;

alter table utilisateur
add id_role_utilisateur int not null;

alter table article
add id_categorie int not null;

alter table article 
add id_utilisateur int not null;

alter table commentaire 
add id_article int not null;

alter table commentaire 
add id_utilisateur int not null;

alter table utilisateur 
add id_roles int not null;

alter table utilisateur 
add constraint fk_avoir_roles
foreign key(id_roles)
references roles (id_roles);

alter table article 
add constraint fk_rediger_utilisateur
foreign key(id_utilisateur)
references utilisateur (id_utilisateur);

alter table commentaire 
add constraint fk_poster_utilisateur
foreign key (id_utilisateur)
references utilisateur (id_utilisateur);

alter table commentaire 
add constraint fk_completer_article
foreign key(id_article)
references article (id_article);

create table completer(
id_article int,
id_commentaire int,
primary key(id_article, id_commentaire)
)Engine=InnoDB;

create table appartenir(
id_groupe int, 
id_utilisateur int,
primary key(id_groupe, id_utilisateur)
)Engine=InnoDB;

create table abonner(
id_utilisateur int,
id_utilisateur_1 int,
primary key(id_utilisateur,id_utilisateur_1)
)Engine=InnoDB;

alter table article
add constraint fk_categoriser_categorie
foreign key(id_categorie)
references categorie(id_categorie);

alter table appartenir
add constraint fk_appartenir_groupe
foreign key(id_groupe)
references groupe(id_groupe);

create table illustrer(
id_article int not null,
id_media int not null,
primary key(id_article, id_media)
)Engine=InnoDB;

create table envoyer(
destinataire int not null,
expediteur int not null,
id_message int not null,
primary key(destinataire,expediteur,id_message)
)Engine=InnoDB;

alter table illustrer
add constraint fk_illustrer_article
foreign key(id_article)
references article(id_article);

alter table illustrer
add constraint fk_illustrer_media
foreign key(id_media)
references media(id_media);

alter table envoyer
add constraint fk_envoyer_destinataire
foreign key(destinataire)
references utilisateur(id_utilisateur);

alter table envoyer
add constraint fk_envoyer_expediteur
foreign key(expediteur)
references utilisateur(id_utilisateur);

alter table envoyer
add constraint fk_envoyer_message
foreign key(id_message)
references message(id_message);

insert into roles (nom_roles) values
('utilisateur'),
('artiste'),
('admin');

insert into groupe (nom_groupe) values 
('peinture'),
('video'),
('dessin');

insert into categorie (nom_categorie) values 
('new'), 
('actualite'), 
('oeuvre');

insert into utilisateur (nom_utilisateur, prenom_utilisateur,email_utilisateur,mot_de_passe_utilisateur, statut_utilisateur, id_roles) values
('brahmi','celia','celia31150@hotmail.com','celia31150',1,3),
('durant','philippe','phil.31@gmail.com','philippe.durant',0,2),
('castel','stephanie','stephanie.castel@live.fr','stephanie.steph',1,1),
('loge','lucas','lucas@hotmail.fr','luc.loge',1,1);

alter table utilisateur 
drop id_roles;























