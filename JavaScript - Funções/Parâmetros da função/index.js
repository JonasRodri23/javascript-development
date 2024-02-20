// arguments que sustenta todos os argumentos enviados
function funcao() {
   let total = 0;
   for (let argumento of arguments) {
    total += argumento;
   } 

   console.log(total);  
}
funcao(1,22,52,17,23,15);

const conta = function(operador, acumulador, ...numeros) {
    for(let numero of numeros){
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
    }
}
conta('+', 1, 20,30,40,50);