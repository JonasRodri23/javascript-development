const nome = ['Jonas', 'Rodri', 'Jr']

for (let i = 0; i < nome.length; i++) {
    console.log(nome[i]);
    
}

console.log('#####');

for (let index in nome) {
    console.log(index);
        
}

console.log('#####');

for (let valor of nome) {
    console.log(valor);
}

/* For clássico - Geralmente com iteráveis (Arrays ou Strings)
For in - Retorna o indice ou chave (Strings, arrays ou objetos)
For of - Retorna o valor em si (iteráveis, strings ou arrays) */