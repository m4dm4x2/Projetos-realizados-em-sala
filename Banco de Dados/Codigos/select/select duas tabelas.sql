select prod .*, 
intped .qtd,
intped .valor_tot_iped
from prod inner join intped on prod.id_iped=intped.id_iped;