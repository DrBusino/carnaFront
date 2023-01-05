//import {FirstNamesMale} from "./data";


const infoCardContentJurados = document.querySelector(
  "#infoCardContentJurados"
);

const infoCardContentEscolas = document.querySelector(
  "#infoCardContentEscolas"
);

const infoCardContentMapa = document.querySelector("#infoCardContentMapa");

const infoCardContentConstrucoes = document.querySelector(
  "#infoCardContentConstrucoes"
);

const infoCardContentComponentes = document.querySelector(
  "#infocardContentComponentes"
);

const btnInfoCardEscolas = document.querySelector("#btnInfoCardEscolas");

const btnInfoCardMapa = document.querySelector("#btnInfoCardMapa");

const btnInfoCardConstrucoes = document.querySelector(
  "#btnInfoCardConstrucoes"
);

const btnInfoCardComponentes = document.querySelector(
  "#btnInfoCardComponentes"
);
const mestreSalaPortaBandeiraDiv = document.createElement("div");
mestreSalaPortaBandeiraDiv.id = "mestreSalaPortaBandeiraDiv";

btnInfoCardComponentes.addEventListener("click", () => {
  generateComponentsMestreSalaPortaBandeira();

  
  infoCardContentComponentes.appendChild(mestreSalaPortaBandeiraDiv);
  mestreSalaPortaBandeiraDiv.innerHTML =
    "Mestre Sala e Porta Bandeira " +
    "Nome do Mestre Sala: " +
    componentes[0].nameComponentes[0] +
    " " +
    "Nome da Porta Bandeira: " +
    componentes[0].nameComponentes[1];

    
});

