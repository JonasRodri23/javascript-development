// defineProperty - defineProperties

function Produto(nome, preco, estoque) {
    
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        value: estoque, // valor
        writable: false, // pode alterar o valor
        configurable: false // configuravel
    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true, // mostra a chave
            value: nome, // valor
            writable: true, // pode alterar o valor
            configurable: true // configuravel
        },
        preco: {
            enumerable: true, // mostra a chave
            value: preco, // valor
            writable: true, // pode alterar o valor
            configurable: true // configuravel
        }
    });
};

const p1 = new Produto('Camisa', 60, 500);
console.log(Object.keys(p1));
console.log(p1);