// config inicial
const express = require('express');
const app = express();

// forma de ler json
app.use(
    express.urlencoded({
        extended: true
    })
) // inicio da configuração da leitura de json

app.use(express.json()); //finaliza o middleware

// rota inicial / endpoint
app.get('/', (req, res) => {
    
    //mostrar req

    res.json({ message: 'Oi Express!!!' })
})

// entregar uma porta
app.listen(3000);