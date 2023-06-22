// objetos - tudo é objeto nessa porra >> console é um objeto e log() um método -> console.log
// objetos são para organizar o código em pequenas partes reutilizáveis

// conjunto de variaveis e funções que são >> propriedades e metodos 
// o objeto tem acesso a variaveis q estão fora do escopo
var gorila = {
  nome: "Eduardo",
  idade: 20,
  profissao: "programador gorla muita foda",
  possuiFaculdade: true
}
console.log(typeof gorila);

// conferir propriedade 
console.log(gorila.nome);

// metódos é uma propriedade que possui uma função no local do seu valor 
var quadrado = {
  lados: 4,
  area: function(lado) {
    return lado * lado;
  },
  perimetro: function(lado) {
    return this.lados * lado; // tb é possível passar o objeto para dentro do metódo com >> this
  }
}

quadrado.lados; // 4
quadrado.area(5); // 25
quadrado.perimetro(5); // 20

//
Math.random();
console.log(Math.PI)

// this faz uma referência ao próprio objeto -- 
var height = 120;
var menu = {
  width: 800,
  height: 50,
  metadeHeight() {
    return this.height / 2;
  }
}
menu.metadeHeight(); // 25 -- sem o this, seria 60

// exercicio 06

// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
const gorilaDois = {
  nomeDois: "duardokngkong",
  sobrenome: "rosendo petrolli",
  idadeDois: 20,
  email: "duardohenriqe19@gmail.com",
  nomeCompleto: function(nomeDois, sobrenome) {
   return nomeDois + " " +sobrenome;
  }
}
// Crie um método no objeto anterior, que mostre o seu nome completo
const nomeCompleto = gorilaDois.nomeCompleto(gorilaDois.nomeDois, gorilaDois.sobrenome);
console.log(nomeCompleto);

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
  novoPreco: function(preco) {
    return this.preco = 3000;
  }
}
console.log(carro.novoPreco());

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem
var cachorro = {
  nome: "kingkong jr",
  raça: "labrador",
  cor: "pretao",
  cachorroIdade: "10",
  late(pessoa) {
    if(pessoa === "homem") {
      return "late"
    } else {
      return "nao late"
    }
  }
}


