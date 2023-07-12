// Exercício: Modificar texto do elemento HTML

// Crie uma página HTML com um botão e um parágrafo vazio <p id="mensagem"></p>.
// Usando JavaScript, faça com que, ao clicar no botão, o texto do parágrafo seja alterado para "Olá, mundo!".
function initParagrafo() {
  const paragrafo = document.querySelector("#mensagem");
  const btn = document.querySelector("button");

  function activeHTML() {
    paragrafo.innerHTML = "Olá, mundo";
  }
  btn.addEventListener("click", activeHTML);
}
// Exercício: Adicionar elementos ao DOM

// Crie uma página HTML com uma lista vazia <ul id="lista"></ul> e um botão.
// Usando JavaScript, adicione 5 itens à lista quando o botão for clicado. Os itens podem ser, por exemplo, "Item 1", "Item 2", ..., "Item 5".
const listaBtn = document.querySelector(".btn-lista");
const lista = document.querySelector(".lista");

function itemAdd() {
  const item = document.createElement("li"); // criar li
  item.innerHTML = "novo item lista"; // texto da li
  lista.appendChild(item); // adicionar a lista
}

listaBtn.addEventListener("click", itemAdd);

// Exercício: Contador de cliques

// Crie uma página HTML com um botão e uma caixa de texto vazia <input type="text" id="contador" readonly>.
// Usando JavaScript, faça com que, ao clicar no botão, o valor na caixa de texto aumente em 1 a cada clique.
const contador = document.querySelector(".contador");

function activeContador() {
  const input = document.querySelector(".input-contador");
  let valor = parseInt(input.value);
  valor++;
  input.value = valor;
}

contador.addEventListener("click", activeContador);

// Exercício: Trocar a cor de fundo

// Crie uma página HTML com um botão.
// Usando JavaScript, faça com que, ao clicar no botão, o fundo da página mude aleatoriamente para uma cor diferente.
const btnCor = document.querySelector(".btn-cor");

function activeCores() {
  btnCor.classList.toggle("bg");
}

btnCor.addEventListener("click", activeCores);

// Exercício: Objeto de filme

// Crie um objeto chamado filme com as propriedades titulo, ano e genero.
// Preencha as propriedades do objeto com informações de um filme de sua escolha.
// Em seguida, exiba essas informações em uma página HTML formatada.
const filmes = {
  nome: "Happy Feet",
  ano: 2006,
  genero: "Infantil & Comédia"
};

document.getElementById("titulo").textContent = filmes.nome;
document.getElementById("ano").textContent = filmes.ano;
document.getElementById("genero").textContent = filmes.genero;

// Exercício: Lista de objetos

// Crie uma lista de objetos, onde cada objeto representa um estudante com as propriedades nome, idade e curso.
// Adicione pelo menos 3 estudantes à lista.
// Crie uma tabela HTML e exiba os detalhes de cada estudante em linhas separadas.






// Exercício: Contador de palavras

// Crie uma página HTML com uma caixa de texto <textarea> e um botão.
// Ao clicar no botão, conte o número de palavras no texto inserido no <textarea>.
// Exiba o resultado em um elemento <p>.
