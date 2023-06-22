// // propriedades que retornam uma string que contem o html ou texto, é possível atribuir um novo valor para as mesmas element.innerText = "texto novo"
// // é possível acessar um htmlcollection da mesma forma q acessa um array [0]
// const menu = document.querySelector('.menu');

// menu.outerHTML; // todo o html do elemento
// menu.innerHTML; // html interno - apenas o texto que esta dentro da tag
// menu.innerText; // texto, sem tags

// menu.innerText = '<p>Texto</p>'; // a tag vai como texto - texto puro
// menu.innerHTML = '<p>Texto</p>'; // a tag é renderizada - código html

// // maneiras de navegar pelo DOM utilizando suas propriedades e métodos
// const lista = document.querySelector('.animais-lista');

// lista.parentElement; // pai
// lista.parentElement.parentElement; // pai do pai
// lista.previousElementSibling; // elemento acima
// lista.nextElementSibling; // elemento abaixo

// lista.children; // HTMLCollection com os filhos
// lista.children[0]; // primeiro filho
// lista.children[--lista.children.length]; // último filho

// lista.querySelectorAll('li'); // todas as LI's
// lista.querySelector('li:last-child'); // último filho - * como se fosse css *

// // elements represetam um elemento html, ou seja, uma tag. Node representa um nó, e pode ser um elemento (Element), texto, comentário, quebra de linha e mais, ou seja, qualquer coisa

// const lista2 = document.querySelector('.animais-lista');

// lista2.previousElementSibling; // elemento acima
// lista2.previousSibling; // node acima

// lista2.firstChild; // primeiro node child
// lista2.childNodes; // todos os node child

// // maneiras de  mover elementos no dom com métodos de Node
// //const lista = document.querySelector('.animais-lista');
// const contato = document.querySelector('.contato');
// const titulo = contato.querySelector('.titulo');

// contato.appendChild(lista); // move lista para o final de contato
// contato.insertBefore(lista, titulo); // insere a lista antes de titulo
// contato.removeChild(titulo); // remove titulo de contato
// contato.replaceChild(lista, titulo); // substitui titulo por lista

// // criar um elemento com o método createElement()
// const animais = document.querySelector('.animais');

// const novoH1 = document.createElement('h1');
// novoH1.innerText = 'Novo Título';
// novoH1.classList.add('titulo');

// animais.appendChild(novoH1);

// // clonar um elemento com o método cloneNode() - o novo elemento sempre será baseado no anterior
// // const titulo = document.querySelector('h1');
// // const titulo2 = document.querySelector('h1');
// // const novoTitulo = titulo;
// // // titulo, titulo2 e novoTitulo são iguais

// // const cloneTitulo = titulo.cloneNode(true);
// // const contato = document.querySelector('.contato');
// // contato.appendChild(cloneTitulo);

// exercicio 07

// Duplique o menu e adicione ele em copy
const menu = document.querySelector(".menu");
const menuDuplicado = menu.cloneNode(true); // true - envolve todos os filhos do elemento pai - <header> <nav> <ul></ul> </nav> <header/>
console.log(menuDuplicado);
const footer = document.querySelector(".copy");

footer.appendChild(menu);
// Selecione o primeiro DT da dl de Faq
const faq = document.querySelector(".faq-lista");
const dt = faq.children[0];
console.log(dt);

// Selecione o DD referente ao primeiro DT
console.log(dt.nextElementSibling);

// Substitua o conteúdo html de .faq pelo de .animais
const animais = document.querySelector(".animais");
faq.innerHTML = animais.innerHTML;
