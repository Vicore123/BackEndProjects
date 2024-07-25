// 2. Leia o arquivo JSON e faça um filtro para mostrar apenas os Desenvolvedores Front-end no console.

const fs = require('fs')

const caminhoArquivo = './pessoasJSON.json'
fs.readFile(caminhoArquivo, (err, data) => {
   if (err) throw err
   let pessoas = JSON.parse(data)

   let pessoasFiltradas = pessoas.filter(pessoa => pessoa.cargo == 'Desenvolvedor Front-end')

   console.log(pessoasFiltradas)
})