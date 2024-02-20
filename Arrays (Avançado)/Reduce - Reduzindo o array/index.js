// Some todos os numeros (reduce)
// Retorne um array com os pares (filter)
// Retorne um array com o dobro dos valores (map)
const numeros = [5, 55, 21, 79, 8, 62, 58, 94, 3, 51, 57, 79, 98];
const total = numeros.reduce(function(acumulador, valor, indice, array) {
    acumulador += valor;
    return acumulador;
});

console.log(total);


// Retorne a pessoa mais velha
const pessoas = [
    {nome: 'João', idade: 15},
    {nome: 'Maria', idade: 75},
    {nome: 'Eduardo', idade: 35},
    {nome: 'Leticia', idade: 55},
    {nome: 'Luana', idade: 17},
    {nome: 'Caio', idade: 25},
];
const maisVelha = pessoas.reduce(function(acumulador, valor) {
    if (acumulador.idade > valor.idade) return acumulador;
    return valor;
})
console.log(maisVelha);