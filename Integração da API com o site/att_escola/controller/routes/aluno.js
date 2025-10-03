import express from 'express';
import db from '../db/conexao.js';

const router = express.Router();

// Função para validar campos obrigatórios
function validarCamposObrigatorios(campos, dados) {
    return campos.filter(campo => !dados[campo]);
}

// CREATE
router.post('/', async (req, res) => {
    const { nome, data_nascimento, email, telefone, endereco } = req.body;

    const camposObrigatorios = ['nome'];
    const camposFaltando = validarCamposObrigatorios(camposObrigatorios, req.body);

    if (camposFaltando.length > 0) {
        return res.status(400).json({ erro: `Campos obrigatórios faltando: ${camposFaltando.join(', ')}` });
    }

    try {
        const [result] = await db.execute(
            'INSERT INTO aluno (nome, data_nascimento, email, telefone, endereco) VALUES (?, ?, ?, ?, ?)',
            [nome, data_nascimento, email, telefone, endereco]
        );
        res.status(201).json({ id: result.insertId, nome, data_nascimento, email, telefone, endereco });
    } catch (err) {
        res.status(500).json({ erro: err.message });
    }
});

//busca geral
router.get('/buscageral/:nome', async (req, res) => {
    const nome = `%${req.params.nome}%`;
    const sql = 'SELECT nome, email FROM aluno WHERE nome LIKE ?';
    await db.execute(sql, [nome], (err, results) => {
        if (err) res.status(500).json({ error: err });
        else res.json(results);
    });

    try {
        const [result] = await db.execute(
            'SELECT nome, email FROM aluno WHERE nome LIKE ?',
            [nome]
        );
        res.json(result);
    } catch (err) {
        res.status(500).json({ erro: err.message });
    }
});

//id
router.get('/id/:id', async (req, res) => {
    const {id} = req.params;
    console.log('Buscando por ID: ', id);
    try {
        const [rows] = await db.execute(
            'SELECT nome, email FROM aluno WHERE id_aluno = ?', [id]);
        res.json(rows);
    } catch (err) {
        res.status(500).json({ erro: err.message });
    }   
});

// READ todos
router.get('/gettodos/', async (req, res) => {
    try {
        const [rows] = await db.execute('SELECT * FROM aluno');
        res.json(rows);
    } catch (err) {
        res.status(500).json({ erro: err.message });
    }
});

// READ por ID
router.get('/:id', async (req, res) => {
    try {
        const [rows] = await db.execute('SELECT * FROM aluno WHERE id_aluno = ?', [req.params.id]);

        if (rows.length === 0) {
            return res.status(404).json({ erro: 'Aluno não encontrado' });
        }

        res.json(rows[0]);
    } catch (err) {
        res.status(500).json({ erro: err.message });
    }
});

// UPDATE
router.put('/:id', async (req, res) => {
    const { nome, data_nascimento, email, telefone, endereco } = req.body;

    const camposObrigatorios = ['nome'];
    const camposFaltando = validarCamposObrigatorios(camposObrigatorios, req.body);

    if (camposFaltando.length > 0) {
        return res.status(400).json({ erro: `Campos obrigatórios faltando: ${camposFaltando.join(', ')}` });
    }

    try {
        await db.execute(
            'UPDATE aluno SET nome = ?, data_nascimento = ?, email = ?, telefone = ?, endereco = ? WHERE id_aluno = ?',
            [nome, data_nascimento, email, telefone, endereco, req.params.id]
        );
        res.json({ message: 'Aluno atualizado com sucesso' });
    } catch (err) {
        res.status(500).json({ erro: err.message });
    }
});

// DELETE
router.delete('/:id', async (req, res) => {
    try {
        await db.execute('DELETE FROM aluno WHERE id_aluno = ?', [req.params.id]);
        res.json({ message: 'Aluno deletado com sucesso' });
    } catch (err) {
        res.status(500).json({ erro: err.message });
    }
});

export default router;
