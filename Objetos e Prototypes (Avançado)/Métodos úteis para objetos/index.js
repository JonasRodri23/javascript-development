/* Object.assign(des, any);
Object.getOwnPropertyDescriptor(o, 'prop');
... (spread) */

// Já vimos:
/* Object.keys  (Retorna as chaves)
Object.freeze  (congela o objeto)
Object.defineProperties  (Define varias propriedades)
Object.defineProperty  (define uma propriedade) */

const produto = {nome: 'Caneta', preco: 2, material: 'Acrilico'};
const produto2 = {...produto};
const produto3 = Object.assign({}, produto, {cor: 'azul'});

produto2.nome = 'Lápis';
produto2.preco = 1.5;

//console.log(Object.entries(produto));

for (let [chave, valor] of Object.entries(produto)){
    console.log(chave, valor);
};

// console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));