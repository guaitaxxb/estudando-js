
//Escreva um programa que verifique se um número é positivo, negativo ou zero e exiba uma mensagem correspondente.
// let num = -5;

// if (num >= 0) {
//     console.log("Maior que zero");
// } else if(num < 0) {
//     console.log("Menor que zero");  
// }


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Crie um programa que receba a idade de uma pessoa e verifique se ela é maior de idade (18 anos ou mais) ou menor de idade.

// let num7 = 5;

// if (num7 >= 18) {
//     console.log("É maior de idade");
// } else if (num7 < 18) {
//     console.log("É menor de idade");
// }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// //Escreva um programa que receba três números e determine qual deles é o maior.

// let a = 50;
// let b  = 87;
// let c = 12;

// if(a > b && a > c) {
//     console.log("Mario numero é" + a)
// }
// else if ( b> a && b>c ) {
//     console.log("Maior numero é" + b)
// }
// else if (c > a && c>) {
//     console.log ("O número maior é" + c)
// }
// else {
//     console.log("O maior numero esta duplicado")
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Crie um programa que receba dois números e verifique se seu produto é par ou ímpar.

// let num1 = 15
// let num2 = 4
// let produto = num1 * num2;

// if (produto % 1 ==0){
//     console.log(produto + "é Par")
// }
// else {
//     console.log(produto + "é Impar")
// }





//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Escreva um programa que receba o nome de um dia da semana e exiba se é um dia útil ou um fim de semana.

let dia2 = "Segunda"

if(dia == "Segunda-feira" || dia == "Terça-feira" || dia == "Quarta-feira"|| dia == "Quinta-feira" || dia == "Sexta-feira") {
    console.log( dia + "é um dia util")
}
else if(dia == "domingo" || dia =="sabado") {
    console.log(dia + "é final de semana")
}
else {
    console.log("Digite o dia da semana coerentes!")
}


// let dia = "segunda";
// if(dia == "segunda") {
//     console.log("é um dia util");
// }
// else if (dia == "terca") {
//     console.log("é um dia util");
// }
// else if (dia == "quarta") {
//     console.log("é um dia util");
// }
// else if (dia == "quinta") {
//     console.log("é um dia util");
// }
// else if (dia == "sexta") {
//     console.log("é um dia util");
// }
// else if(dia == "sabado") {
//     console.log("É um final de semana");
// }
// else if(dia == "domingo") {
//     console.log("É um final de semana");
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Faça um programa que receba um número de 1 a 7 e exiba o dia da semana correspondente (1 - domingo, 2 - segunda-feira, etc.).

let DIA = 9;
switch(mes2) {
    case 1:
        console.log("Domingo");
        break; 
    case 2:
        console.log("Segunda");
        break;
    case 3:
        console.log("Terça");
        break;
    case 4:
        console.log("Quarta");
        break;
    case 5:
        console.log("Quinta");
        break;
    case 6:
        console.log("Sexta");
        break;
    case 7:
        console.log("Sabado");
        break;
        break;
    default:
        console.log("Este numero não corresponde em dias da semana");
        break;
}