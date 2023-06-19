// objetos - strings, números, boolean, objetos e mais, possuem propriedades e métodos, sendo assim >> considerados objetos
// permitem a interação entre o navegador e o javascript - web apis
// métodos vão ser listados após ser colocado um . exem -->> objeto. 
var nome = "EDUARDO";
var nomePequeno = nome.toLowerCase(); // método

// elementos - DOM - todos os efeitos com javascript são feitos utilizando propriedades e métodos de objetos do DOM 

// <a class="btn" href="">Clique</a>
var btn = document.querySelector('.btn'); // selecionar o elemento -->> (".btn") seletor
btn.classList.add('azul') // adiciona a classe azul
btn.innerText; // "Clique"
btn.addEventListener('click', function() {
  console.log('clicou troxa');
})

// exercicio 07

// nomeie 3 propriedades ou métodos de strings
nome.length;
nome.toUpperCase;
nome.replace;
// nomeie 5 propriedades ou métodos de elementos do DOM
btn.innerHTML;
btn.className;
btn.querySelector;
btn.setAttribute;
btn.addEventListener;
// busque na web um objeto (método) capaz de interagir com o clipboard, 
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V
function getPasteData(e) {
  const clipboardData = e.clipboardData || window.clipboardData;
  const pastedData = clipboardData.getData("texto");
  console.log(pastedData);
}
document.querySelector('#element').addEventListener('paste', getPasteData);
