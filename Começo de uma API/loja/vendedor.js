import express from 'express';
import db from '../db/conexao.js';
const router = express.Router();

//create
router.post('/', async (req, res) => {
    const {nome_vend, telefone_vend, CPF_vend, endereço_vend, email_vend } = req.body;
    try {
        const [result] = await db.execute(
        'INSERT INTO vendedor (nome_vend, telefone_vend, CPF_vend, endereço_vend, email_vend) VALUES (?,?,?,?, ?)',
        [ nome_vend, telefone_vend, CPF_vend, endereço_vend, email_vend ]
        );
        res.status(201).json({ id: result.insertId, nome_vend, telefone_vend, CPF_vend, endereço_vend, email_vend });
    } catch (err) {
        res.status(500).json({ erro: err.message });
    }
});

//read todos
router.get('/', async (req, res) => {
    const [rows] = await db.execute('SELECT *FROM vendedor');
    res.json(rows);
});

//read id
router.get('/:id', async (req, res) => {
     const [rows] = await db.execute('SELECT *FROM vendedor WHERE id_vend = ?', [req.params.id]);

     if (rows.length === 0 )
        return res.status(404).json({ erro: 'Vendedor não encontrado' });

     res.json(rows[0]);
});

//update
router.put('/:id', async (req, res) => {
const {nome, preco, estoque } = req.body;
try {
    await db.execute(
        'UPDATE cliente SET nome_vend = ?, telefone_vend = ?, CPF_vend = ?, endereço_vend = ?, email_vend = ? WHERE id_vend = ?',
        [nome, preco, estoque, req.params.id]
    );
    res.json({ message: 'Vendedor atualizado com sucesso'})
} catch (err) {
    res.status(500).json({erro: err.message });
}
});

//delete
router.delete('/:id', async (req, res) => {
try {
    await db.execute('DELETE FROM vendedor WHERE id_vend = ?', [req.params.id]);
    res.json({ message: 'Vendedor deletado com sucesso'})
} catch (err) {
    res.status(500).json({ erro: err.message});
}
});
export default router;