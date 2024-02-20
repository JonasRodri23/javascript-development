// defineProperty - defineProperties

function Produto(nome, preco, estoque) {
   
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque;
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        configurable: true, // configuravel
        get: function(){
            return estoquePrivado;
        },
        set: function(valor){
            if (typeof valor !== 'number') {
                console.log('valor não reconhecido');
                return;
            }
            estoquePrivado = valor;
        }
    });
};

const p1 = new Produto('Camisa', 60, 500);
p1.estoque = 750;
console.log(p1.estoque);