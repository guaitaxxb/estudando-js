// Evento -> ação (clique, teclar, movimentar o cursor)
// click -> clique do mouse
// dblClick -> clique duplo do mouse
// keydown -> apertar o botão 
// keyup -> soltar o botão
// mouseover -> mover o cursor do mouse sobre o elemento
// mouseout -> mover o cursos do mouse para fora do elemento
// submit -> submeter os dados de um formulário
// change -> alterar o valor de um campo de formulário
// focus -> elemento acionado quando o foco está sobre o elemento 

const quadrado = document.getElementById("quadrado");
console.log({quadrado});

//primeira forma de adicionar um "ouvidor de evento"
quadrado.onclick = () => { 
    quadrado.style.backgroundColor = "#003049"
    // quadrado.style.borderRadius = "100px"
    quadrado.style.transform = "translateY(200px)"
}

quadrado.ondblclick = () => {
    quadrado.style.backgroundColor = "#0d63cb"
    // quadrado.style.borderRadius = "100px"
    quadrado.style.transform = "translateY(0)";
}

//Segunda forma de adicionar um "ouvidor de evento"
function changeColorSquare () { 
    quadrado.style.backgroundColor = "#219ebc";
}

//Terceira forma de adicionar um "ouvidor de evento"
quadrado.addEventListener("mouseout", () => {
    quadrado.style.backgroundColor = "#f07167"
});