function criaPessoa(nome, sobrenome) {
    return{nome, sobrenome};
}

const p1 = criaPessoa('Hugo', 'Silva');
const p2 = {
    nome: 'Silva',
    sobrenome: 'Hugo'
};

console.log(p1);
console.log(p2);


function criaMultiplicador(multiplicador) {
    return function(n) {
        return n * multiplicador
    };
}
const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));