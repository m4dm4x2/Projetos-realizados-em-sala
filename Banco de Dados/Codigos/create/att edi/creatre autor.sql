create table autor(
id_auto int primary key, 
nome_auto varchar(45),
cpf_autor numeric,
telefone numeric,
ende_au varchar(45),
edit int,

foreign key (edit) references edi (id_edi)
);
drop table autor;
alter table autor modify column telefone numeric(11);
alter table autor modify column cpf_autor numeric(11);