create table obra(
id_obra int primary key,
nome_obra varchar(45),
qtd_pag int,
formato varchar(45),
gen int,

foreign key (gen) references genero (id_ge)
);
drop table obra;
alter table obra add column gen int;
alter table obra add foreign key (gen) references genero (id_ge);