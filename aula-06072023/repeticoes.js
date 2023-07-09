// Estruturas de Repetições

// console.log(1);
// console.log(2);
// ..
// console.log(10);

// incrementa o valor de numero em uma unidade
console.log("=================");
for(let numero = 0; numero < 10; numero++) {
    // console.log(numero);
}

// incrementa o valor de numero em duas unidades
console.log("=================");
for(let numero = 0; numero < 10; numero += 2) {
    // console.log(numero);
}

// contagem regressiva
console.log("=================");
for(let numero = 10; numero >= 0; numero--) {
    // console.log(numero);
}

// for(atribuicao; condicao; reatribuicao) {
//      codigo de repeticao 
// }


// for(let numero = 0; numero < 100;) {
//     numero++;
//     console.log(numero);
// }


// loop infinito
// let n = 0;
// while(n < 17) {
//     console.log("SoulCode + Porto");
//     n++;
// }

// for -> Uma quantidade de repetições determinadas
// while -> Uma quantidade de repetições indeterminadas
// i -> iteração

let num = 693;
let ePrimo = true;
for(let i = 2; i < num; i++) {
    if(num % i == 0) {
        ePrimo = false;
    }
}

if(ePrimo) {
    console.log("É primo!!");
}
else {
    console.log("N é primo!!");
}