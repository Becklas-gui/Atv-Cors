const express = require('express');
const cors = require('cors'); 
const app = express();
const PORT = 8080;




const corsOptions = {
    origin: 'http://localhost:3000',
    methods: 'GET',
    optionsSuccessStatus: 200 
};


app.use(cors(corsOptions));


app.get('/api/mensagem', (req, res) => {
    res.json({ mensagem: "Mensagem de permissao com CORS da API em 8080"});
});

app.listen(PORT, () => {
    console.log(`API Backend rodando em http://localhost:${PORT}`);
    console.log("Agora permitindo acesso de http://localhost:3000");
});
