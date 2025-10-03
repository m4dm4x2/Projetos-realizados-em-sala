create table ped(
id_ped int primary key,
cod_ped int,
data_ped date,
valor_ped numeric,
fk_cliente int,

foreign key (fk_cliente) references cli (id_cli)
);prod