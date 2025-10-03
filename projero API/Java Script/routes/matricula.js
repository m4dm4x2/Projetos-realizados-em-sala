import express from 'express';
import db from '../db/conexao.js';

const router = express.Router();

// Função para validar campos obrigatórios
function validarCamposObrigatorios(campos, dados) {
    return campos.filter(campo => !dados[campo]);
}

// CREATE
router.post('/', async (req, res) => {
    const { fk_aluno, fk_turma, data_matricula, status_matricula } = req.body;

    const camposObrigatorios = ['fk_aluno', 'fk_turma', 'data_matricula', 'status_matricula'];
    const camposFaltando = validarCamposObrigatorios(camposObrigatorios, req.body);

    if (camposFaltando.length > 0) {
        return res.status(400).json({ erro: `Campos obrigatórios faltando: ${camposFaltando.join(', ')}` });
    }

    try {
        const [result] = await db.execute(
            'INSERT INTO matricula (fk_aluno, fk_turma, data_matricula, status_matricula) VALUES (?, ?, ?, ?)',
            [fk_aluno, fk_turma, data_matricula, status_matricula]
        );
        res.status(201).json({ id: result.insertId, fk_aluno, fk_turma, data_matricula, status_matricula });
    } catch (err) {
        res.status(500).json({ erro: err.message });
    }
});

// READ por aluno
router.get('/aluno_id/:fk_aluno', async (req, res) => {
    try {
        const [rows] = await db.execute(
            'SELECT * FROM matricula WHERE fk_aluno  = ?', [req.params.fk_aluno]);
    
        if (rows.length === 0 ){
            res.status(404).json({ erro: 'Matricula não encontrado ' });
            return;
        }
        res.json(rows);
    } catch(err){
        res.status(500).json({ erro: err.message });
    }   
});

// READ por turma
router.get('/turma_id/:fk_turma', async (req, res) => {
    try {
        const [rows] = await db.execute(
            'SELECT * FROM matricula WHERE fk_turma  = ?', [req.params.fk_turma]);
    
        if (rows.length === 0 )
            return res.status(404).json({ erro: 'Matricula não encontrado ' });

        res.json(rows[0]);
    } catch(err) {
        res.status(500).json({ erro: err.message });
    }  
});

// READ por data da matricula
router.get('/data_matricula/:data_matricula', async (req, res) => {
    try {
        const [rows] = await db.execute(
            'SELECT * FROM matricula WHERE data_matricula = ?', [req.params.data_matricula]);
    
        if (rows.length === 0 )
            return res.status(404).json({ erro: 'Matricula não encontrado ' });

        res.json(rows[0]);   
    } catch(err){
        res.status(500).json({ erro: err.message })
    }
});

// READ por status da matricula
router.get('/status_matricula/:status_matricula', async (req, res) => {
    try {
        const [rows] = await db.execute(
            'SELECT * FROM matricula WHERE status_matricula = ?', [req.params.status_matricula]);
    
        if (rows.length === 0 )
            return res.status(404).json({ erro: 'Matricula não encontrado ' });

        res.json(rows[0]);
    } catch(err){
        res.status(500).json({ erro: err.message })
    }
});

// READ todos
router.get('/', async (req, res) => {
    try {
        const [rows] = await db.execute('SELECT * FROM matricula');
        res.json(rows);
    } catch (err) {
        res.status(500).json({ erro: err.message });
    }
});

// READ por ID
router.get('/:id', async (req, res) => {
    try {
        const [rows] = await db.execute('SELECT * FROM matricula WHERE id_matricula = ?', [req.params.id]);

        if (rows.length === 0) {
            return res.status(404).json({ erro: 'Matrícula não encontrada' });
        }

        res.json(rows[0]);
    } catch (err) {
        res.status(500).json({ erro: err.message });
    }
});

// UPDATE
router.put('/:id', async (req, res) => {
    const { fk_aluno, fk_turma, data_matricula, status_matricula } = req.body;

    const camposObrigatorios = ['fk_aluno', 'fk_turma', 'data_matricula', 'status_matricula'];
    const camposFaltando = validarCamposObrigatorios(camposObrigatorios, req.body);

    if (camposFaltando.length > 0) {
        return res.status(400).json({ erro: `Campos obrigatórios faltando: ${camposFaltando.join(', ')}` });
    }

    try {
        await db.execute(
            'UPDATE matricula SET fk_aluno = ?, fk_turma = ?, data_matricula = ?, status_matricula = ? WHERE id_matricula = ?',
            [fk_aluno, fk_turma, data_matricula, status_matricula, req.params.id]
        );
        res.json({ message: 'Matrícula atualizada com sucesso' });
    } catch (err) {
        res.status(500).json({ erro: err.message });
    }
});

// DELETE
router.delete('/:id', async (req, res) => {
    try {
        await db.execute('DELETE FROM matricula WHERE id_matricula = ?', [req.params.id]);
        res.json({ message: 'Matrícula deletada com sucesso' });
    } catch (err) {
        res.status(500).json({ erro: err.message });
    }
});

export default router;
