create table ordem (
id_ord int primary key auto_increment,
dataentrada date,
dataentrega date,
valor float,
obs varchar(100),
quem int,

foreign key (quem) references cliente (id_cli)
);

select cliente.*, 
ordem.id_ord,
ordem.obs
from cliente inner join ordem on ordem.id_ord = cliente.id_cli;