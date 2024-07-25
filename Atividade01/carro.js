// 2. Criar um objeto representando um carro com atributos e um método que retorna a descrição do carro

const carro = {
   marca: "Toyota",
   modelo: "Corolla",
   ano: 2023,
   cor: "prata",
   motor: "2.0L",
   descricao: function() {
      return `Este carro é um ${this.marca} ${this.modelo} do ano ${this.ano}, na cor ${this.cor} e com um motor ${this.motor}.`;
  }
}

module.exports = carro