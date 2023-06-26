// objetos - constructor functions - podem ser "clonadas"
// funções construtoras são responsáveis por construir novos objetos sempre que chamamos a mesma
function Carro(marcaAtribuida, precoAtribuido) { // usar Pascal Case para indentificar > sempre começar com letra maiúscula
  this.marca = marcaAtribuida; // this -> referenciar ao proprio objeto / marca -> propriedade
  this.preco = precoAtribuido;
}

const honda = new Carro();
honda.marca = 'honda';
honda.preco = 4000;
const fiat = new Carro();
fiat.marca = 'fiat';
fiat.preco = 3000;

// new keyword - variáveis dentro da Constructor estão "protegidas"
function Carro2(marca, precoInicial) {
  const taxa = 1.2; // não é mostrado
  const precoFinal = precoInicial * taxa;
  this.marca = marca; // apenas as propriedades com this vão ser acessadas pelo usuário, por conta de ser um objeto formado 
  this.preco = precoFinal;
}

const mazda = new Carro2("Mazda", 9000);
//console.log(mazda);

// manipular DOM com objetos - mudar a propriedade seletor, o objeto dom irá passar a selecionar o novo seletor em seus métodos
// const DOM = {
//   seletor: "li",
//   element() {
//     return document.querySelector(this.seletor);
//   },
//   ativar() {
//     const elementoSelecionado = this.element();
//     elementoSelecionado.classList.add("ativar");
//   }
// }

// função construtora - um objeto criado com uma Constructor, não irá influenciar em outro objeto criado com a mesma Constructor
// sempre usar parâmetros - até no métodos
function DOM(seletor) {
  this.element = function() {
    return document.querySelector(seletor);
  },
  this.ativar = function(classe) {
    this.element().classList.add(classe);
  }
}

const li = new DOM("li"); // herda todo o objeto (métodos e propriedades)
const ul = new DOM("ul");

const ultimaLi = new DOM("li:last-child");
ultimaLi.ativar("gorila");

// exercicio 01

// Transforme o objeto abaixo em uma Constructor Function
// const pessoa = {
//   nome: 'Nome pessoa',
//   idade: 0,
//   andar() {
//     console.log(this.nome + ' andou');
//   }
// }

function Pessoas(nomePessoa, idadePessoa) {
  this.nome = nomePessoa;
  this.idade = idadePessoa
  this.andar = function() {
    console.log(this.nome + " andou")
  }
}

// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos
const jao = new Pessoas("João", 20);
const maria = new Pessoas("Maria", 25);
const bruno = new Pessoas("Bruno tiberio baiano", 15);


// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos
function domLists(seletor) {
  const elements = document.querySelectorAll(seletor);
  this.elementsNode = elements;
  this.adicionar = function(classe) {
    elements.forEach((element) => {
      element.classList.add(classe)
    })
  },
  this.remover = function(classe) {
    elements.forEach((element) => {
      element.classList.remove(classe)
    })
  }
}

const listadocaralho = new domLists("ul");
listadocaralho.adicionar("gorilaaa");
listadocaralho.remover("gorilateste");