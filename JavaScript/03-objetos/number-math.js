// construtores e objetos - number e math - construtora de números, todo número possui as propriedades e métodos do prototype de number e number também possui alguns métodos

// verificar se é um nan
console.log(Number.isNaN());

Number.isNaN(NaN); // true
Number.isNaN(4 + 5); // false

// verificar se é uma integral
Number.isInteger(20); // true
Number.isInteger(23.6); // false

// parseFloat() serve para retornarmos um número a partir de uma string. a string deve começar com um número, parseInt recebe também um segundo parâmetro que é o radix, 10 é para decimal.
// float possui decimal, integer não
parseFloat('99.50'); // mesma função sem o number
Number.parseFloat('99.50'); // 99.5
Number.parseFloat('100 Reais'); // 100
Number.parseFloat('R$ 100'); // NaN

parseInt('99.50', 10); // 99
parseInt(5.43434355555, 10); // 5
Number.parseInt('100 Reais', 10); // 100

// arrondar números com base no total de casas decimais
const preco = 2.99;
preco.toFixed(); // 3

const carro = 1000.455;
carro.toFixed(2) // 1000.46

const preco2 = 1499.49;
preco2.toFixed() // 1499

// transforma o número em uma string com base no Radix, usando o 10 para o sistema decimal
const precoRadix = 2.99;
precoRadix.toString(10); // '2.99'

// abs() retorna o valor absoluto, ou seja, transforma negativo em positivo. ceil() arredonda para cima, retornando sempre uma integral e floor para baixo. round() arredonda para o número integral mais próximo
Math.abs(-5.5); // 5.5
Math.ceil(4.8334); // 5
Math.ceil(4.3); // 5
Math.floor(4.8334); // 4
Math.floor(4.3); // 4
Math.round(4.8334); // 5
Math.round(4.3); // 4

// max() retorna o maior número de uma lista de argumentos, min() o menor número e random() um número aleatório entre 0 e 1
Math.max(5,3,10,42,2); // 42
Math.min(5,3,10,42,2); // 2

Math.random(); // 0.XXX
Math.floor(Math.random() * 100); // entre 0 e 100
Math.floor(Math.random() * 500);  // entre 0 e 500

// Número random entre 72 e 32
Math.floor(Math.random() * (72 - 32 + 1)) + 32; 
Math.floor(Math.random() * (max - min + 1)) + min;

// exercicio 05

// Retorne um número aleatório
// entre 1050 e 2000
console.log(Math.floor(Math.random() * (2000 - 1050 + 1)) + 1050);


// Retorne o maior número da lista abaixo
const numeros = '4, 5, 20, 8, 9';
const arrayNumeros = numeros.split(", ");
const numeroMax = Math.max(...arrayNumeros);
console.log(numeroMax);

// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ['R$ 59,99', ' R$ 100,222',
                     'R$ 230  ', 'r$  200'];

function limparPreco(preco) {
  preco = +preco.toUpperCase().replace("R$", "").trim().replace(",", ".");
  preco = +preco.toFixed(2);
  return preco;
}

let soma = 0;
listaPrecos.forEach((preco) => {
  soma += limparPreco(preco);
});

console.log(soma.toLocaleString("pt-BR", {style: "currency", currency: "BRL"}));

limparPreco(listaPrecos[1]);
