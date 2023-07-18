// Escreva um programa que receba um texto e calcule a quantidade de letra de "a". O programa deve considerar maisculas e minusculas.
let texto = "Hoje fui na casa de Ana e jogamos Valorant.";
let numerosDeA = 0;
for(let i = 0; i < texto.length; i++) {
    if(texto.charAt(i) == "A" || texto.charAt(i) == "a") {
        numerosDeA++;
    }
}
console.log(texto + " tem " + numerosDeA + " 'A's");

// Escreva um programa que calcule a raiz quadrada de um número e mostre na tela.
let num = 81;
console.log("A raiz quadrada de " + num + " é " + Math.sqrt(num));
console.log("A raiz cubica de " + 27 + " é " + Math.cbrt(27)); 
console.log(32 ** (1/5)); // raiz quintupla de 32

// Escreva um programa que  arredonde um número para o inteiro mais próximo.
num = 24.2579;
console.log(num + " arredondando para o mais proximo é " + Math.round(num));

// Escreva um programa que  calcule o valor absoluto de um número.
num = -89;
console.log("O valor absoluto de " + num + " é " + Math.abs(num));

// Escreva um programa que  gere um número aleatório entre 10 e 20.
let numRandom = Math.floor(Math.random() * (20 - 10 + 1) + 10);
console.log("Numero randomico " + numRandom);

// Arredonde um número para um número específico de casas decimais.
num = 56.78634342;
console.log(num + " arredondando para duas casas deciamais é " + num.toFixed(2));

// Escreva um programa que  converta uma string para um número decimal e arredonde para o número inteiro anterior.
num = "45.23694";
let numArrend = Math.floor(Number(num));
console.log(num + " arredondando para o anterior é " + numArrend);

// Verifique se um número é um valor finito, infinito, NaN ou não.
num = NaN;
if(isNaN(num)) {
    console.log("Not a Number");
}
else {
    console.log("Number");
    if(isFinite(num)) {
        console.log("Finite");
    }
    else {
        console.log("Infinity");
    }
}

// Escreva um programa que verifique se a string "ba" contém em outra string.
texto = "Minha mãe fez doce de jaca mais eu gosto é de doce de leite.";
if(texto.includes("ba")) {
    console.log("Contém 'ba'");
}
else {
    console.log("Não contém 'ba'");
}

// Escreva um programa que converte uma string para letras maiúsculas e para letras minúsculas e mostre na tela.
console.log(texto);
console.log(texto.toUpperCase());
console.log(texto.toLowerCase());

// Extraia uma parte específica de uma string com base em índices.
console.log("De 0 a 18 tem-se '" + texto.substring(0, 18) + "'");

// Substitua todas as ocorrências de uma substring por outra em uma string.
console.log(texto.replaceAll("jaca", "banana"));

// Remova espaços em branco extras no início e no final e no final de uma string.
console.log(texto.trim());

// Inverta uma string. Utilize o laço for.
let textoInvertido = "";
for(let i = texto.length-1; i >= 0; i--) {
    textoInvertido += texto.charAt(i);
}
console.log(textoInvertido);