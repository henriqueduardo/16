// operador de atribuição
var x = 5;
var y = 10;
x += y; // x = x + y (15)
x -= y; // x = x - y (-5)
x *= y; // x = x * y (50)
x /= y; // x = x / y (0.5)
x %= y; // x = x % y (0)
x **= y; // x = x ** y (9765625)

// operador ternário - forma abreviada de if e else --  utilizado quando precisamos atribuir um valor para uma variável dependendo de uma condição -- pode ser qlqr coisa
// condição ? true : false
var idade = 19;
var podeBeber = (idade >= 18) ? 'Pode beber' : 'Não pode beber';
console.log(podeBeber) // pode beber

// if abreviado
var possuiFaculdade = true;
if(possuiFaculdade) console.log('Possui faculdade');
else console.log('Não possui faculdade');

// ou

if(possuiFaculdade)
  console.log('Possui faculdade');
else
  console.log('Não possui faculdade');

// exercicio 09

// Some 500 ao valor de scroll abaixo,
// atribuindo o novo valor a scroll
var scroll = 1000;
var quinhentos = 500
console.log(scroll += quinhentos)

// Atribua true para a variável darCredito,
// caso o cliente possua carro e casa.
// E false caso o contrário.
var possuiCarro = true;
var possuiCasa = true;
var darCredito;

var darCredito = (possuiCarro && possuiCasa);
console.log(darCredito);