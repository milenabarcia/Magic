const pessoa = {
    nome: "Ana",
    idade: 30,
    saudacao: function() {
        return `Olá, meu nome é ${this.nome}, e tenho ${this.idade} ano`;
        
    }
};

console.log(pessoa.nome); //Acessa a prioridade "nome"
console.log(pessoa.saudacao()); // Executa o método "saudacao"

