import mysql from "mysql2";
  
// create the connection to database
const db = mysql.createConnection({
  host: 'localhost',
  port:4306,
  user: 'root',
  password: '',
  database: 'post_db'
});
 
export default db;