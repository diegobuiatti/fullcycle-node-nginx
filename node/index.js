const express = require('express')
const mysql = require('mysql')

const app = express()
const port = 3000

const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};

const connection = mysql.createConnection(config)

const sql = `INSERT INTO people(name) values('Buiatti')`
connection.query(sql)

app.get('/', (req, res) => {
  let resp = '<h1>Full Cycle Rocks!</h1>'

  connection.query('SELECT * FROM people', function (error, results, fields) {
    results.forEach(item => {
      resp += `<div>${item.name}</div>`
    });

    res.send(resp)
  })
})

app.listen(port, () => console.log(`Rodando na porta ${port}`))
