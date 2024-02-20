let cpf = '137.895.134-52';
let cpfLimpo = cpf.replace(/\D+/g, '');
console.log(cpfLimpo);
cpfArray = Array.from(cpfLimpo);
console.log(cpfArray.reduce((ac, valor) => ac + Number(valor), 0));