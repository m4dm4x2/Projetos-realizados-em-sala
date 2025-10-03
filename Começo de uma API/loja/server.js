import express from 'express';
import produtosRouter from './routes/produtos.js';
import clienteRouter from './routes/cliente.js';


const app = express();
app.use(express.json());
app.use('/produtos', produtosRouter);
app.use('/cliente', clienteRouter);
app.listen(3000, () => {
    console.log('servidor rodandona porta 3000');
})