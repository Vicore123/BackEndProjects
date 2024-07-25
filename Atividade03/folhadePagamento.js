// 3. Crie uma função que retorne no console o total da folha de pagamento da empresa ( a partir do JSON)
const fs = require('fs')



async function calcularFolha() {
   
   
   fs.readFile('./pessoasJSON.json', (err, data) => {
   if (err) throw err
      const pessoas = JSON.parse(data)
      let folha = 0

      pessoas.forEach((obj) => {
         folha += obj.salario
      })
      console.log(folha)
   })
}

calcularFolha()
