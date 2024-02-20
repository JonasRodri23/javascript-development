// Filter
// Retorne os números maiores que 10
const numeros = [5, 55, 21, 79, 8, 62, 58, 94, 3, 51, 57, 79, 98];

/* function callbackFilter(valor, indice, array) {
    return valor > 10;
} */

const numerosFiltrados = numeros.filter(valor => valor < 10);

/* console.log(numerosFiltrados); */

// Retorne pessoas que tem o nome com 5 letras ou mais
// Retorne pessoas com mais de 50 anos
// Retorne pessoas cujo o nome termina com a

const pessoas = [
    {nome: 'João', idade: 15},
    {nome: 'Maria', idade: 75},
    {nome: 'Eduardo', idade: 35},
    {nome: 'Leticia', idade: 55},
    {nome: 'Luana', idade: 17},
    {nome: 'Caio', idade: 25},
]

const nome5Letras = pessoas.filter(obj => obj.nome.length >= 5);
const pessoasMais50 = pessoas.filter(obj => obj.idade > 50);
const nomeTerminaComA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'));

console.log(nome5Letras, pessoasMais50, nomeTerminaComA)