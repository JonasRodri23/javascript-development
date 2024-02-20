/* const tresHpras = 60 * 60 * 3 * 1000;
const umDia = 60 * 60 * 24 * 1000;
const data = new Date(0 + tresHpras + umDia); */

/* const data = new Date(2023, 6, 14, 11, 35, 20); A, M, D, h, m, s, ms */

/* const data = new Date('2023-07-14 11:41:30');
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth() + 1); // mês começa do 0
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Minutos', data.getMinutes());
console.log('Segundos', data.getSeconds());
console.log('Milesimos', data.getMilliseconds());
console.log('Dia semana', data.getDay()); // 0 - Domingo, 6 Sábado
console.log(data.toString()); */

function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`
}

function formataData(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1); // mês começa do 0
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const minutos = zeroAEsquerda(data.getMinutes());
    const segundos = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${minutos}:${segundos}`;
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);