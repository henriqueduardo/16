// é a construtora de strings, toda string possui as propriedades e métodos do prototype de String
const comida = "Pizza";
const liquido = new String("Água");
const ano = new String(2018);

// propriedades
const frase = "A melhor comida";

comida.length; // 5
frase.length; // 15

comida[0]; // P
frase[0]; // A
frase[frase.length - 1]; // como o índice sempre é 0, usar -1 // a

// concatenar strings
const frase2 = "A melhor linguagem é ";
const linguagem = "JavaScript";

const fraseCompleta = frase2.concat(linguagem, "!!");
console.log(fraseCompleta);

// procurar pela string exata dentro de outra string. A procura é case sensitive.
const fruta = "Banana";
const listaFrutas = "Melancia, Banana, Laranja";

listaFrutas.includes(fruta); // true
fruta.includes(listaFrutas); // false

// slice - corta a string de acordo com os valores de start e end
const transacao1 = "Depósito de cliente";
const transacao2 = "Depósito de fornecedor";
const transacao3 = "Taxa de camisas";

transacao1.slice(0, 3); // Dep
transacao2.slice(0, 3); // Dep
transacao3.slice(0, 3); // Tax

transacao1.slice(12); // cliente
transacao1.slice(-4); // ente
transacao1.slice(3, 6); // ósi

// indexof - retorna o índice da string, assim que achar o primeiro resultado ele já retorna, no caso do lastIndexOf ele retorna o último resultado
const instrumento = "Pianofoda";

instrumento.indexOf("i");
instrumento.lastIndexOf("n");
instrumento.indexOf("pi");

// padStart - aumenta o tamanho da string para o valor de n. Ou seja, uma string com 8 caracteres, se passarmos n = 10, ela passará a ter 10 caracteres. O preenchimento é feito com espaços, caso não seja declarado o segundo argumento.
const listaPrecos = ["R$ 99", "R$ 199", "R$ 12000"];

listaPrecos.forEach((preco) => {
  console.log(preco.padStart(10, "."));
});

listaPrecos[0].padStart(10, "."); // .....R$ 99
listaPrecos[0].padEnd(10, "."); // R$ 99.....

// repeat - repete a string
const fraseRepeat = "Ta";

fraseRepeat.repeat(5); // TaTaTaTaTa

// replace (regex) - troca parte da string por outra. podemos utilizar uma regular expression ou um valor direto, se usarmos um valor direto ele irá trocar apenas o primeiro valor que encontrar
let listaItens = "Camisas Bonés Calças Bermudas Vestidos Saias";
listaItens = listaItens.replace(/[ ]+/g, ", "); // exemplo real (regex)
console.log(listaItens);

let preco = "R$ 1200,43";
preco = preco.replace(",", "."); // 'R$ 1200.43'

// split - divide a string de acordo com o padrão passado e retorna uma array
const listaItens2 = "Camisas Bonés Calças Bermudas Vestidos Saias";
const arrayItens = listaItens2.split(" ");

const htmlText = "<div>O melhor item</div><div>A melhor lista</div>";
const htmlArray = htmlText.split("div"); // join - método de array
const htmlNovo = htmlArray.join("section");

// lower, uppercase - retorna a string em letras maiúsculas ou minúsculas, usado para verificarmos input de usuários
const sexo1 = "Feminino";
const sexo2 = "feminino";
const sexo3 = "FEMININO";

sexo1.toLowerCase() === "feminino"; // true
sexo2.toLowerCase() === "feminino"; // true
sexo3.toLowerCase() === "feminino"; // true

// trim - remover espaços
const valor = "  R$ 23.00   ";
valor.trim(); // 'R$ 23.00'
valor.trimStart(); // 'R$ 23.00   '
valor.trimEnd(); // '  R$ 23.00'

// exercicio 04

// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoesDois = [
  {
    descricao: "Taxa do Pão",
    valor: "R$ 39",
  },
  {
    descricao: "Taxa do Mercado",
    valor: "R$ 129",
  },
  {
    descricao: "Recebimento de Cliente",
    valor: "R$ 99",
  },
  {
    descricao: "Taxa do Banco",
    valor: "R$ 129",
  },
  {
    descricao: "Recebimento de Cliente",
    valor: "R$ 49",
  },
];

let taxaTotal = 0;
let recebimentoTotal = 0;
transacoesDois.forEach((item) => {
  // cada item
  const numeroLimpo = +item.valor.replace("R$ ", ""); // retirar R$
  if (item.descricao.slice(0, 4) === "Taxa") {
    // somar números que possuem taxa
    taxaTotal += numeroLimpo;
  } else {
    recebimentoTotal += numeroLimpo;
  }
});

// Retorne uma array com a lista abaixo
const transportes = "Carro;Avião;Trem;Ônibus;Bicicleta";
console.log(transportes.split(";"));

// Substitua todos os span's por a's
let html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`;

html = html.split("span").join("a");
console.log(html);

// Retorne o último caracter da frase
const fraseExer = "Melhor do ano!";
console.log(fraseExer.charAt(fraseExer.length - 1));

// Retorne o total de taxas
const transacoesExer = [
  "Taxa do Banco",
  "   TAXA DO PÃO",
  "  taxa do mercado",
  "depósito Bancário",
  "TARIFA especial",
];

let taxasTotal = 0;
transacoesExer.forEach((item) => {
  item = item.toLocaleLowerCase();
  item = item.trim();
  item = item.slice(0, 4);
  if (item === "taxa") {
    taxasTotal++
  }
})

console.log(taxasTotal);


