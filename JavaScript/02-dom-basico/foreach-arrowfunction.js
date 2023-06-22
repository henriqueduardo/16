// const imgs = document.querySelectorAll("img");
// função anonima -- qualquer nome nos argumentos ()
// imgs.forEach(function(item, index, array) {
//   console.log(item, index, array)
// });

// o primeiro parâmetro é o callback que é a função que será ativada a cada item, essa função pode receber váriso parâmetros
// const imgs = document.querySelectorAll('img');

// imgs.forEach(function(valorAtual, index, array){
//   console.log(item); // o item atual no loop
//   console.log(index); // o número do index
//   console.log(array); // array inteira
// });

// transformar algo que não é um array em um array
const titulos = document.getElementsByClassName('titulo');
// converter um htmlcollecton para -> array
const titulosArray = Array.from(titulos);
titulosArray.forEach(function(item){
  console.log(item);
});

// arrow functions - é uma função com uma sintaxe mais curta, simplesmente uma função que recebe => no lugar da palavra function

// se possível utilizar parênteses
// parâmetro único não precisa de parênteses - se tiver apenas um parâmetro não é precisa parênteses 
// imgs.forEach(item => {
//   console.log(item);
// });

// se houver mais de um parâmetros, colocar parênteses
// imgs.forEach((item, index) => {
//   console.log(item, index);
// });

// mesmo que não tenha parâmetros colocar parênteses, não pode ficar vázio
// let i = 0;
// imgs.forEach(() => {
//   console.log(i++);
// });


// const imgs = document.querySelectorAll('img');
// imgs.forEach((item) => {
//   console.log(item);
// });

// se o código possuir apenas uma linha é possível tirar as {} e retornar o resultado direto - não fechar a linha com ; nesse caso
// imgs.forEach(item => console.log(item));

// exercicio 03

// Mostre no console cada parágrado do site
// Mostre o texto dos parágrafos no console
const paragrafos = document.getElementsByTagName("p"); // selecionar todos paragrafos
const paragrafosArray = Array.from(paragrafos); // converter para um array
paragrafosArray.forEach(function(item){
  console.log(item.innerText); // retornar cada paragrafo como um único item e texto separados
});
console.log(paragrafosArray); // retorna um array com todos paragrafos

// // Como corrigir os erros abaixo:
const imgs = document.querySelectorAll('img');

imgs.forEach((item, index) => {
  console.log(item, index);
});

let i = 0;

imgs.forEach(() => {
  console.log(i++);
});

imgs.forEach(() => i++);


