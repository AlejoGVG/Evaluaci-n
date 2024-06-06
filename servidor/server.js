const express = require('express');
const mysql = require('mysql');

const app = express();
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root12345',
  database: 'evaluacion'
});

connection.connect(err => {
  if (err) {
    console.error(err);
    return;
  }

  app.post('/login', (req, res) => {
    const { claveUsuario, correoUsuario } = req.body;

    const query = `
      SELECT idUsuario, nombreUsuario
      FROM usuarios
      WHERE claveUsuario = ? AND correoUsuario = ?;
    `;

    connection.query(query, [claveUsuario, correoUsuario], (err, rows) => {
      if (err) {
        console.error(err);
        res.json({ success: false });
        return;
      }

      if (rows.length === 0) {
        res.json({ success: false });
        return;
      }

      const usuario = rows[0];
      res.json({
        success: true,
        data: [{
          idUsuario: usuario.idUsuario,
          nombreUsuario: usuario.nombreUsuario
        }]
      });
    });
  });

  app.listen(3000, () => {
    console.log('Server listening on port 3000');
  });
});