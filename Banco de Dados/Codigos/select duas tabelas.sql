select prod.*, 
intped.qtd,
intped.valor_tot_iped
from prod inner join intped on intped.id_iped = prod.id_prod;