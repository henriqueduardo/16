// números - operadores aritméticos
var idade = 20;
console.log(idade)

// NaN - not a number
var numeroString = 10 / "dois";
console.log(numeroString)

var numero = 67;
var unidade = "kg";
var peso = numero + unidade; 
var pesoDividido = peso / 2;
console.log(isNaN(pesoDividido)); // verificar se é um NaN

// transformar string em number
var numeroString = "200";
var somaNumber = 5;
console.log(+numeroString + somaNumber); // passar o operador na frente da variável ( +, -)

// ordem é importante (escopo) - priorizar uma expressão com ( )
var soma1 = 10 + 10 + 20 + 30 * 4 / (2 + 10);
console.log(soma1);

// ++ incrimentar um valor em 1
var x = 7;
console.log(x++);
console.log(x);

// exercicio 03

// Qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20; // 35
console.log(total); 

// Crie duas expressões que retornem NaN
var nan1 = "19e" / 3;
console.log(nan1);

// Somar a string '200' com o número 50 e retornar 250
var duzentos = "200";
var cinquenta = 50;
var somaString = +duzentos + cinquenta;
console.log(somaString);

// Incremente o número 5 e retorne o seu valor incrementado
var numeroCinco = 5;
console.log(++numeroCinco);

// Como dividir o peso por 2?
var numeroExer = +'80' / 2;
var unidade = "kg";
var pesoExer = numeroExer + unidade;
console.log(pesoExer);
