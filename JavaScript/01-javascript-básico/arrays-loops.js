// array - um grupo de valores geralmente relacionados, usados para guardarmos diferentes valores em uma única variável -->> base 0 -->> 0, 1, 2, 3...
// acessar um elemento da array com [n] -- existem diversos outros métodos, como map, reduce e forEach
var videoGames = ["Switch", "PS4", "XBox"];

videoGames[0]; // switch
videoGames[2]; // bbox
videoGames.push("PS5");
console.log(videoGames);

// loop -  fazer algo repetidamente até que uma condição seja atingida
// for loop é o mais comum
for (var numero = 0; numero < 10; numero++) {
  console.log(numero);
}
// retorna de 0 a 9 no console

// while
var i = 0;
while (i < 10) {
  console.log(i);
  i++;
}
// retorna de 0 a 9 no console

// parar loop
var videoGamesDois = ["Switch", "PS4", "XBox", "3DS"];
for (var i = 0; i < videoGamesDois.length; i++) {
  console.log(videoGamesDois[i]);
  if (videoGamesDois[i] === "PS4") {
    break; // encerra o loop
  }
}

// forEach é um método que executa uma função para cada item da Array. é uma forma mais simples de utilizarmos um loop com arrays (ou array-like)
var videoGames = ["maça", "pera", "banana", "goiaba"];
videoGames.forEach(function (item) {
  console.log(item);
});
// o argumento item será atribuído dinamicamente

// sintaxe - evitar erros
var numero = 0;
var maximo = 50;
for (; numero < maximo; ) {
  console.log(numero);
  numero++;
}

// exercicio 08

// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
let brasilCopa = [1959, 1962, 1970, 1994, 2002];

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`
for (var i = 0; i < brasilCopa.length; i++) {
  console.log("o brasil ganhou a copa de " + brasilCopa[i]);
}

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ["Banana", "Maçã", "Pera", "Uva", "Melância"];
for (var fruta = 0; fruta < frutas.length; fruta++) {
  console.log(frutas[fruta]);
  if (frutas[fruta] === "Pera") {
    break;
  }
}
console.log(frutas);

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array
var ultimaFruta = frutas[frutas.length - 1];
console.log(ultimaFruta);