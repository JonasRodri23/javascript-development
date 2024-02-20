function retornaFuncao(nome) {
    return function () {
        return nome;
    };
}

const funcao = retornaFuncao('Jonas');
const funcao2 = retornaFuncao('Sanoj');

console.log(funcao(), funcao2());