
// Tipagem Estatica -> Definição de um tipo a cada variavel (Java, C, C++, TypeScript)
// Tipagem Dinamica -> O tipo da variavel é definido de acordo com seu valor (JavaScript, Python)

// typeof -> Operador que retorna o tipo da variavel

let variavel = 22;
console.log(typeof variavel); // number

variavel = 78.96;
console.log(typeof variavel); // number

variavel = "Prof. Gabriel";
console.log(typeof variavel); // string

variavel = true;
console.log(typeof variavel); // booleano

variavel = { nome: "Gabriel", idade: 21 }; // object
console.log(typeof variavel);

variavel = [1, 2, 3, 4, 3, 5];
console.log(typeof variavel); // object

variavel = function() { return 1 }
console.log(typeof variavel); // function

variavel = undefined; // indefinido
console.log(variavel); // undefined

variavel = null; // nulo
console.log(variavel); // null

variavel = NaN; // Not a number (numero)
console.log(variavel); // NaN