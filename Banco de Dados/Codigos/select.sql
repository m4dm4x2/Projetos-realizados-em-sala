select * from cli order by id_cli;
select * from cli order by id_cli desc;
select nome from cli where  nome like 'max';
select nome from cli where upper(nome) like 'MAX';
update cli set nome = 'bistecone' where id_cli = 1; 
alter table prod modify column valor_prod float;
alter table ped modify column valor_ped float;
alter table intped modify column valor_tot_iped float;
select * from cli;
select * from ped;
select * from prod;
select * from intped;prod