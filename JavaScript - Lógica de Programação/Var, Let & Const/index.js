const verdadeira = true;

//Let tem escopo de bloco {... bloco}
// Var só tem escopo de função

/* let nome = 'Luiz'; //criando
var nome2 = 'Luiz'; */


/* if (verdadeira) {
    let nome = 'João'; // criando
    var nome2 = 'José'; // redeclarando
    console.log(nome, nome2); 

    if (verdadeira) {
        let nome = 'outra coisa';
        console.log(nome, nome2);
    }
} */

function falaOi() {
    
    if (verdadeira) {
        let nome = 'João';
        var sobrenome = 'Miranda';
        console.log(nome);
    }
    console.log(sobrenome);
}
falaOi();