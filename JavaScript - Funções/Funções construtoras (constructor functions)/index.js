/* Função construtora > objetos
Função fábrica > objetos
Construtora > criaPessoa(new) */

function Pesssoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function () {
        console.log(this.nome + ': sou um método');
    };
}

const p1 = new Pesssoa('Jonas', 'Rodri');
console.log(p1);
p1.metodo();