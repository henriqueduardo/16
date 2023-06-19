// funcções
function teste() {
  console.log("funcão ativa");
}

function areaQuadrado(lado) {
  return lado * lado;
}

function pi() {
  return 3.14;
}

var total = 5 * pi(); // 15.7

// peso e altura são os parâmetros - imc (parametro, parametro)
function imc(peso, altura) {
  const imc = peso / altura ** 2;
  return imc;
}
console.log(imc(67, 1.75)); // números dentro do (argumento, argumento) são os argumentos
// se return não for definido, será retornado undefined >> o código interno da função é executado normalmente, independente de existir valor de return ou não.

function imc2(peso, altura) {
  const imc = peso / altura ** 2;
  console.log(imc);
}
imc2(80, 1.8); // retorna o imc
console.log(imc(80, 1.8)); // retorna o imc e undefined

function corFavorita(cor) {
  if (cor === "azul") {
    return "você gosta do céu";
  } else if (cor === "verde") {
    return "você gosta de maconha";
  } else {
    return "não gosta de nada";
  }
}

console.log(corFavorita()); // retorna "não gosta de nada" - passar parametro

// argumentos tb podem ser funções >> callback, geralmente são funções que ocorrem após algum evento
// a função possui dois argumentos
// primeiro é a string 'click'
// segundo é uma função anônima
// addEventListener("click", function () {
//   console.log("clicou no butao");
// });

// evitar retornar diferentes tipos de dados na mesma função
function terceiraIdade(idade) {
  if (typeof idade !== "number") {
    return "Informe a sua idade!";
  } else if (idade >= 60) {
    return true;
  } else {
    return false;
  }
}
// variáveis e funções definidas dentro de um bloco { }, não são visíveis fora dele
function precisoVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `faltam ${totalPaises - paisesVisitados} paises para visitar`;
}
// console.log(totalPaises); // erro, totalPaises não foi definido

var profissao = "gorila programador muito foda";

function dados() {
  var nome = "eduardo";
  var idade = 19; // <<
  function outrosDados() {
    var endereco = "bauru";
    var idade = 20; // -->> sobrepõe caso já exista alguma variavel
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}

console.log(dados()); // retorna a função sem problemas
// outrosDados(); // retorna um erro pq não foi definido (ta dentro de outra função - não é possível acessar)

// antes de executar uma função, o javascript "move" todas as funções declaradas para a memória - "são jogadas pra cima"
imc(80, 1.80); // imc aparece no console
function imc(peso, altura) {
  const imc = peso / (altura ** 2);
  console.log(imc);
}

// exercicio 05

// Crie uma função para verificar se um valor é Truthy
// function eTruthy(valor) {
//   if(valor === true) {
//     console.log("é truthy")
//   } else {
//     console.log("não é")
//   }
// }
// eTruthy(true);

function eTruthy2(valor) {
  return !!valor;
}
console.log(eTruthy2("teste"));

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function quadrado(ladoQuadrado) {
  return ladoQuadrado * 4;
}
console.log(quadrado(4));

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeGorila(nome, sobrenome) {
  const nomeGorilaCompleto = nome + sobrenome;
  return nomeGorilaCompleto;
}
console.log(nomeGorila("Eduardo Henrique ", "gorila"));

// Crie uma função que verifica se um número é par
function numeroPar(numero) {
  if(numero === 2) {
    console.log("é par essa porra");
  } else {
    console.log("não é par essa porra");
  }
  return numero;
}
console.log(numeroPar(2));

function numeroPar2(numero2) {
  modulo = numero2 % 2;
  if(modulo == 0) {
    console.log("é par tb essa porra");
    return true;
  } else {
    console.log("não é par essa porra")
    return false;
  }
}

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipoDado() {
  const tipoDeDado = 10;
  return console.log(typeof tipoDeDado);
}
console.log(tipoDado());

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
addEventListener("scroll", function () {
  console.log("eduardo henriq rosendo petrolli");
});

// Corrija o erro abaixo - fora do escopo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
console.log(precisoVisitar(20));
console.log(jaVisitei(20));


