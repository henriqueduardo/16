// escopo - "corpo" das funções - variáveis declaradas dentro de funções não são acessadas por fora
// escopo evita o conflito entre nomes

// evitar erros "use strict"
function mostrarCarro() {
  var carro = 'Fusca';
  console.log(carro);
}

mostrarCarro(); // retorna o "valor" de carro no console
console.log(carro); // erro, carro is not defined - fora do escopo

var carro = 'fusca';
function mostrarCarro() {
  var frase = `meu carro é um ${carro}`;
  console.log(frase);
}

mostrarCarro(); // meu carro é um Fusca
console.log(carro);  // fusca

// variáveis criadas com var, vazam o bloco, a melhor forma de declarar uma variável é utilizando const e let, pois estas respeitam o escopo de bloco
if(true) {
  var carro = 'fusca';
  console.log(carro);
}
console.log(carro); // carro

// for loop var - utilizar var dentro de um forloop, que é um bloco, o valor do variável utilizada irá vazar e existir fora do loop
for(var i = 0; i < 10; i++) {
  console.log(`Número ${i}`);
}
console.log(i); // 10

// const - mantém o escopo no bloco, impede a redeclaração e impede a modificação do valor da variável, evitando erros no código
const mes = 'Dezembro';
mes = 'Janeiro'; // erro, tentou modificar o valor
// const semana; // erro, declarou sem valor

const data = {
  dia: 28,
  mes: 'Dezembro',
  ano: 2018,
}

data.dia = 29; // Funciona
data = 'Janeiro'; // erro

// let - mantém o escopo no bloco, impede a redeclaração, mas permite a modificação do valor da variável
let ano;
ano = 2018;
ano++;
console.log(ano); // 2019

// let ano = 2020; // erro, redeclarou a variável

// exercicio 10

// Por qual motivo o código abaixo retorna com erros?
// var no console.log e não pode ser acessado por fora do bloco
{
  var cor = 'preto';
  const marca = 'Fiat';
  let portas = 4;
  console.log(cor, marca, portas);
}

// Como corrigir o erro abaixo?
// dois está declado dentro de uma função
const dois = 2;
function somarDois(x) {
  return x + dois;
}
function dividirDois(x) {
  return x + dois;
}
somarDois(4);
dividirDois(6);

// O que fazer para total retornar 500?
let numero = 50;

// passar como let
for(let numero = 0; numero < 10; numero++) {
  console.log(numero);
}

const total = 10 * numero;
console.log(total);






