import mysql from 'mysql2'
export default function conectar_mysql(){
  const connection =mysql.createConnection({
      host:'localhost',
      user:'user',
      password:'contrasena',
      database:'database'
  });
  connection.connect((err) => {
      if (err) {
        console.error('Error de conexión:', err);
        return;
      }
      console.log('Conexión a la base de datos exitosa.');
  });
}