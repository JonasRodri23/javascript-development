/*
If pode ser usado sozinho
sempre que utilizo a palavra else, preciso de um if antes 
Eu posso ter vários else ifs na checagem 
Só posso ter um else na checagem
*/

const hora = 15;

if (hora >= 0 && hora <= 12) {
    console.log('Bom dia!');
} else if (hora >=13 && hora <=17) {
    console.log('Boa tarde!');
} else if (hora >= 18 && hora <= 23) {
    console.log('Boa noite!');
} else {
    console.log('Olá');
}
    