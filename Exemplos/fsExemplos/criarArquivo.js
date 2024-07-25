const fs = require('fs')
const caminho = './arquivosTexto'
const codificacao = 'utf-8'
const nomeArquivo = 'receita.txt'
const caminhoArquivo = `${caminho}/${nomeArquivo}`
const conteudo = "Bolo de Cenoura\n\nIngredientes:\n- 3 cenouras médias\n- 3 ovos\n- 1 xícara de óleo\n- 2 xícaras de açúcar\n- 2 xícaras de farinha de trigo\n- 1 colher (sopa) de fermento em pó\n\nModo de Preparo:\n1. No liquidificador, bata as cenouras, os ovos e o óleo.\n2. Em uma tigela, misture o açúcar, a farinha e o fermento.\n3. Adicione a mistura do liquidificador à tigela e mexa bem.\n4. Despeje em uma forma untada e leve ao forno médio por aproximadamente 40 minutos."

fs.writeFile(caminhoArquivo, conteudo, (erro, dados) => {
   if(erro) {
      console.log(erro)
   }
   else {
      console.log('Arquivo criado com sucesso!')
      console.log('Conteudo do Arquivo: ')
      console.log(dados);
   }
})