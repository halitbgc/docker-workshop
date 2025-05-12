const express = require('express')
const mysql = require('mysql2')
const app = express()
const port = 3000

const connection = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'testdb'
})

app.get('/', (req, res) => {
  connection.query('SELECT NOW() AS now', (err, results) => {
    if (err) {
      res.send('Veritabanı bağlantı hatası')
    } else {
      res.send(`Veritabanı bağlantısı başarılı! Zaman: ${results[0].now}`)
    }
  })
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})

