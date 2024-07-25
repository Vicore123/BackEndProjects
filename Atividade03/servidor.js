const http = require('http')
const objeto = require('./funcionarios')
const porta = 8080

http.createServer((req, res) => {
   res.setHeader('content-type', 'application/json; charset = utf-8')

   if(req.url == '/') {
      res.statusCode = 200
      res.write(JSON.stringify({nome: 'APIDEV 1.0', Autor: 'Você :)'}))
   }


   else if (req.url == '/funcionarios') {
      res.statusCode = 200
      res.write(JSON.stringify(objeto))
   }
   else if (req.url == '/funcionarios/desenvolvedores') {
   res.statusCode = 200
   res.write(JSON.stringify(objeto.filter(pessoa => pessoa.cargo == 'Desenvolvedor Front-end' || pessoa.cargo == "Desenvolvedor Back-end" || pessoa.cargo == "Desenvolvedor Full-stack")))
   }
   

   else {
      res.statusCode = 200
      res.write(JSON.stringify({erro: 'Rota não encontrada'}))
   }
   res.end()
})
.listen(porta, ()=> console.log(`ouvindo na porta ${porta}`))