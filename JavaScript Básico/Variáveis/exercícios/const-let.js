const nome = "Jonas";
const sobrenome = "Rodrigues";
const idade = 19;
const peso = 80;
const alturaEmM = 1.74;

let indiceMassaCorporal = peso / (alturaEmM * alturaEmM);
let anoNascimento = 2023 - idade;

console.log(nome, sobrenome, "tem", idade, "anos, pesa", peso, "kg, tem", alturaEmM, "de altura e seu IMC é de", indiceMassaCorporal)
console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento}.`)