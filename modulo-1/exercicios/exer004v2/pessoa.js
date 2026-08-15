// crie um objeto pessoa

const pessoa = {
  nome: 'João Silva',
  idade: 30,
  email: 'joao@example.com',
  cidade: 'São Paulo',
  
  // Método para apresentar a pessoa
  apresentar() {
    return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
  },
  
  // Método para fazer aniversário
  fazAniversario() {
    this.idade++;
    return `Parabéns! ${this.nome} agora tem ${this.idade} anos.`;
  },
  
  // Método para obter informações completas
  obterInfo() {
    return `${this.nome}, ${this.idade} anos, ${this.email}, ${this.cidade}`;
  }
};

// Testando o objeto
console.log(pessoa.apresentar());
console.log(pessoa.obterInfo());
console.log(pessoa.fazAniversario());
