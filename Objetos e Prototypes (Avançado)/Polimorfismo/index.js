// Superclass
function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
};
Conta.prototype.sacar = function(valor) {
    if(this.saldo < valor) {
        console.log(`Saldo insuficiente: R$${this.saldo}`)
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
};
Conta.prototype.depositar = function(valor) {
    this.saldo += valor;
    this.verSaldo();
};
Conta.prototype.verSaldo = function() {
    console.log(`A/c: ${this.agencia}/${this.conta} |` + ` Saldo: R$${this.saldo.toFixed(2)}`)
};

function ContaCorrente(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo)
    this.limite = limite;
}

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function(valor) {
    if(valor > (this.saldo + this.limite)) {
        console.log(`Saldo insuficiente: R$${this.saldo}`)
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
};

function ContaPoupanca(agencia, conta, saldo) {
    Conta.call(this, agencia, conta, saldo);
}

ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype.constructor = ContaPoupanca;

const contaC1 = new ContaCorrente(55, 45, 0, 500);
contaC1.depositar(10);
contaC1.sacar(100);
contaC1.sacar(410);
contaC1.sacar(10);

console.log();

const contaP2 = new ContaPoupanca(45, 55, 0);
contaP2.depositar(50);
contaP2.sacar(100);
contaP2.sacar(20);