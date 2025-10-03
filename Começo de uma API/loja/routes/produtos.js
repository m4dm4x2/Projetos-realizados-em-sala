import express from 'express';
import db from '../db/conexao.js';
const router = express.Router();

//create
router.post('/', async (req, res) => {
    const {nome, preco, estoque } = req.body;
    try {
        const [result] = await db.execute(
        'INSERT INTO produtos (nome, preco, estoque) VALUES (?,?, ?)',
        [nome, preco, estoque]
        );
        res.status(201).json({ id: result.insertId, nome, preco, estoque });
    } catch (err) {
        res.status(500).json({ erro: err.message });
    }
});

//read por id
router.get('/', async (req, res) => {
    const [rows] = await db.execute('SELECT *FROM produtos');
    res.json(rows);
});

//read todos
router.get('/:id', async (req, res) => {
     const [rows] = await db.execute('SELECT * FROM produtos WHERE id_prod = ?', [req.params.id]);

     if (rows.length === 0 )
        return res.status(404).json({ erro: 'Produto não encontrado' });

     res.json(rows[0]);
});

//update
router.put('/:id', async (req, res) => {
const {nome, preco, estoque } = req.body;
try {
    await db.execute(
        'UPDATE produtos SET nome = ?, preco = ?, estoque = ? WHERE id_prod = ?',
        [nome, preco, estoque, req.params.id]
    );
    res.json({ message: 'produto atualizado com sucesso'})
} catch (err) {
    res.status(500).json({erro: err.message });
}
});

//delete
router.delete('/:id', async (req, res) => {
try {
    await db.execute('DELETE FROM produtos WHERE id_prod = ?', [req.params.id]);
    res.json({ message: 'produto deletado com sucesso'})
} catch (err) {
    res.status(500).json({ erro: err.message});
}
});
export default router;