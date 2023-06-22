// getElementById - seleciona e retorna elementos do DOM
//const animais = document.getElementById("animais");
//console.log(animais);

// selecionar pela classe, retorna uma HTMLCollection
// getElementsByClassName e getElementsByTagName selecionam e retornam uma lista de elementos do DOM. a lista retornada está ao vivo, significa que se elementos forem adicionados, ela será automaticamente atualizada
const gridSection = document.getElementsByClassName('grid-section');
//const contato = document.getElementsByClassName('grid-section contato');

// selecionar todas as listas, retorna uma HTMLCollection
const ul = document.getElementsByTagName('ul');

// Retorna o primeiro elemento
console.log(gridSection[1]);

// querySelector retorna o primeiro elemento que combinar com o seu seletor CSS
const animais = document.querySelector('.animais');
const contato = document.querySelector('#contato');
const ultimoItem = document.querySelector('.animais-lista li:last-child');
const linkCSS = document.querySelector('[href^="https://"]');
const primeiroUl = document.querySelector('ul');

// Busca dentro do Ul apenas
const navItem = primeiroUl.querySelector('li');

// querySelectorAll retorna todos os elementos compatíveis com o seletor CSS em uma NodeList
//const gridSection = document.querySelectorAll('.grid-section');
// Diferente do getElementsByClassName, a lista aqui é estática - novos elementos não serão adicionados aqui
const listas = document.querySelectorAll('ul');
const titulos = document.querySelectorAll('.titulo');
const fotosAnimais = document.querySelectorAll('.animais-lista img');

// Retorna o segundo elemento
console.log(gridSection[1]);

// HTMLCollection x NodeList (arraylike) - a diferença está nos métodos e propriedades de ambas. Além disso a NodeList retornada com querySelectorAll é estática
// const titulo = document.querySelector('.titulo');
const gridSectionHTML = document.getElementsByClassName('grid-section');
const gridSectionNode = document.querySelectorAll('.grid-section');

//titulo.classList.add('grid-section');

console.log(gridSectionHTML); // 4 itens
console.log(gridSectionNode); // 3 itens

// HTMLCollection e NodeList parecem uma array mas não são. o método de Array forEach() por exemplo, existe apenas em NodeList
// é possível transformar array-like em uma Array real, utilizando o método Array.from(gridSection)
//const gridSection = document.querySelectorAll('.grid-section');

// gridSection.forEach(function(gridItem, index, array) {
//   gridItem.classList.add('azul');
//   console.log(index) // index do item na array
//   console.log(array) // a array completa
// });

// exercicio 02

// Retorne no console todas as imagens do site
const allImages = document.getElementsByTagName("img");
console.log(allImages);

// Retorne no console apenas as imagens que começaram com a palavra imagem
const AllImagens = document.querySelectorAll("img[src^='img/imagem']");
console.log(AllImagens);

// Selecione todos os links internos (onde o href começa com #)
const allLinks = document.querySelectorAll("[href^='#']");
console.log(allLinks);

// Selecione o primeiro h2 dentro de .animais-descricao
const primeiroHdois = document.querySelector(".animais-descricao h2");
console.log(primeiroHdois);

// Selecione o último p do site
const p = document.querySelectorAll("p");
console.log(p[p.length - 1]);





