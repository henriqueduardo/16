// // array - armazenam uma coleção de elementos que podem ser strings, arrays, boolean, number, functions, objects e mais
// const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
// const precos = [49, 99, 69, 89];

// const dados = [new String('Tipo 1'), ['Carro', 'Portas', {cor: 'Azul', preco: 2000}], function andar(nome) { console.log(nome) }];

// dados[2]('Ford');
// dados[1][2].cor; // azul

// // construção - toda array herda os métodos e propriedades do protótipo do construtor array
// const carros = new Array('Corola', 'Mustang', 'Honda');

// carros[1] // Mustang
// carros[2] = 'Ferrari';
// carros[10] = 'Parati';
// carros.length; // 11

// // array.from - método utilizado para transformar array-like objects, em uma array.
// let li = document.querySelectorAll('li'); // NodeList
// li = Array.from(li); // Array

// // objeto para array
// const carros = {
//   0: 'Fiat',
//   1: 'Honda',
//   2: 'Ford',
//   length: 4,
// }

// const carrosArray = Array.from(carros);

// // verifica se o valor passado é uma array e retorna um valor booleano
// // let li = document.querySelectorAll('li'); // NodeList
// Array.isArray(li); // false

// li = Array.from(li); // Array
// Array.isArray(li); // true

// // a palavra chave new não é necessária para utilizar o construtor Array
// Array.of(10); // [10]
// Array.of(1,2,3,4); // [1,2,3,4]
// new Array(5); // [,,,,]
// Array(5); // [,,,,]
// Array(1,2,3,4); // [1,2,3,4]

// // propriedades e métodos
// const frutas = ['Banana', 'Pêra', ['Uva Roxa', 'Uva Verde']]; // 1, 2 ,3 - array dentro de array
// frutas.length; // 3 - retornar o tamanho da array

// frutas[0].length; // 6 - retorna o número de caracteres do indice indicado [0]
// frutas[1].length; // 4
// frutas[2].length; // 2

// // métodos moficadores - além de retornarem um valor, eles modificam a array original. [].sort() organiza a pelo unicode
// const instrumentosDois = ['Guitarra', 'Baixo', 'Violão'];
// instrumentosDois.sort();
// instrumentosDois; // ['Baixo', 'Guitarra', Violão]

// const idades = [32,21,33,43,1,12,8]; // organiza de acordo com os caracteres - 1, 1, 2, 2
// idades.sort();
// idades; // [1, 12, 21, 32, 33, 43, 8]

// //
// const carros = ['Ford', 'Fiat', 'VW'];
// carros.unshift('Honda', 'Kia'); // 5
// carros; // ['Honda', 'Kia', 'Ford', 'Fiat', 'VW'];

// carros.push('Ferrari'); // 6
// carros; // ['Honda', 'Kia', 'Ford', 'Fiat', 'VW', 'Ferrari'];

// //
// const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
// const primeiroCarro = carros.shift(); // 'Ford' - remove o primeiro elemento e retorna o mesmo
// carros; // ['Fiat', 'VW', 'Honda'];

// const ultimoCarro = carros.pop(); // 'Honda' - remove o último elemento e retorna o mesmo
// carros; // ['Fiat', 'VW'];

// carros.reverse(); // ['Honda', 'VW', 'Fiat', 'Ford']; - inverte os itens e retorna o mesmo

// // adiciona valores na array a partir do index. remove a quantidade de itens que for passada no segundo parâmetro (retorna esses itens).
// carros.splice(1, 0, 'Kia', 'Mustang'); // []
// carros; // ['Ford', 'Kia', 'Mustang', 'Fiat', 'VW', 'Honda']

// carros.splice(3, 2, 'Ferrari'); // ['Fiat', 'VW']
// carros; // ['Ford', 'Kia', 'Mustang', 'Ferrari', 'Honda']

// // [].copyWithin(alvo, inicio, final) a partir do alvo, ele irá copiar a array começando do inicio até o final e vai preencher a mesma com essa cópia, caso omita os valores de início e final, ele irá utilizar como inicio o 0 e final o valor total da array
// ['Item1', 'Item2', 'Item3', 'Item4'].copyWithin(2, 0, 3);
// // ['Item1', 'Item2', 'Item1', 'Item2']

// ['Item1', 'Item2', 'Item3', 'Item4'].copyWithin(-1);
// // ['Item1', 'Item2', 'Item3', 'Item1']

// // [].fill(valor, inicio, final) preenche a array com o valor, do início até o fim - substitui os valores
// ['Item1', 'Item2', 'Item3', 'Item4'].fill('Banana');
// // ['Banana', 'Banana', 'Banana', 'Banana']

// ['Item1', 'Item2', 'Item3', 'Item4'].fill('Banana', 2);
// // ['Item1', 'Item2', 'Banana', 'Banana']

// ['Item1', 'Item2', 'Item3', 'Item4'].fill('Banana', 1, 3);
// // ['Item1', 'Banana', 'Banana', 'Item4']

// // concatenar array
// const transporte1 = ['Barco', 'Aviao'];
// const transporte2 = ['Carro', 'Moto'];
// const transportes = transporte1.concat(transporte2);
// // ['Barco', 'Aviao', 'Carro', 'Moto'];

// const maisTransportes = [].concat(transporte1, transporte2, 'Van');
// // ['Barco', 'Aviao', 'Carro', 'Moto', 'Van'];

// //
// const linguagens = ['html', 'css', 'js', 'php', 'python', 'js'];

// linguagens.includes('css'); // true - verifica se a array possui o valor e retorna true ou false
// linguagens.includes('ruby'); // false
// linguagens.indexOf('python'); // 4 - verifica se a array possui o valor o 1 que for encontrado
// linguagens.indexOf('js'); // 2
// linguagens.lastIndexOf('js'); // 5 - retorna o index do último

// // exemplo --
// let htmlString = '<h2>Título Principal</h2>'
// htmlString = htmlString.split('h2');
// // ['<', '>Título Principal</', '>']
// htmlString = htmlString.join('h1');
// // <h1>Título Principal</h1>

// // [].slice(inicio, final) retorna os itens da array começando pelo início e indo até o valor de final
// linguagens.slice(3); // ['php', 'python']
// linguagens.slice(1, 4); // ['css', 'js', 'php']

// const cloneLinguagens = linguagens.slice(); // copipar array

// exercicio 06

const comidas = ["Pizza", "Frango", "Carne", "Macarrão"];
// Remova o primeiro valor de comidas e coloque em uma variável
// Remova o último valor de comidas e coloque em uma variável
// Adicione 'Arroz' ao final da array
// Adicione 'Peixe' e 'Batata' ao início da array

const primeiro = comidas.shift();
const ultimo = comidas.pop();
const add = comidas.push("Arroz");
const addInicio = comidas.splice(0, 0, "Peixe", "Batata");
console.log(comidas);

const estudantes = ["Marcio", "Brenda", "Joana", "Kleber", "Julia"];
// Arrume os estudantes em ordem alfabética
// Inverta a ordem dos estudantes
// Verifique se Joana faz parte dos estudantes
// Verifique se Juliana faz parte dos estudantes
console.log(estudantes.sort());
console.log(estudantes.reverse());
console.log(estudantes.includes("Joana"));
console.log(estudantes.includes("Juliana"));

let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`;
// Substitua section por ul e div com li,
// utilizando split e join
html = html.split("section");
html = html.join("ul");
html = html.split("div");
html = html.join("li");
console.log(html);

const carros = ["Ford", "Fiat", "VW", "Honda"];
// Remova o último carro, mas antes de remover
// salve a array original em outra variável
carrosDois = carros.slice();
carros.pop();
console.log(carrosDois, carros);
