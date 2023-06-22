// DOM - Document Object Model - é uma interface que representa documentos HTML e XML através de objetos, tornando possível manipular a estrutura, estilo e conteúdo destes documentos
// * Propriedades e Métodos *
const href = window.location.href;
console.log(href);
if (href === "http://127.0.0.1:5500/JavaScript/02-dom-b%C3%A1sico/index.html") {
  console.log("a url é igual");
} else {
  console.log("tá errado essa porra");
}

// window e document - são os objetos principais do DOM, boa parte da manipulação é feita através dos seus métodos e propriedades
//window.alert('alerta vermelho duardokngkong');
//alert('alerta vermelho duardokngkong'); // Funciona

document.querySelector('h1'); // Seleciona o primeiro h1
document.body; // Retorna o body

// node - toda tag html é representada pelo objeto Element e por isso herda os seus métodos e propriedades. element é um tipo de objeto node
const titulo = document.querySelector('h1');

// titulo.innerText; // retorna o texto;
// titulo.classList; // retorna as classes;
// titulo.id; // retorna o id;
// titulo.offsetHeight; // retorna a altura do elemento;

// titulo.addEventListener('click', callback);
// ativa a função callback ao click no titulo 

// exercicio 01

// Retorne o url da página atual utilizando o objeto window
const urlDOM = window.location.href;
console.log(urlDOM);

// Seleciona o primeiro elemento da página que
// possua a classe ativo
const primeiroElemento = document.querySelector(".ativo");

// Retorne a linguagem do navegador
console.log(navigator.language);

// Retorne a largura da janela 
console.log(window.innerWidth);

