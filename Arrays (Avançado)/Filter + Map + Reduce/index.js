// Retorne a soma do dobro de todos os pares 
// -> Filtrar pares
// -> dobrar os valores
// -> Reduzir (somar tudo)



const numeros = [5, 55, 21, 79, 8, 62, 58, 94, 3, 51, 57, 79, 98];
const numerosPares = numeros
.filter(valor => valor % 2 === 0)
.map(valor => valor * 2)
.reduce((ac, valor) => ac + valor);
console.log(numerosPares);


// [ 8, 62, 58, 94, 98 ]
// [ 16, 124, 116, 188, 196 ]