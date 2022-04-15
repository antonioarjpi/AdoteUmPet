create table pets (id int8 generated by default as identity, adotado boolean not null, imagem1 varchar(255), imagem2 varchar(255), imagem3 varchar(255), local varchar(120), nome varchar(120) not null, peso float8, raca varchar(120), tipo varchar(120), usuario_id int8, primary key (id));
create table usuario (id int8 generated by default as identity, email varchar(120) not null, local varchar(120) not null, nome varchar(120) not null, primary key (id));
alter table if exists pets add constraint FK6qg05r6gf7a9skp0rky079hra foreign key (usuario_id) references usuario;