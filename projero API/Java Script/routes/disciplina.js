import express from 'express';
import db from '../db/conexao.js';

const router = express.Router();

// Função para validar campos obrigatórios
function validarCamposObrigatorios(campos, dados) {
    return campos.filter(campo => !dados[campo]);
}

// CREATE
router.post('/', async (req, res) => {
    const { nome_dis, carga_horaria, ementa, modulo } = req.body;

    const camposObrigatorios = ['nome_dis', 'carga_horaria', 'modulo'];
    const camposFaltando = validarCamposObrigatorios(camposObrigatorios, req.body);

    if (camposFaltando.length > 0) {
        return res.status(400).json({ erro: `Campos obrigatórios faltando: ${camposFaltando.join(', ')}` });
    }

    try {
        const [result] = await db.execute(
            'INSERT INTO disciplina (nome_dis, carga_horaria, ementa, modulo) VALUES (?, ?, ?, ?)',
            [nome_dis, carga_horaria, ementa, modulo]
        );
        res.status(201).json({ id: result.insertId, nome_dis, carga_horaria, ementa, modulo });
    } catch (err) {
        res.status(500).json({ erro: err.message });
    }
});

// READ por nome de disciplina
router.get('/nome_disciplina/:nome_dis', async (req, res) => {
    try {
        const [rows] = await db.execute(
            'SELECT * FROM disciplina WHERE nome_dis = ?', [req.params.nome_dis]);
        
        if (rows.length === 0 ){
            return res.status(404).json({ erro: 'disciplina não encontrado ' });
        }   
            console.log('Disciplina encontrada: ', rows[0]);
            return res.json(rows[0]);
        } catch (err) {
                res.status(500).json({ erro: err.message });
        }            
});

// READ por carga horaria
router.get('/carga_horaria/:carga_horaria', async (req, res) => {
    const {carga_horaria} = req.params;
    console.log('Buscando por carga horária', carga_horaria)
    try {
        const [rows] = await db.execute(
            'SELECT * FROM disciplina WHERE carga_horaria = ?', [carga_horaria]);
    
        if (rows.length === 0 ){
            res.status(404).json({ erro: 'disciplina não encontrado ' });
            return;
        }              
            console.log('Disciplina encontrada: ', rows[0]);
            return res.json(rows[0]);
        } catch (err) {
            res.status(500).json({ erro: err.message });
        }
});


// READ todos
router.get('/gettodos', async (req, res) => {
    try {
        const [rows] = await db.execute('SELECT * FROM disciplina');
        res.json(rows);
    } catch (err) {
        res.status(500).json({ erro: err.message });
    }
});

// READ por ID
router.get('/:id', async (req, res) => {
    try {
        const [rows] = await db.execute('SELECT * FROM disciplina WHERE id_discipli = ?', [req.params.id]);

        if (rows.length === 0) {
            return res.status(404).json({ erro: 'Disciplina não encontrada' });
        }

        res.json(rows[0]);
    } catch (err) {
        res.status(500).json({ erro: err.message });
    }
});

// UPDATE
router.put('/:id', async (req, res) => {
    const { nome_dis, carga_horaria, ementa, modulo } = req.body;

    const camposObrigatorios = ['nome_dis', 'carga_horaria', 'modulo'];
    const camposFaltando = validarCamposObrigatorios(camposObrigatorios, req.body);

    if (camposFaltando.length > 0) {
        return res.status(400).json({ erro: `Campos obrigatórios faltando: ${camposFaltando.join(', ')}` });
    }

    try {
        await db.execute(
            'UPDATE disciplina SET nome_dis = ?, carga_horaria = ?, ementa = ?, modulo = ? WHERE id_discipli = ?',
            [nome_dis, carga_horaria, ementa, modulo, req.params.id]
        );
        res.json({ message: 'Disciplina atualizada com sucesso' });
    } catch (err) {
        res.status(500).json({ erro: err.message });
    }
});

// DELETE
router.delete('/:id', async (req, res) => {
    try {
        await db.execute('DELETE FROM disciplina WHERE id_discipli = ?', [req.params.id]);
        res.json({ message: 'Disciplina deletada com sucesso' });
    } catch (err) {
        res.status(500).json({ erro: err.message });
    }
});

export default router;
