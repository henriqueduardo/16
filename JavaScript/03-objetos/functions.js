// functions

// exercicio 08

// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce
const paragrafos = document.querySelectorAll("p");

const totalLetras = Array.prototype.reduce.call(paragrafos, (acumulador, i) => {
  return acumulador + i.innerText.length;
}, 0);
console.log(totalLetras); 


// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.
function novoElemento(tag, classCss, content) { // parametros
  const element = document.createElement(tag);
  classCss ? element.classList.add(classCss) : ""; // vericar se existe alguma classe
  content ? element.innerHTML = content : "";
  return element;
}
console.log(novoElemento("section", "kingkong", "teste"));

// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico
const tituloH1 = novoElemento.bind(null, "h1", "titulo");

const testeUm = tituloH1("teste1");
const testeDois = tituloH1("teste2");

console.log(testeUm, testeDois);