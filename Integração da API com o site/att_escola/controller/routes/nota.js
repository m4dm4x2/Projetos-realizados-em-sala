import express from 'express';
import db from '../db/conexao.js';

const router = express.Router();

// Função para validar campos obrigatórios
function validarCamposObrigatorios(campos, dados) {
    return campos.filter(campo => !dados[campo]);
}

// CREATE
router.post('/', async (req, res) => {
    const { fk_matricula, tipo_prova, data_prova, valor_nota } = req.body;

    const camposObrigatorios = ['fk_matricula', 'tipo_prova', 'data_prova', 'valor_nota'];
    const camposFaltando = validarCamposObrigatorios(camposObrigatorios, req.body);

    if (camposFaltando.length > 0) {
        return res.status(400).json({
            erro: `Campos obrigatórios faltando: ${camposFaltando.join(', ')}`
        });
    }

    try {
        const [result] = await db.execute(
            'INSERT INTO notas (fk_matricula, tipo_prova, data_prova, valor_nota) VALUES (?, ?, ?, ?)',
            [fk_matricula, tipo_prova, data_prova, valor_nota]
        );
        res.status(201).json({ id: result.insertId, fk_matricula, tipo_prova, data_prova, valor_nota });
    } catch (err) {
        res.status(500).json({ erro: err.message });
    }
});

// READ todos
router.get('/gettodos', async (req, res) => {
    try {
        const [rows] = await db.execute('SELECT * FROM notas');
        res.json(rows);
    } catch (err) {
        res.status(500).json({ erro: err.message });
    }
});

// READ por tipo avaliacao
router.get('/tipo_avaliacao/:tipo_prova', async (req, res) => {
    try{
        const [rows] = await db.execute(
            'SELECT * FROM notas WHERE tipo_prova = ?', [req.params.tipo_prova]);
    
        if (rows.length === 0 )
            return res.status(404).json({ erro: 'nota não encontrado ' });

        res.json(rows[0]);
    } catch(err){
        res.status(500).json({erro: err.message});
    } 
});

// READ por data avaliacao
router.get('/data_avaliacao/:data_prova', async (req, res) => {
    try{
        const [rows] = await db.execute(
            'SELECT * FROM notas WHERE data_prova = ?', [req.params.data_prova]);
    
        if (rows.length === 0 )
            return res.status(404).json({ erro: 'nota não encontrado ' });

    res.json(rows[0]);
    } catch(err) {
        res.status(500).json({erro: err.message});
    }   
});

// READ por data avaliacao
router.get('/fk_matricula/:fk_matricula', async (req, res) => {
    try{
        const [rows] = await db.execute(
            'SELECT * FROM notas WHERE fk_matricula = ?', [req.params.data_prova]);
    
        if (rows.length === 0 )
            return res.status(404).json({ erro: 'nota não encontrado ' });

    res.json(rows[0]);
    } catch(err) {
        res.status(500).json({erro: err.message});
    }   
});


// READ por aluno
router.get('/matricula_id/aluno/:id_aluno', async (req, res) => {
    try{
        const [rows] = await db.execute(
            'SELECT notas.*, fk_matricula FROM notas INNER JOIN matricula ON notas.fk_matricula = matricula.fk_matricula WHERE matricula.id_aluno = ?', [req.params.fk_matricula]);
    
        if (rows.length === 0 )
            return res.status(404).json({ erro: 'nota não encontrado ' });

        res.json(rows);
    } catch(err) {
        res.status(500).json({erro: err.message});
    }    
});


// READ por ID
router.get('/:id', async (req, res) => {
    try {
        const [rows] = await db.execute('SELECT * FROM notas WHERE id_notas = ?', [req.params.id]);

        if (rows.length === 0) {
            return res.status(404).json({ erro: 'Nota não encontrada' });
        }

        res.json(rows[0]);
    } catch (err) {
        res.status(500).json({ erro: err.message });
    }
});

// UPDATE
router.put('/:id', async (req, res) => {
    const { fk_matricula, tipo_prova, data_prova, valor_nota } = req.body;

    const camposObrigatorios = ['fk_matricula', 'tipo_prova', 'data_prova', 'valor_nota'];
    const camposFaltando = validarCamposObrigatorios(camposObrigatorios, req.body);

    if (camposFaltando.length > 0) {
        return res.status(400).json({
            erro: `Campos obrigatórios faltando: ${camposFaltando.join(', ')}`
        });
    }

    try {
        await db.execute(
            'UPDATE notas SET fk_matricula = ?, tipo_prova = ?, data_prova = ?, valor_nota = ? WHERE id_notas = ?',
            [fk_matricula, tipo_prova, data_prova, valor_nota, req.params.id]
        );
        res.json({ message: 'Nota atualizada com sucesso' });
    } catch (err) {
        res.status(500).json({ erro: err.message });
    }
});

// DELETE
router.delete('/:id', async (req, res) => {
    try {
        await db.execute('DELETE FROM notas WHERE id_notas = ?', [req.params.id]);
        res.json({ message: 'Nota deletada com sucesso' });
    } catch (err) {
        res.status(500).json({ erro: err.message });
    }
});

export default router;
