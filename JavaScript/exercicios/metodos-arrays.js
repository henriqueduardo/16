/*
  01

  - Gere um novo array com apenas os números ímpares do array abaixo. 
  - Exiba o novo array no console.

  Dica: pesquise por remainder operator (%).
*/

const randomNumbers = [10, 30, 15, 25, 50, 40, 5];
const impar = randomNumbers.filter((num) => num % 2 !== 0);
console.log(impar);

/*
  02

  - Exiba no console quantos números abaixo de 501 o array abaixo possui.
*/
// filtar array e métodos
const crazyNumbers = [937, 5, 395, 402, 501, 333, 502, 781, 3, 691];
const menor = crazyNumbers.filter((num) => num <= 501);
console.log(menor);
/*
  03

  - Gere um novo array com cada um dos números abaixo elevados ao quadrado e 
    exiba o novo array no console.

  
  Dica: pesquise por exponentiation operator (**).
*/

const numbers = [5, 7, 3];
const numeroElevados = numbers.map((num) => num ** 2); // mapear e elevar cada número ao quadrado
console.log(numeroElevados);

/*
  04

  - Utilizando o array abaixo, gere um novo array com apenas os filmes 
    lançados antes do ano 2000;
  - Exiba o novo array no console.
*/

const tarantinoMovies = [
  { name: "Bastardos inglórios", release: 2009 },
  { name: "Pulp Fiction", release: 1994 },
  { name: "Kill Bill: Volume 2", release: 2004 },
  { name: "Quatro Quartos", release: 1995 },
  { name: "Sin City", release: 2005 },
  { name: "Era uma Vez em... Hollywood", release: 2019 },
  { name: "Django Livre", release: 2012 },
  { name: "Cães de Aluguel", release: 1992 },
  { name: "À Prova de Morte", release: 2007 },
  { name: "Kill Bill: Volume 1", release: 2003 },
];

// acessar propriedade do array (arrow-function)
const filmes = tarantinoMovies.filter((ano) => ano.release < 2000);
console.log(filmes);

/*
  05

  - Gere um novo array que contém apenas os nomes das séries abaixo;
  - Exiba o novo array no console.
*/

const tvShows = [
  { name: "Breaking Bad", releaseYear: 2008 },
  { name: "Mr. Robot", releaseYear: 2015 },
  { name: "True Detective", releaseYear: 2014 },
  { name: "Hannibal", releaseYear: 2013 },
  { name: "The Handmaid's Tale", releaseYear: 2017 },
  { name: "House M.D.", releaseYear: 2004 },
  { name: "Watchmen", releaseYear: 2019 },
];

const nomeSeries = tvShows.map((nome) => nome.name); // pegar somente nome da séries
console.log(nomeSeries);

/*
  06

  - Exiba no console uma lista dos nomes dos jogos do array abaixo;
  - A lista deve ter a formatação exemplificada abaixo do array, considerando 
    inclusive o traço e o espaço antes de cada nome.
*/

const cart = [
  { name: "Dark Souls III", price: 95.03 },
  { name: "Shadow of the Tomb Raider", price: 101.19 },
  { name: "Sekiro: Shadows Die Twice", price: 179.99 },
  { name: "Resident Evil 2", price: 119.9 },
  { name: "Death Stranding", price: 149.99 },
];

// foreach de quebra
cart.forEach((jogo) => {
  return console.log(" - " + jogo.name);
})