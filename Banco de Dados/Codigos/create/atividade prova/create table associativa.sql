create table A_dis (
id_A_dis int primary key,
aluno int,
disci int,

foreign key (aluno) references aluno (id_au),
foreign key (disci) references diciplinas (id_dis)
);

select*from A_dis;
drop table A_dis;