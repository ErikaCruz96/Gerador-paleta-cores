//Selecionar elementos

const generateBtn = document.querySelector("#generate-btn");
const colorsDiv = document.querySelector(".colors");


//Evento
generateBtn.addEventListener("click", generateColors );


//Funções

function generateColors () {
   colorsDiv.innerHTML = "";

   for(let i=0; i<5; i++){//gerar 5 cores 
    const cor = generateRandomColor();
    
    const colorDiv = document.createElement("div");
    const colorName = document.createElement("p");

    colorDiv.style.backgroundColor = cor;
    colorName.textContent = cor;

    colorsDiv.appendChild(colorDiv);
    colorDiv.appendChild(colorName);
   }
}

function generateRandomColor (){
    const letters = "0123456789ABCDEF"

    let color = "#";

    for(let i=0; i<6; i++){
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
}

