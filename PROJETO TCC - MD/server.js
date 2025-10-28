const PORT = process.env.PORT || 3010;
const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
    console.log(`Server rodando em http://localhost:${PORT}`);
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'home.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

app.get('/cadastro', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'cadastro.html'));
});

app.get('/sobre', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'sobre.html'));
});

app.use((req, res) => {
    res.status(404).send('<h1> 404 - Página não encontrada </h1><a href="/">Voltar para a página inicial</a>');
});