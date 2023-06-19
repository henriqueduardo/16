// tipos de dados - String
var nome = "Eduardo Henrique "; // string
var sobrenome = "Rosendo Petrolli";
var idade = 20; // number
var possuiFaculdade = true; // boolean
var time; // undefined
var comida = null; // null
var simbolo = Symbol() // symbol
var novoObjeto = {} // object

// conferir tipo de dado
console.log(typeof nome);

// concatenar strings
var nomeCompleto = nome + sobrenome;
console.log(nomeCompleto)

// não utilizar os mesmos tipos de aspas "" dentro da string
var fraseUm = "macaco1 'macaco2' macaco3"

// template string - crases ``
var nomeCompletoDois = `Esse é o meu nome completo ${nomeCompleto}`;
console.log(nomeCompletoDois);

// exercicio 02

// declare uma variável contendo uma string
var meta = "Desenvolvedor";
// declare uma variável contendo um número dentro de uma string
var data = 2025;
// declare uma variável com a sua idade
var age = 20;
// declare duas variáveis, uma com seu nome
// e outra com seu sobrenome e some as mesmas
var nomeCompleto = nome + sobrenome;
console.log(nomeCompleto);
// coloque a seguinte frase em uma variável: It's time
var fraseExer = "It's time";
// verifique o tipo da variável que contém o seu nome
console.log(typeof nome);