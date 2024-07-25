const http = require('http');
const porta = 3000;

const somar = require('./somar');
const subtrair = require('./subtrair');

const servidor = http.createServer((req, res) => {
   
   res.write(`<h1>somar: ${somar(2, 30)}</h1>`);
   res.write(`<h1>subtrair: ${subtrair(2, 30)}</h1>`);
   res.end()
}).listen(porta)