import express from 'express';
import db from '../db/conexao.js';

const router = express.Router();

// Função para validar campos obrigatórios
function validarCamposObrigatorios(campos, dados) {
    return campos.filter(campo => !dados[campo]);
}

// CREATE
router.post('/', async (req, res) => {
    const { fk_profe, modulo, ano_semestre, turno, sala, status_turma } = req.body;

    const camposObrigatorios = ['fk_profe', 'modulo', 'ano_semestre', 'turno', 'sala', 'status_turma'];
    const camposFaltando = validarCamposObrigatorios(camposObrigatorios, req.body);

    if (camposFaltando.length > 0) {
        return res.status(400).json({ erro: `Campos obrigatórios faltando: ${camposFaltando.join(', ')}` });
    }

    try {
        const [result] = await db.execute(
            'INSERT INTO turma (fk_profe, modulo, ano_semestre, turno, sala, status_turma) VALUES (?, ?, ?, ?, ?, ?)',
            [fk_profe, modulo, ano_semestre, turno, sala, status_turma]
        );
        res.status(201).json({ id: result.insertId, fk_profe, modulo, ano_semestre, turno, sala, status_turma });
    } catch (err) {
        res.status(500).json({ erro: err.message });
    }
});

// READ por professor
router.get('/professor_id/:fk_profe', async (req, res) => {
    try {    
        const [rows] = await db.execute(
            'SELECT * FROM turma WHERE fk_profe = ?', [req.params.fk_profe]);
        
        if (rows.length === 0 ){
            res.status(404).json({ erro: 'Turma não encontrada ' });
            return;
        }
        console.log("Turma encontrada: ", rows[0]);
        res.json(rows[0]);   
    } catch(err) {
        res.status(500).json({ erro: err.message })
    } 
});

// READ por nome
router.get('/sala/:sala', async (req, res) => {
    try{
    const [rows] = await db.execute(
        'SELECT * FROM turma WHERE sala  = ?', [req.params.sala]);
    
    if (rows.length === 0 ){
        return res.status(404).json({ erro: 'Turma não encontrada ' });
    }
    console.log("Turma encontrada:", rows[0]);
    res.json(rows[0]);    
    } catch(err){
        res.status(500).json({ erro: err.message })
    }
});

// READ por ano/semestre
router.get('/ano_semestre/:ano_semestre', async (req, res) => {
    const {ano_semestre} = req.params;
    try {
        const [rows] = await db.execute(
            'SELECT * FROM turma WHERE ano_semestre  = ?', [ano_semestre]);
    
        if (rows.length === 0 ) {
            res.status(404).json({ erro: 'Turma não encontrada ' });
            return;
        }    
        console.log("Turma encontrada:", rows);
        res.json(rows); 
    } catch(err) {
        res.status(500).json({ erro: err.message })
    }     
});

// READ por turno
router.get('/turno/:turno', async (req, res) => {
    try {
        const [rows] = await db.execute(
            'SELECT * FROM turma WHERE turno  = ?', [req.params.turno]);
    
        if (rows.length === 0 ){
            res.status(404).json({ erro: 'Turma não encontrada ' });
            return;
        }    
        console.log("Turma encontrada:", rows);
        res.json(rows); 
    } catch(err){
        res.status(500).json({ erro: err.message })
    }
});

// READ por sala
router.get('/sala/:sala', async (req, res) => {
    try {
        const [rows] = await db.execute(
            'SELECT * FROM turma WHERE sala  = ?', [req.params.sala]);
    
        if (rows.length === 0 ) {
            res.status(404).json({ erro: 'Turma não encontrada ' });
            return 
        }
        console.log("Turma encontrada:", rows);
        res.json(rows); 
    } catch(err){
        res.status(500).json({ erro: err.message })
    } 
});

// READ por status da turma
router.get('/status/:status_turma', async (req, res) => {
    try {
        const [rows] = await db.execute(
            'SELECT * FROM turma WHERE status_turma  = ?', [req.params.status_turma]);
    
        if (rows.length === 0 ){
            res.status(404).json({ erro: 'Turma não encontrada ' });
            return; 
        }
        console.log("Turma encontrada:", rows);
        res.json(rows);  
    } catch(err){
        res.status(500).json({ erro: err.message })
    } 
});

// READ todos
router.get('/gettodos', async (req, res) => {
    try {
        const [rows] = await db.execute('SELECT * FROM turma');
        res.json(rows);
    } catch (err) {
        res.status(500).json({ erro: err.message });
    }
});

// READ por ID
router.get('/:id', async (req, res) => {
    try {
        const [rows] = await db.execute('SELECT * FROM turma WHERE id_turma = ?', [req.params.id]);

        if (rows.length === 0) {
            return res.status(404).json({ erro: 'Turma não encontrada' });
        }

        res.json(rows[0]);
    } catch (err) {
        res.status(500).json({ erro: err.message });
    }
});

// UPDATE
router.put('/:id', async (req, res) => {
    const { fk_profe, modulo, ano_semestre, turno, sala, status_turma } = req.body;

    const camposObrigatorios = ['fk_profe', 'modulo', 'ano_semestre', 'turno', 'sala', 'status_turma'];
    const camposFaltando = validarCamposObrigatorios(camposObrigatorios, req.body);

    if (camposFaltando.length > 0) {
        return res.status(400).json({ erro: `Campos obrigatórios faltando: ${camposFaltando.join(', ')}` });
    }

    try {
        await db.execute(
            'UPDATE turma SET fk_profe = ?, modulo = ?, ano_semestre = ?, turno = ?, sala = ?, status_turma = ? WHERE id_turma = ?',
            [fk_profe, modulo, ano_semestre, turno, sala, status_turma, req.params.id]
        );
        res.json({ message: 'Turma atualizada com sucesso' });
    } catch (err) {
        res.status(500).json({ erro: err.message });
    }
});

// DELETE
router.delete('/:id', async (req, res) => {
    try {
        await db.execute('DELETE FROM turma WHERE id_turma = ?', [req.params.id]);
        res.json({ message: 'Turma deletada com sucesso' });
    } catch (err) {
        res.status(500).json({ erro: err.message });
    }
});

export default router;
