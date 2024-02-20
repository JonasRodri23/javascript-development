const pessoas = [
    {id: 3, nome: 'Jonas'},
    {id: 2, nome: 'Jon'},
    {id: 1, nome: 'Jhow'}
];

const novasPessoas = new Map();
for (const pessoa of pessoas) {
    const {id} = pessoa;
    novasPessoas.set(id, {...pessoa});
}

console.log(novasPessoas);