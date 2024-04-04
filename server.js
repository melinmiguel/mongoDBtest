const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Substitua a string de conexão abaixo pela sua própria string de conexão com o banco de dados na nuvem
const uri = 'mongodb+srv://bancoBQpw3:a1a2a3a4@cluster0.edcsh1t.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectToMongoDB() {
    try {
        await client.connect();
        console.log("Conectado ao banco de dados MongoDB na nuvem");
    } catch (err) {
        console.error("Erro ao conectar ao banco de dados:", err);
    }
}
connectToMongoDB();

// Rota para inserir dados no MongoDB
app.post('/insert', async (req, res) => {
    const { name, age } = req.body;
    const db = client.db('test'); // Nome do banco de dados
    const collection = db.collection('usuarios'); // Nome da coleção

    try {
        const result = await collection.insertOne({ name, age });
        res.json({ success: true, insertedId: result.insertedId });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`));