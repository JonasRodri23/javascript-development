// Escreva uma funcao que recebe um numero e rertorne o seguinte
// Numero e divisivel por 3 = Fizz
// Numero e divisivel por 5 = Buzz
// Numero e divisivel por 3 e por 5 = FizzBuzz
// Numero NAO e divisivel por 3 e por 5 = Retorna o proprio numero
// Use a funcao com numeros de 0 a 100

function fizzBuzz(numero) {
    if (typeof numero !== 'number') return numero;
    if (numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz';
    if (numero % 3 === 0) return 'Fizz';
    if (numero % 5 ===  0) return 'Buzz';
    return numero;
}

for (let i = 0; i < 100; i++) {
    console.log(i, fizzBuzz(i));
    
}