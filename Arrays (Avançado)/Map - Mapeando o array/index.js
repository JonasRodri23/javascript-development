// Map
// Dobre os numeros
const numeros = [5, 55, 21, 79, 8, 62, 58, 94, 3, 51, 57, 79, 98];

const numerosDobrados = numeros.map(valor => valor * 2)


/* console.log(numerosDobrados); */

// Para cada elemento:
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave 'nome' do objeto
// Adicione uma cheve id em cada objeto

const pessoas = [
    {nome: 'João', idade: 15},
    {nome: 'Maria', idade: 75},
    {nome: 'Eduardo', idade: 35},
    {nome: 'Leticia', idade: 55},
    {nome: 'Luana', idade: 17},
    {nome: 'Caio', idade: 25},
];
const nomes = pessoas.map(obj => obj.nome);
const idades = pessoas.map(obj => ({idade : obj.idade}));
const comIds = pessoas.map(function(obj, indice){ 
    const newObj = {...obj};
    newObj.id = indice;
    return newObj
})

console.log(nomes, idades, comIds)