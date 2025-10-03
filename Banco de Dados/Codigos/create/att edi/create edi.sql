create table edi(
id_edi int primary key,
nome varchar(45),
ende_edi varchar(45),
email_edi varchar(45),
telefone numeric
);
drop table edi;
alter table edi modify column telefone int(12);