// Construtora -> molde (Classe)
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome; 
}
Pessoa.prototype.nomeCompleto = () => this.nome + ' ' + this.sobrenome;

// Instância
const pessoa1 = new Pessoa('Jonas', 'R.'); // <- Pessoa = Função Construtora
const pessoa2 = new Pessoa('Jhow', 'C.'); // <- Pessoa = Função Construtora

console.dir(pessoa1);
console.dir(pessoa2);