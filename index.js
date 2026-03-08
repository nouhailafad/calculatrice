const express = require('express');
const app = express();

app.get('/add/:a/:b', (req, res) => {
    const result = parseFloat(req.params.a) + parseFloat(req.params.b);
    res.json({ result });
});

app.get('/subtract/:a/:b', (req, res) => {
    const result = parseFloat(req.params.a) - parseFloat(req.params.b);
    res.json({ result });
});

app.get('/multiply/:a/:b', (req, res) => {
    const result = parseFloat(req.params.a) * parseFloat(req.params.b);
    res.json({ result });
});

app.get('/divide/:a/:b', (req, res) => {
    if (parseFloat(req.params.b) === 0) {
        return res.status(400).json({ error: "Division by zero" });
    }
    const result = parseFloat(req.params.a) / parseFloat(req.params.b);
    res.json({ result });
});

module.exports = app;