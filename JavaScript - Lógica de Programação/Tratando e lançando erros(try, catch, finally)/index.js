/* try {
    // É executada quando não há erros
} catch (error) {
    // É executada quando há erros
} finally {
    // Sempre é executado
} */

function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando instância de Date.');
    }

    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {

    });
}


try {
    const data = new Date('03-12-2003 16:15:30')
    const hora = retornaHora();
    console.log(hora);
} catch (error) {
    // Tratar erro
}
finally {
    console.log('Tenha um bom dia.')
}