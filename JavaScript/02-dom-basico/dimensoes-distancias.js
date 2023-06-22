// dimensões e distâncias - são propriedades e métodos dos objetos Element e HTMLElement, a maioria delas são read only
const section = document.querySelector('.animais');

section.clientHeight; // height + padding
section.offsetHeight; // height + padding + border
section.scrollHeight; // height total, mesmo dentro de scroll

//const section = document.querySelector('.animais');

// Distância entre o topo do elemento e o topo da página
section.offsetTop;

// Distância entre o canto esquerdo do elemento
// e o canto esquerdo da página
section.offsetLeft;

// janela browser
window.innerWidth; // width do janela
window.outerWidth; // soma dev tools também
window.innerHeight; // height do janela
window.outerHeight; // soma a barra de endereço

window.pageYOffset; // distância total do scroll vertical
window.pageXOffset; // distância total do scroll horizontal

if(window.innerWidth < 600) {
  console.log('tela menor que 600px');
}

// match media -  media-querie como no CSS para verificar a largura do browser
const small = window.matchMedia('(max-width: 600px)');
if(small.matches) {
  console.log('tela menor que 600px');
} else {
  console.log('tela maior que 600px');
}

// exercicio 05

// Verifique a distância da primeira imagem
// em relação ao topo da página
const primeiraImagem = document.querySelector("img");
console.log(primeiraImagem.offsetTop);

// Retorne a soma da largura de todas as imagens
function somaImagens() {
  const imagens = document.querySelectorAll("img");
  let soma = 0;
  imagens.forEach((imgs) => {
    soma += imgs.offsetWidth;
  })
  console.log(soma);
}

window.onload = function() {
  somaImagens();
}

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google
const links = document.querySelectorAll("a");
links.forEach((link) => {
  const linkWidth = link.offsetWidth;
  const linkHeight = link.offsetHeight;
  if(linkWidth >= 48 && linkHeight >= 48) {
    console.log("o link está no tamanho ideal");
  } else {
    console.log("não está no tamanho recomendado");
  }
});

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
const browserQuerie = window.matchMedia("(max-width: 720px)").matches;
if(browserQuerie) {
  const menu = document.querySelector(".menu");
  menu.classList.add("menu-mobile");
  console.log("classe menu-mobile adicionada");
} else {
  console.log("browser maior que 720px");
}


