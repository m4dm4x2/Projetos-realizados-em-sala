import express from 'express';
import db from '../db/conexao.js';

const router = express.Router();

// Função para validar campos obrigatórios
function validarCamposObrigatorios(campos, dados) {
    return campos.filter(campo => !dados[campo]);
}

// CREATE
router.post('/', async (req, res) => {
    const { nome, email, telefone } = req.body;

    const camposObrigatorios = ['nome'];
    const camposFaltando = validarCamposObrigatorios(camposObrigatorios, req.body);

    if (camposFaltando.length > 0) {
        return res.status(400).json({ erro: `Campos obrigatórios faltando: ${camposFaltando.join(', ')}` });
    }

    try {
        const [result] = await db.execute(
            'INSERT INTO professor (nome, email, telefone) VALUES (?, ?, ?)',
            [nome, email, telefone]
        );
        res.status(201).json({ id: result.insertId, nome, email, telefone });
    } catch (err) {
        res.status(500).json({ erro: err.message });
    }
});

// READ todos
router.get('/gettodos/', async (req, res) => {
    try {
        const [rows] = await db.execute('SELECT * FROM professor');
        res.json(rows);
    } catch (err) {
        res.status(500).json({ erro: err.message });
    }
});

// READ por ID
router.get('/:id', async (req, res) => {
    try {
        const [rows] = await db.execute('SELECT * FROM professor WHERE id_profes = ?', [req.params.id]);

        if (rows.length === 0) {
            return res.status(404).json({ erro: 'Professor não encontrado' });
        }

        res.json(rows[0]);
    } catch (err) {
        res.status(500).json({ erro: err.message });
    }
});

// UPDATE
router.put('/:id', async (req, res) => {
    const { nome, email, telefone } = req.body;

    const camposObrigatorios = ['nome'];
    const camposFaltando = validarCamposObrigatorios(camposObrigatorios, req.body);

    if (camposFaltando.length > 0) {
        return res.status(400).json({ erro: `Campos obrigatórios faltando: ${camposFaltando.join(', ')}` });
    }

    try {
        await db.execute(
            'UPDATE professor SET nome = ?, email = ?, telefone = ? WHERE id_profes = ?',
            [nome, email, telefone, req.params.id]
        );
        res.json({ message: 'Professor atualizado com sucesso' });
    } catch (err) {
        res.status(500).json({ erro: err.message });
    }
});

// DELETE
router.delete('/:id', async (req, res) => {
    try {
        await db.execute('DELETE FROM professor WHERE id_profes = ?', [req.params.id]);
        res.json({ message: 'Professor deletado com sucesso' });
    } catch (err) {
        res.status(500).json({ erro: err.message });
    }
});

export default router;
