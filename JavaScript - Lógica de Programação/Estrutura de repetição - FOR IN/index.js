//For in lê os indices ou chaves dos objetos//

/* const carros = ['Onix', 'Gol', 'Uno']; */

const pessoa = {
nome: 'Jonas',
sobrenome: 'Rodrigues',
idade: 19
};

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]); /* -> para pegar o valor de dentro da chave */
}