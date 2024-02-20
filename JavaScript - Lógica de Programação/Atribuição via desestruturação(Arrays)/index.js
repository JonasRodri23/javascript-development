/* let a = 'A';
let b = 'B';
let c = 'C';

const letras = [b, c, a];
[a, b, c] = letras;

console.log(a, b, c); */

// ...rest, ...spread

/* const numeros = [154, 247, 378, 469, 578, 633, 777, 875, 923];
const [um, , tres, , cinco, , sete] = numeros;

console.log(um, tres, cinco); */

const numeros = [ 
    [154, 247, 378], 
    [469, 578, 633],
    [777, 875, 923]
];

const [lista1, lista2, lista3] = numeros;
console.log(lista2[1]);
