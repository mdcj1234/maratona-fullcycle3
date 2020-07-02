const serverless = require('serverless-http');
const express = require('express')
const app = express()

app.use(express.json())

app.get('/soma', function (req, res) {

    const a = req.query.a;
    const b = req.query.b;

    const valor = Number(a) + Number(b);

    res.json({"resultado" : valor})
})

module.exports.handler = serverless(app);