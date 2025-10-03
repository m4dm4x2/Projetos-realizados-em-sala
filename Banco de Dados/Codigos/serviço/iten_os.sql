create table itens_os (
id_itenos int primary key auto_increment,
nome_itenos varchar(45),
tipo_itenos varchar(45),
valor_itenos float,
ordem int,
os int,

foreign key (ordem) references ordem (id_ord),
foreign key (os) references serviço (id_serve)
);
select * from itens_os;