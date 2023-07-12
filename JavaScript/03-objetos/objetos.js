// object -
const pessoa = new Object({
  nome: "eduardo",
});

const carro = {
  marca: "mazda",
  rodas: 4,
  acelerar() {
    return this.marca + " acelerou";
  },
  buzinou() {
    return this.marca + " buzinou";
  },
};
console.log(carro);

const honda = Object.create(carro); // novo objeto que herda propriedades e as exibe no prototipo

// outro exemplo - retorna um novo objeto que terá como protótipo o objeto do primeiro argumento
// const carro = {
//   rodas: 4,
//   init(marca) {
//     this.marca = marca;
//     return this;
//   },
//   acelerar() {
//     return `${this.marca} acelerou as ${this.rodas} rodas`;
//   },
//   buzinar() {
//     return this.marca + ' buzinou';
//   }
// }

// const honda = Object.create(carro);
// honda.init('Honda').acelerar();

// object assign -  adiciona ao alvo as propriedades e métodos enumeráveis dos demais objetos, o assign irá modificar o objeto alvo
const funcaoAutomovel = {
  acelerar() {
    return "acelerou";
  },
  buzinar() {
    return "buzinou";
  },
};

const moto = {
  rodas: 2,
  capacete: true,
};

const carroAssign = {
  rodas: 4,
  mala: true,
};

Object.assign(moto, funcaoAutomovel); // passar propriedades direto pro objeto - * substitui caso exista *
Object.assign(carroAssign, funcaoAutomovel);

const jdm = {};

Object.defineProperties(jdm, {
  rodas: {
    value: 4,
    configurable: false, // configurável ou não - deletar ou alterar valor
  },
});

// get e set - é possível definirmos diferentes comportamentos para get e set de uma propriedade, ao acionarmos uma propriedade obj.propriedade, a função get é ativada e ao setarmos ob.propriedade = 'Valor' a função de set é ativada.

const moto2 = {};
Object.defineProperties(moto2, {
  velocidade: {
    get() {
      return this._velocidade;
    },
    set(valor) {
      this._velocidade = "Velocidade " + valor;
    },
  },
});

moto2.velocidade = 200;
moto2.velocidade; // 200

// Object.getOwnPropertyDescriptors() - ver todos os métodos e propriedades de um objeto, com as suas devidas configurações
Object.getOwnPropertyDescriptors(Array);
// Lista com métodos e propriedades e Array

Object.getOwnPropertyDescriptors(Array.prototype);
// Lista com métodos e propriedades do protótipo de Array

Object.getOwnPropertyDescriptor(window, "innerHeight");
// Puxa de uma única propriedade

// exercicio 09

// Crie uma função que verifique
// corretamente o tipo de dado
function verificarDado(dado) {
  return Object.prototype.toString.call(dado);
}

console.log(verificarDado("")); // verica o item que esta no () // string

// Crie um objeto quadrado com
// a propriedade lados e torne
// ela imutável
const quadrado = {};

// definir as propriedades do objeto de forma "direta"
Object.defineProperties(quadrado, {
  lados: {
    value: 4,
  },
});

quadrado.lados = 6;
console.log(quadrado);

// Previna qualquer mudança
// no objeto abaixo
const configuracao = {
  width: 800,
  height: 600,
  background: "#333",
};

configuracao.height = 777;
console.log(configuracao);

Object.freeze(configuracao); // tudo que estiver abaixo desse código não será alterado
configuracao.height = 888;

// Liste o nome de todas
// as propriedades do
// protótipo de String e Array
console.log(Object.getOwnPropertyNames(String.prototype));
console.log(Object.getOwnPropertyNames(Array.prototype));
