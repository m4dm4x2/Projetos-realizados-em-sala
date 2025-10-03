create table intped(
id_iped int primary key,
qtd int,
valor_tot_iped numeric,
fk_produto int,
fk_pedido int,

foreign key (fk_produto) references prod (id_prod),
foreign key (fk_produto) references ped (id_ped)
);

drop table intped;