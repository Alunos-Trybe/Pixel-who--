// Definiçao do objecto de cada personagem
const drStrange = {
  Nome: "Dr.Strange",
  Sexo: "Masculino",
  Raça: "Humano",
  Equipe: ["Avangers", "Iluminati"],
  Classe: "Mago",
  Heroi: "Heroi",
  Filmes: "Sim",
  HQ: "Marvel",
  img: "./img/dr-strange-card.png",
};
const spiderMan = {
  Nome: "Spider-Man",
  Sexo: "Masculino",
  Raça: "Humano",
  Equipe: "Avangers",
  Classe: "Lutador",
  Heroi: "Heroi",
  Filmes: "Sim",
  HQ: "Marvel",
  img: "img/spider-man-card.png",
};
const thor = {
  Nome: "Thor",
  Sexo: "Masculino",
  Raça: "Asgardian",
  Equipe: ["Avangers", "Guardiões da Galáxia"],
  Classe: "Deus",
  Heroi: "Heroi",
  Filmes: "Sim",
  HQ: "Marvel",
  img: "img/Thor-card.png",
};
const capitaoAmerica = {
  Nome: "Capitão America",
  Sexo: "Masculino",
  Raça: "Humano",
  Equipe: ["Avangers", "Iluminati"],
  Classe: "Lutador",
  Heroi: "Heroi",
  Filmes: "Sim",
  HQ: "Marvel",
  img: "img/capitao-america-card.png",
};
const hulk = {
  Nome: "Hulk",
  Sexo: "Masculino",
  Raça: "Humano",
  Equipe: "Avangers",
  Classe: "Radioativo",
  Heroi: "Heroi",
  Filmes: "Sim",
  HQ: "Marvel",
  img: "img/Hulk-card.png",
};
const loki = {
  Nome: "Loki",
  Sexo: "Masculino",
  Raça: "Frost-Gigant",
  Equipe: "",
  Classe: "Deus",
  Heroi: "Vilão",
  Filmes: "Sim",
  HQ: "Marvel",
  img: "img/Loki-card.jpg",
};

const venom = {
  Nome: "Venom",
  Sexo: "Masculino",
  Raça: "Klyntar",
  Equipe: "",
  Classe: "Lutador",
  Heroi: "Anti-Heroi",
  Filmes: "Sim",
  HQ: "Marvel",
  img: "img/Venom-card.png",
};

const scream = {
  Nome: "Venom",
  Sexo: "Feminino",
  Raça: "Klyntar",
  Equipe: "",
  Classe: "Lutador",
  Heroi: "Vilão",
  Filmes: "Sim",
  HQ: "Marvel",
  img: "img/Scream-card.png",
};

const capitanMarvel = {
  Nome: "Capitan Marvel",
  Sexo: "Feminino",
  Raça: "Humano",
  Equipe: ["Avangers", "Guardiões da Galáxia"],
  Classe: "Cósmico",
  Heroi: "Heroi",
  Filmes: "Sim",
  HQ: "Marvel",
  img: "img/Capitan-Marvel-card.png",
};
const thing = {
  Nome: "Coisa",
  Sexo: "Masculino",
  Raça: "Humano",
  Equipe: "Quarteto Fantástico",
  Classe: "Cósmico",
  Heroi: "Heroi",
  Filmes: "Sim",
  HQ: "Marvel",
  img: "img/Thing-card.png",
};
const ironMan = {
  Nome: "Iron Man",
  Sexo: "Masculino",
  Raça: "Humano",
  Equipe: ["Avangers", "Iluminati"],
  Classe: "Engenheiro",
  Heroi: "Heroi",
  Filmes: "Sim",
  HQ: "Marvel",
  img: "img/Iron-man-card.png",
};
const thanos = {
  Nome: "Thanos",
  Sexo: "Masculino",
  Raça: "Eternos",
  Equipe: "Ordem Negra",
  Classe: "Cósmico",
  Heroi: "Vilão",
  Filmes: "Sim",
  HQ: "Marvel",
  img: "img/Thanoscard.png",
};

const electro = {
  Nome: "Electro",
  Sexo: "Masculino",
  Raça: "Humano",
  Equipe: "Sexteto Sinistro",
  Classe: "Engenheiro",
  Heroi: "Vilão",
  Filmes: "Sim",
  HQ: "Marvel",
  img: "./img/Eletro-card.png",
};

// Construção do array de personagens
const personagens = [
  drStrange,
  spiderMan,
  capitanMarvel,
  capitaoAmerica,
  hulk,
  thor,
  loki,
  venom,
  thing,
  ironMan,
  thanos,
  electro,
  scream,
];

const contentorCartas = document.querySelector(".container-personagens");
const perguntaMenu = document.getElementById("pergunta-menu");
const pMasculino = document.getElementById("p1");
const pFeminino = document.getElementById("p2");
const pHumano = document.getElementById("p3");
const pAsgardian = document.getElementById("p4");
const pSubmit = document.getElementById("submit-p");

pSubmit.addEventListener("click", pergunta);

function criaCartas() {
  for (let index = 0; index < personagens.length; index++) {
    let flipCard = document.createElement("div");
    flipCard.className = "flip-card";
    contentorCartas.appendChild(flipCard);
    let flipCardInner = document.createElement("div");
    flipCardInner.className = "flip-card-inner";
    flipCard.appendChild(flipCardInner);
    let flipCardBack = document.createElement("div");
    let flipCardFront = document.createElement("div");
    flipCardFront.className = "flip-card-front";
    flipCardBack.className = "flip-card-back";
    flipCardInner.appendChild(flipCardBack);
    flipCardInner.appendChild(flipCardFront);
    let titleCard = document.createElement("h3");
    titleCard.className = "title-card";
    titleCard.innerText = personagens[index].Nome;
    let pCard = document.createElement("p");
    pCard.className = "txt-card";
    pCard.setAttribute("style", "white-space: pre;");
    pCard.textContent =
      "Sexo :" +
      personagens[index].Sexo +
      " \r\n  Raça :" +
      personagens[index].Raça +
      " \r\n  Equipe :" +
      personagens[index].Equipe +
      " \r\n  Classe :" +
      personagens[index].Classe +
      " \r\n  Heroi :" +
      personagens[index].Heroi +
      " \r\n  Filmes :" +
      personagens[index].Filmes +
      " \r\n  HQ :" +
      personagens[index].HQ;
    flipCardBack.appendChild(titleCard);
    flipCardBack.appendChild(pCard);
    let imgCard = document.createElement("img");
    imgCard.src = personagens[index].img;
    flipCardFront.appendChild(imgCard);
  }
}
criaCartas();

function pergunta() {
  if (perguntaMenu.value === "masculino") {
    masculino();
  }else if (perguntaMenu.value === "feminino") {
    Feminino();
}

function masculino() {
  for (let index = 0; index < personagens.length; index++) {
    if (personagens[index].Sexo !== "Masculino") {
      personagens.splice(index, 1);
    }
  }
  reset();
  criaCartas();
}
function Feminino() {
  for (let index = 0; index < personagens.length; index++) {
    console.log(personagens.length)
    console.log(index)
    if (personagens[index].Sexo !== "Feminino") {
      personagens.splice(index, 1);
    }
  }
}
reset();
criaCartas();
}



function reset() {
  while (contentorCartas.firstChild) {
    contentorCartas.removeChild(contentorCartas.firstChild);
  }
}