let mysql = require('mysql');

let connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});
function update(id, change ,table, attr){
connection.connect((err) => {
  if (err) return console.error(err.message);

  let sql = `UPDATE  ${table}
    SET ${attr} = ?
    WHERE userid = ?`;

  let data = [change, id];

  connection.query(sql, data, (error, results, fields) => {
    if (error) return console.error(error.message);
    console.log('Rows affected:', results.affectedRows);
  });

  // close the database connection
  connection.end();

});
}
module.exports = {update}