const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    res.status(200).send({message: 'Hello World', id: 24});
});

app.listen(4001, () =>{
    console.log('Api Inicializada na Porta 4001');
});