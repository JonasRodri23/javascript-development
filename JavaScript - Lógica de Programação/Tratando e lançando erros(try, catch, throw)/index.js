/* try {
    console.log(naoExisto);
} catch (err) {
    console.log('naoExito não existe');
    console.log(err);
} */

function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new ReferenceError ('x e y precisam ser números');
    }

    return x + y;
}

try { console.log(soma(5, 8));
      console.log(soma('5', 8));
} catch(error) {
        console.log('Alguma coisa mais bonita');
}