import mysql from 'mysql2'
import {DB_HOST, DB_USER, DB_PASSWORD, DB_NAME, DB_PORT} from './config.js'

const conn = mysql.createConnection({
    user: DB_USER,
    password: DB_PASSWORD,
    host: DB_HOST,
    port: DB_PORT,
    database: DB_NAME
})

conn.connect(function(err){
    if (err) throw console.log('Error al cargar base de datos:' + err.stack);
})
console.log('conexion exitosa')

conn.query('SELECT * from users', (err, rows) => {
    if (err) throw console.log('Error al cargar base de datos:' + err.stack);
    console.log('Datos de la tabla:')
    console.log(rows[0])
})

export {conn}
conn.end()