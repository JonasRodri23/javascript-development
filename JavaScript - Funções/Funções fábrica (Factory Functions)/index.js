function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,
        // Getter
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}.`
        },
        set nomeCompleto(valor){
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },
        fala: function (assunto) {
            return `${this.nome} está ${assunto}.`;
        },
        altura,
        peso,
        // Getter
        get imc(){
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Jonas', 'Rodrigues', 1.75, 80);
p1.nomeCompleto = 'Rodrigo Garro Silva';
console.log(p1.nome);
console.log(p1.sobrenome);
/*console.log(p1.fala('falando sobre JS'));
console.log(p1.imc);
console.log(p1.nomeCompleto); */