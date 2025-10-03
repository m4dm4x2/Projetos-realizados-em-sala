import express from 'express';
import cors from "cors";
import cursoRota from  "./routes/curso.js";
import professorRouter from './routes/professsor.js';
import alunoRouter from './routes/aluno.js';
import matriculaRouter from './routes/matricula.js';
import disciplinaRouter from './routes/disciplina.js';
import notaRouter from './routes/nota.js';
import turmaRouter from './routes/turma.js';

const app = express();
app.use (cors())
app.use(express.json());
app.use ('/cursoRota', cursoRouter);
app.use('/professor', professorRouter);
app.use('/aluno', alunoRouter);
app.use('/matricula', matriculaRouter);
app.use('/disciplina', disciplinaRouter);
app.use('/nota', notaRouter);
app.use('/turma', turmaRouter);
app.listen(3000, () => {
    console.log('servidor rodando na porta 3000');
})