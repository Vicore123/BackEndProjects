const fs = require('fs')

const caminho = './arquivo'
const codificacao = 'utf-8'
const nomeArquivo = 'arquivo.txt'

fs.readFile(`${caminho}/${nomeArquivo}`, codificacao, (err, conteudo) => {
   console.log(conteudo)
})