// 1. Converta para JSON e salve a lista de funcionários abaixo em um arquivo chamado funcionarios.json

const fs = require('fs')

pessoasJSON = JSON.stringify(require('./funcionarios.js'))
caminhoArquivo = './funcionarios.json'
codificacao = 'utf-8'

fs.writeFile(caminhoArquivo, pessoasJSON, codificacao, (err, req) => {
   if (err) throw err
   console.log('Arquivo criado com sucesso!')
})

