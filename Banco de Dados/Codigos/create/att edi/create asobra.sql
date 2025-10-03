create table asobra(
id_asobra int primary key, 
auto int, 
ob int,

foreign key (ob) references obra (id_obra),
foreign key (auto) references autor (id_auto)
);
drop table asobra;