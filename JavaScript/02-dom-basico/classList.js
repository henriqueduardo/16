// classList - retorna uma lista com as classes do elemento, permitindo adicionar, remover e verificar se contém
// ****forEach p litar um ou mais itens****
const menu = document.querySelector('.menu');
// acessar classe escifica - arraylike
console.log(menu.classList[0])

// métodos 
// menu.className; // string
// menu.classList; // lista de classes
// menu.classList.add('ativo'); // adicionar classe
// menu.classList.add('ativo', 'mobile'); // duas classes diferentes
// menu.classList.remove('ativo'); // remover classe
// menu.classList.toggle('ativo'); // adiciona/remove a classe
// menu.classList.contains('ativo'); // true ou false
// menu.classList.replace('ativo', 'inativo');

// verificar se existe ou não, retornando valores booleanos
// menu.classList.add("ativo", "teste");
// menu.classList.remove("azul");
// if(menu.classList.contains("azul")) {
//   menu.classList.add("tem-azul");
// } else {
//   menu.classList.add("nao-tem-azul");
// }

const animais = document.querySelector(".animais");
console.log(animais.attributes["data-texto"]);

// getAttribute e setAttribute - métodos que retornam ou definem algo de acordo com o atributo selecionado
const img = document.querySelector('img');
console.log(img.getAttribute("src"));

img.getAttribute('src'); // valor do src
img.setAttribute('alt', 'Texto Alternativo'); // muda o alt - adicionar qualquer coisa como atributo, existindo(válido) ou não
img.hasAttribute('id'); // verificar algo - true / false
img.removeAttribute('alt'); // remover
img.hasAttributes(); // true / false se tem algum atributo

// read only - são propriedades que não permitem a mudança de seus valores, apenas leitura.
const carro = {
  portas: 4,
  andar: function(km) {
    console.log(`o carro andou ${km}`)
  }
}

// exercicio 04

// Adicione a classe ativo a todos os itens do menu
const menuAtivo = document.querySelectorAll(".menu a");
menuAtivo.forEach((item) => {
  item.classList.add("ativo");
});

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
menuAtivo.forEach((item) => {
  item.classList.remove("ativo");
});
menuAtivo[0].classList.add("ativo");

// Verifique se as imagens possuem o atributo alt 
const imgs = document.querySelectorAll("img");
imgs.forEach((imagens) => {
  const possuiAlt = imagens.hasAttribute("alt");
  console.log(imagens.hasAttribute("alt"));
});

// Modifique o href do link externo no menu
const linkGorila = document.querySelector('a[href^="http"]');
linkGorila.setAttribute("href", "link.gorilas");
console.log(linkGorila);
