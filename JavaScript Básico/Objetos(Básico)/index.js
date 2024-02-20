const pessoa1 = {
    nome: 'Jonas',
    sobrenom: 'Rodrigues',
    idade: 19,

    fala() {
        console.log(`A minha idade atual é ${this.idade}.`);
    },

    incrementaIdade() {
        this.idade++;
    }
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();

 

/* function criaPessoa (nome, sobrenome, idade) {
    return { nome, sobrenome, idade }
}

const pessoa1 = criaPessoa('Jonas', 'Rodrigues', 19 )
const pessoa2 = criaPessoa('Junior', 'Santos', 26 )
const pessoa3 = criaPessoa('Maria', 'Eduarda', 18 )
const pessoa4 = criaPessoa('José', 'Carlos', 32 )
const pessoa5 = criaPessoa('Ana', 'Julia', 20 )
console.log(pessoa1.nome, pessoa2.nome)  */