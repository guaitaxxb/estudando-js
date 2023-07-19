const btnVerm = document.querySelector("#vermelho");
const btnAmar = document.querySelector("#amarelo");
const btnVerd = document.querySelector("#verde");
const btnAuto = document.querySelector("#auto");
const semaforo = document.querySelector("#semaforo");

const imagens = [
    "imagens/vermelho.png",
    "imagens/amarelo.png",
    "imagens/verde.png",
];

let indice = 1;
let interval;

btnVerd.addEventListener("click", () => {
    clearInterval(interval);
    semaforo.src = imagens[2];
});

btnAmar.addEventListener("click", () => {
    clearInterval(interval);
    semaforo.src = imagens[1];
});

btnVerm.addEventListener("click", () => {
    clearInterval(interval);
    semaforo.src = imagens[0];
});

btnAuto.addEventListener("click", () => {
    interval = setInterval(() => {
        semaforo.src = imagens[indice];
        if(indice == (imagens.length-1)) {
            indice = 0;
        }
        else {
            indice++;
        }
    }, 1000);
});