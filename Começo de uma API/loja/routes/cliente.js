import express from 'express';
import db from '../db/conexao.js';
const router = express.Router();

//create
router.post('/', async (req, res) => {
    const {nome_cli, telefone_cli, CPF_cli, endereço_cli, email_cli } = req.body;
    try {
        const [result] = await db.execute(
        'INSERT INTO cliente (nome_cli, telefone_cli, CPF_cli, endereço_cli, email_cli) VALUES (?,?,?,?, ?)',
        [ nome_cli, telefone_cli, CPF_cli, endereço_cli, email_cli ]
        );
        res.status(201).json({ id: result.insertId, nome_cli, telefone_cli, CPF_cli, endereço_cli, email_cli });
    } catch (err) {
        res.status(500).json({ erro: err.message });
    }
});

//read todos
router.get('/', async (req, res) => {
    const [rows] = await db.execute('SELECT *FROM cliente');
    res.json(rows);
});

//read id
router.get('/:id', async (req, res) => {
     const [rows] = await db.execute('SELECT *FROM cliente WHERE id_cli = ?', [req.params.id]);

     if (rows.length === 0 )
        return res.status(404).json({ erro: 'Cliente não encontrado' });

     res.json(rows[0]);
});

//update
router.put('/:id', async (req, res) => {
const {nome, preco, estoque } = req.body;
try {
    await db.execute(
        'UPDATE cliente SET nome_cli = ?, telefone_cli = ?, CPF_cli = ?, endereço_cli = ?, email_cli = ? WHERE id_cli = ?',
        [nome, preco, estoque, req.params.id]
    );
    res.json({ message: 'cliente atualizado com sucesso'})
} catch (err) {
    res.status(500).json({erro: err.message });
}
});

//delete
router.delete('/:id', async (req, res) => {
try {
    await db.execute('DELETE FROM cliente WHERE id_cli = ?', [req.params.id]);
    res.json({ message: 'cliente deletado com sucesso'})
} catch (err) {
    res.status(500).json({ erro: err.message});
}
});
export default router;