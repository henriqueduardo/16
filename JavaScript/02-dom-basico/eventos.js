// eventos - adiciona uma função ao elemento > callback, que será ativada assim que certo evento ocorrer neste elemento
const img = document.querySelector("img");
// elemento.addEventListener(event, callback, options)

// forma mais adequada de fazer
function callback() {
  console.log("Clicou");
}
img.addEventListener("click", callback);
// uma boa prática é separar a função de callback do addEventListener, declarar uma função ao invés de passar diretamente uma função anônima
// const img = document.querySelector('img');
// function callback() {
//   console.log('Clicou');
// }

// img.addEventListener('click', callback); // 
// img.addEventListener('click', callback()); // undefined
// img.addEventListener('click', function() {
//   console.log('Clicou');
// })
// img.addEventListener('click', () => {
//   console.log('Clicou');
// })

// const img = document.querySelector('img');
// function callback(event) {   o primeiro parâmetro do callback é referente ao evento que ocorreu
//   console.log(event);  geralmente utilizam (e) como nome do parâmetro
// }

// img.addEventListener('click', callback);

//
const imagensLista = document.querySelector(".animais-lista");
function callbackLista(event) {
  console.log(event.currentTarget); // retorna o elemento exato q vc foi clicado
  console.log(event.target); // retorna exatamento onde vc cliclou
  console.log(event.type); // tipo de evento
}
imagensLista.addEventListener("click", callbackLista);

// preventDefault - previne o comportamento padrão do evento no browser
const linkExterno = document.querySelector("a[href^='http']");
function handleLinkExterno(event) {
  event.preventDefault();
  console.log(event);
}

linkExterno.addEventListener("click", handleLinkExterno);

// this - a palavra chave this é uma palavra especial de JavaScript, que pode fazer referência a diferentes objetos dependendo do contexto. No caso de eventos, ela fará referência ao elemento em que addEventListener foi adicionado

const imgDois = document.querySelector("img");
function callback(event) {
  console.log(this); // retorna a imagem
  console.log(this.getAttribute("src"));
}

imgDois.addEventListener("click", callback);

// eventos - existem diversos eventos como click, scroll, resize, keydown, keyup, mouseenter. que podem ser adicionados a diferentes elementos, como o window e document
// const h1 = document.querySelector('h1');

// function callback(event) {
//   console.log(event.type, event);
// }

// h1.addEventListener('click', callback);
// h1.addEventListener('mouseenter', callback);
// window.addEventListener('scroll', callback);
// window.addEventListener('resize', callback);
// window.addEventListener('keydown', callback);

// foreach e eventos - o método addEventListener é adicionado somente à um único elemento, é necessário um loop entre elementos de uma lista, para adicionar os eventos à cada um deles
const imgs = document.querySelectorAll("img");

function imgSrc(event) {
  const src = event.currentTarget.getAttribute("src");
  console.log(src);
}

imgs.forEach((img) => {
  img.addEventListener("click", imgSrc);
});

// exercicio 06

// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
// const linksInternos = document.querySelector("a[href^='#animais']");
// function linkAtivo(event) {
//   if(linksInternos === linksInternos){
//     linksInternos.classList.toggle("ativo");
//   } else {
//     console.log("nao deu boa");
//   }
//   event.preventDefault();
// }

// linksInternos.addEventListener("click", linkAtivo);
const linksInternos = document.querySelectorAll("a[href^='#']");
function handleLink(event) {
  event.preventDefault();
  linksInternos.forEach((link) => {
    link.classList.remove("ativo");
  })
  event.currentTarget.classList.add("ativo");
}

// ** foreach para percorrer e selecionar todos elementos **
linksInternos.forEach((link) => {
  link.addEventListener("click", handleLink)
})


// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
// const todosElementos = document.querySelector("body");
// function mostrarElementos(event) {
//   console.log(event.target);
// }

// todosElementos.addEventListener("click", mostrarElementos);
const todosElementos = document.querySelectorAll("body *");
function handleElemento(event) {
  console.log(event.currentTarget); 
}

todosElementos.forEach((elemento) => {
  elemento.addEventListener("click", handleElemento);
})


// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento
// event.currentTarget.remove();


// Se o usuário clicar na tecla (t), aumente todo o texto do site.
function textoUpper(event) {
  if(event.key === "t") {
    document.body.classList.toggle("upper-text");
  } else {
    console.log("nao deu boa essa pora");
  }
}

window.addEventListener("keydown", textoUpper);
