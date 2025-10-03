create table notas(
id_nota int primary key,
nota float,
a_dis int, 
foreign key (a_dis) references A_dis (id_A_dis)
);
select*from  notas;
drop table notas;