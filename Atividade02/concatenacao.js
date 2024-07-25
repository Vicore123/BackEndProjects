const fs = require('fs')
const caminho = './arquivos'
const codificacao = 'utf-8'
const caminhoArquivo1 = 'arquivo1.txt'
const caminhoArquivo2 = 'arquivo2.txt'
const caminhoArquivoConcatenado = 'arquivoConcatenado.txt'

fs.readFile(`${caminho}/${caminhoArquivo1}`, codificacao, (err, conteudo1) => {
   fs.readFile(`${caminho}/${caminhoArquivo2}`, codificacao, (err, conteudo2) => {
      fs.writeFile(`${caminho}/${caminhoArquivoConcatenado}`, `${conteudo1+conteudo2}`, (err, data) => {
         if(err) {
            console.log(err)
         }
         else {
            console.log('Arquivo criado com sucesso!')
            console.log('Conteudo do Arquivo: ')
            console.log(fs.readFile(`${caminho}/${caminhoArquivoConcatenado}`, codificacao, (err, conteudo) => {
               console.log(conteudo)
            }));
         }
      })
   })
})