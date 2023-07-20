// selecionar elementos com dataset

// todo elemento HTML do DOM herda propriedades e métodos do construtor HTMLElement
const h1 = document.querySelector('h1');
Object.prototype.toString.call(h1); // [object HTMLHeadingElement]
// HTMLHeadingElement > HTMLElement > Element > Node > EventTarget > Object

// dataset - é uma propriedade de HTMLElement, essa propriedade é um objeto DOMStringMap, eentro desse objeto existe uma coleção de chave / valor, com todos os atributos do elemento html que começarem com data- // data-teste é transformado em dataTeste(camelCase)

// selecionando a mesma div
let div = document.querySelector('div');
div = document.querySelector('[data-cor]');
div = document.querySelector('[data-cor="azul"]');

div.dataset;
// DOMStringMap {cor: "azul", width: "500"}
div.dataset.cor; // 'azul'
div.dataset.width; // '500'
div.dataset.tempo = 1000;
// DOMStringMap {cor: "azul", width: "500", tempo: "1000"}

// data-atributes -  atributos e valores que começarem com data- poderão ser utilizados como forma de configuração de plugins e interações DOM / JS

// adiciona em cada div
// uma classe com o mesmo nome
// que o valor de data
const divs = document.querySelectorAll('[data-anima]');
divs.forEach((div) => {
  div.classList.add(div.dataset.anima);
});

// data ou class - utilizar data atributes é que torna mais fácil evitarmos conflitos com estilos do CSS, a estrutura do código fica mais organizada

// exercicio 01

// Adicione um atributo data-anime="show-down" e
// data-anime="show-right" a todos as section's
// com descricão dos animais.

// Utilizando estes atributos, adicione a classe
// show-down ou show-right a sua respectiva section
// assim que a mesma aparecer na tela (animacao tab)

// No CSS faça com que show-down anime de cima para baixo
// e show-right continue com a mesma animação da esquerda
// para a direita

// Substitua todas as classes js- por data atributes.

