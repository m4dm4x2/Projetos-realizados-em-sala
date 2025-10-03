select diciplinas.*, 
A_dis.aluno,
A_dis.disci
from diciplinas inner join A_dis on diciplinas.id_dis = A_dis.id_A_dis;