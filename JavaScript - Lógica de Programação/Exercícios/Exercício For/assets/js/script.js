const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'},
];

const container = document.querySelector('.container'); /* Para selecionar um elemento HTML */
const div = document.createElement('div'); /* Para criar elemento HTML */

for (let i = 0; i < elementos.length; i++) {
    let {tag, texto} = elementos[i]; /* Atribuição via desestruturação */
    let tagCriada = document.createElement(tag); /* Cria tags no HTML */
    let textoCriado = document.createTextNode(texto); /* Cria texto no HTML */
    
    tagCriada.appendChild(textoCriado); /* add texto criado na tag */
    div.appendChild(tagCriada);
}

container.appendChild(div); 