//  propriedade prototype é um objeto adicionado a uma função quando a mesma é criada
function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}
const andre = new Pessoa("André", 28);

console.log(Pessoa.prototype); // retorna o objeto
console.log(andre.prototype); // undefined

// é possível adicionar novas propriedades e métodos ao prototype (objeto)
Pessoa.prototype.andar = function () {
  return this.nome + " andou";
};
Pessoa.prototype.nadar = function () {
  return this.nome + " nadou";
};
console.log(Pessoa.prototype); // retorna o objeto

// o objeto criado utilizando o construtor, possui acesso aos métodos e propriedades do protótipo deste construtor, prototype é uma propriedade de funções apenas
const duardo = new Pessoa("Duardo", 28);

andre.nome;
andre.idade;
andre.andar();
andre.nadar();

// proto que aparece no console é apenas p referencia do proprio google >nao usar<
// Acessam o mesmo método
// mas __proto__ não terá
// acesso ao this.nome
// andre.andar();
// andre.__proto__.andar();

// o objeto possui acesso aos métodos e propriedades do protótipo do construtor responsável por criar este objeto, herdam métodos

// objetos, funções, números, strings e outros tipos de dados são criados utilizando construtores nativos, esses construtores possuem um protótipo com propriedades e métodos, que poderão ser acessadas pelo tipo de dado
const pais = "Brasil";
const cidade = new String("Rio");

pais.charAt(0); // B
cidade.charAt(0); // R

String.prototype;

// o uso direto de funções do protótipo do construtor Array é comum
const lista = document.querySelectorAll('li');

// transforma em uma array
const listaArray = Array.prototype.slice.call(lista);

// saber o q esta sendo retornado
const Carro = {
  marca: 'Ford',
  preco: 2000,
  acelerar() {
    return true;
  }
}

Carro // Object
Carro.marca // String
Carro.preco // Number
Carro.acelerar // Function
Carro.acelerar() // Boolean
Carro.marca.charAt // Function
Carro.marca.charAt(0) // String

// exercicio 02

// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa
function pessoasDois(nome, sobrenome, idade) {
  this.nome = nome,
  this.sobrenome = sobrenome,
  this.idade = idade
}

pessoasDois.prototype.nomeCompleto = function () {
  return this.nome + " " + this.sobrenome + "" + this.idade + " < esses são os dados completos do gorilla.";
};

let teste = new pessoasDois("Eduardo Henrique", "Rosendo Petrolli ", 20);
console.log(teste.nomeCompleto());

// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document

const listaUm = document.querySelectorAll("li");

// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

li; // HTMLLIElement
li.click; // function
li.innerText; // string
li.value; // number
li.hidden; // boolean
li.offsetLeft; // number
li.click(); // undefined

// Qual o construtor do dado abaixo:
li.hidden.constructor.name; // string 


