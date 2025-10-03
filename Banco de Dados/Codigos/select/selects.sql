select * from cli order by id_cli;
select * from cli order by id_cli desc;
select nome from cli where  nome like 'max';
select nome from cli where upper(nome) like 'MAX';
update cli set nome = 'bistecone' where id_cli = 1; 
