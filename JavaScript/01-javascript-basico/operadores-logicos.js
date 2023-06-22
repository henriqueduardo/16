// operadores lógicos
// valores booleanos e condicionais - false/true
var possuiGraduacao = false;
var possuiDoutorado = true;

if (possuiGraduacao) {
  console.log("Possui graduação.");
} else if (possuiDoutorado) {
  console.log("Não possui graduação.");
}

// truthy/falsy - retornam true ou false se verificados em uma expressão boleeana

// valores falsy
if (false);
if (0);
if (NaN);
if (null);
if (undefined);
if ("");

// truthy
if (true);
if (1);
if (" "); // espaço
if ("duardokingkong");
if (-2);
if ({});

var nome = "edyardo";
if (nome) {
  console.log(nome);
} else {
  console.log("nome errado");
}

// passar ! na frente de uma expressão booleana p inverter > if(true) -- false
// verificar se é truthy ou false com !!
var possuiDoutorado2 = true;
if (!possuiDoutorado2) {
  console.log(possuiDoutorado2);
} else {
  console.log("não possui doutorado");
}

// comparar
10 > 5; // true
5 > 10; // false
20 < 10;
10 <= 10;
10 >= 11;
10 == 10; // usar sempre === pra verificar o valor

// operadores && -- comparar se uma expressão e outra é verdadeira
// se ambos valores forem true o ultimo valor será retornado, se for false ira retornar o mesmo e não ira verificar os próximos
true && true; // true
true && false; // false
false && true; // false
"Gato" && "Cachorro"; // "cachorro"
5 - 5 && 5 + 5; // 0
"Gato" && false; // false
5 >= 5 && 3 < 6; // true

// operadores || comparar se uma ou outra expressão é verdadeira - retorna o primeiro
true || true; // true
true || false; // true
false || true; // true
"Gato" || "Cachorro"; // 'Gato'
5 - 5 || 5 + 5; // 10
"Gato" || false; // Gato
5 >= 5 || 3 < 6; // true

var condicional2 = 5 - 5 || 5 + 5 || 10 - 2;
console.log(condicional2);

// switch --
var corFavorita = "Azul";

switch (corFavorita) {
  case "Azul":
    console.log("Olhe para o céu.");
    break; // parar caso seja true
  case "Vermelho":
    console.log("Olhe para rosas.");
    break;
  case "Amarelo":
    console.log("Olhe para o sol.");
    break;
  default:
    console.log("Feche os olhos");
}

// exercicio 04

// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
var idadeKingKong = 20;
var idadeParente = 12;

if(idadeKingKong > idadeParente) {
  console.log("é maior")
} else if(idadeKingKong === idadeParente) {
  console.log("é igual");
} else {
  console.log("é menor");
}

// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
console.log(expressao);

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre'; // truthy
var idadeExer = 28; // truthy
var possuiDoutorado = false; // falsy
var empregoFuturo; // falsy
var dinheiroNaConta = 0; // falsy
console.log(!!nome, !!idadeExer, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta);

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if(brasil > china) {
  console.log("brazuka +");
} else {
  console.log("perdemo");
}

// O que irá aparecer no console?
// falso
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
} 
