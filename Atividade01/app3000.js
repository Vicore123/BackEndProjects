const http = require('http');
const porta = 3000;

const carro = require('./carro');
const salario = require('./salario');

const servidor = http.createServer((req, res) => {
   
   res.write(`<h1>Salario: ${salario(2, 30)}</h1>`);
   res.write(`<h1>Descrição: ${carro.descricao()}</h1>`)
   res.end()
}).listen(porta)