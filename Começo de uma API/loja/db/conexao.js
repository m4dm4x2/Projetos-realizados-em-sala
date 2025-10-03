import mysql from 'mysql2/promise';

const db = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Variant79+',
    database: 'loja'
});
export default db;