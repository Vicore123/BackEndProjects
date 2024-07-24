const fs = require('fs')
const pets = require('./pets')
const caminho = './arquivosTexto'
const codificacao = 'utf-8'
const nomeArquivo = 'pets.json'
const caminhoArquivo = `${caminho}/${nomeArquivo}`

fs.writeFile(caminhoArquivo, JSON.stringify(pets), (erro, dados) => {

   if(erro) {
      console.log(erro)
   }
   else {
      console.log('Arquivo Criado com Sucesso')
      console.log('Conteudo do Arquivo: ');
      fs.readFile(caminhoArquivo, codificacao, (erro, conteudo) => {
         if (erro) throw erro
         console.log(conteudo)
      })
   }
})