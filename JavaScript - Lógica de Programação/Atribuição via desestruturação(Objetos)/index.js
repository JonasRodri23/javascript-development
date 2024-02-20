const pessoa = {
    nome: 'Jonas',
    sobrenome: 'Rodrigues',
    idade: 19,
    endereco: {
        rua: 'Estr. do Bongi',
        numero: 755
    }
};

/* const { endereco: {rua, numero} } = pessoa;
console.log(rua, numero); */

const { nome, sobrenome,...resto} = pessoa;
console.log(nome, sobrenome, resto);