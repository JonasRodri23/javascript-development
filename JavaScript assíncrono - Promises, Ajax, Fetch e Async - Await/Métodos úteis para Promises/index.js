function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}


function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') {
            reject('BAD VALUE');
            return;
        }
        setTimeout(() => {
            resolve(msg.toUpperCase() + '- Passei pela promise');
        }, tempo);
    }) 
}
// Promise.all Promise.race Promise.resolve Promise.reject
const promises = [
  /*   'Primeiro valor', */
    esperaAi('Promise 1', 3000),
    esperaAi('Promise 2', 2000),
    esperaAi('Promise 3', 3500),
    esperaAi(1000, 3500)
    /* 'Outro valor' */
];

Promise.all(promises).then(function(valor) {
    console.log(valor);
}).catch(function(erro) {
    console.log(erro);
});


Promise.race(promises).then(function(valor) {
    console.log(valor);
}).catch(function(erro) {
    console.log(erro);
});

function baixaPagina(){
    const emCache = true;

    if(emCache) {
        return Promise.reject('Página em cache');
    } else {
        return esperaAi('Baixei a Página', rand(1,5));
    }
}

baixaPagina().then(dadosPagina => {
    console.log(dadosPagina);
}).catch(e => {
    console.log('ERRO', e);
})
