create table diciplinas (
id_dis int primary key,
materia varchar(45),
horas_dis numeric(3,2)
);
select * from diciplinas;
alter table diciplinas modify column horas_dis float;
truncate table diciplinas;