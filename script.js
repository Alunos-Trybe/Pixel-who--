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
  Raça: "Asgardian",
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
  Nome: "Scream",
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
  Equipe: "",
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
  Equipe: "",
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
window.resultado = personagens;
window.score = personagens.length;
const Original = personagens;
const contentorCartas = document.querySelector(".container-personagens");
const perguntaMenu = document.getElementById("pergunta-menu");
const pMasculino = document.getElementById("p1");
const pFeminino = document.getElementById("p2");
const pHumano = document.getElementById("p3");
const pAsgardian = document.getElementById("p4");
const pSubmit = document.getElementById("submit-p");
const btnRest = document.getElementById("reset");
let modal = document.getElementById("popup");
let scoreUpdate = document.querySelector('.score-value');
const vida1 = document.getElementById('vida1');
const vida2 = document.getElementById('vida2')
const vida3 = document.getElementById('vida3')



pSubmit.addEventListener("click", pergunta);
btnRest.addEventListener("click", resetS);

function criaCartas(personagens) {
  for (let index = 0; index < personagens.length; index++) {
    if (personagens[index].display !== "None") {
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
      pCard.textContent =`
        Sexo :${personagens[index].Sexo}
        Raça :${personagens[index].Raça}
        Equipe :${personagens[index].Equipe}
        Classe :${personagens[index].Classe}
        Heroi :${personagens[index].Heroi}
        Filmes :${personagens[index].Filmes}
        HQ :${personagens[index].HQ}`;
      flipCardBack.appendChild(titleCard);
      flipCardBack.appendChild(pCard);
      let imgCard = document.createElement("img");
      imgCard.src = personagens[index].img;
      flipCardFront.appendChild(imgCard);
    }
  }
}

criaCartas(personagens);

function reset() {
  while (contentorCartas.firstChild) {
    contentorCartas.removeChild(contentorCartas.firstChild);
  }
  modal.style.display = "none";
}

function resetS() {
  reset();
  criaCartas(Original);
  window.resultado = personagens;
  scoreUpdate.innerText = personagens.length;
  escolhaPc();
  escolhaJogador();
}

function escolhaPc() {
  const cartas = document.querySelectorAll(".flip-card");
  let x = Math.floor(Math.random() * (cartas.length - 1) + 1);
  window.arrayTarget = personagens[x]
  window.alvo = cartas[x];
}


function escolhaJogador() {
  let cartas = document.querySelectorAll(".flip-card");
  for (let i = 0; i < cartas.length; i++) {
    cartas[i].addEventListener("click", comparador);
  }
}
let lives = 3;
function comparador() {
  if(this.firstChild.firstChild.firstChild.innerText === window.alvo.firstChild.firstChild.firstChild.innerText){
    modal.innerText = `Venceu com ${window.score} pontos`
    modal.style.display = "block";}
  lives = lives - 1;
  if(lives === 2){
    vida1.style.display= "none";
  }
  if(lives === 1){
    vida1.style.display= "none";
    vida2.style.display = "none";
    
  }
  if(lives === 0){
    modal.innerText = `Perdeu!`
    modal.style.display = "block";
    vida1.style.display= "none";
    vida2.style.display = "none";
    vida3.style.display = "none";
  }
}

function pergunta() {
  let arrayAlvo = Object.values(window.arrayTarget)
  if(perguntaMenu.value === "sexo") { window.resultado = window.resultado.filter((personagem)=> personagem.Sexo === arrayAlvo[1])}
  else if(perguntaMenu.value === "raça") {window.resultado = window.resultado.filter((personagem)=> personagem.Raça === arrayAlvo[2])}
  else if(perguntaMenu.value === "equipe") {window.resultado= window.resultado.filter((personagem)=> personagem.Equipe === arrayAlvo[3])}
  else if(perguntaMenu.value === "classe") { window.resultado = window.resultado.filter((personagem)=> personagem.Classe === arrayAlvo[4])}
  else if(perguntaMenu.value === "heroi") { window.resultado = window.resultado.filter((personagem)=> personagem.Heroi === arrayAlvo[5])}
  else if(perguntaMenu.value === "filmes") { window.resultado = window.resultado.filter((personagem)=> personagem.Filmes === arrayAlvo[6])}
  else if(perguntaMenu.value === "hq") { window.resultado= window.resultado.filter((personagem)=> personagem.HQ === arrayAlvo[7])}
reset();
window.score = resultado.length;
scoreUpdate.innerText = window.score;
criaCartas(window.resultado);
escolhaJogador();
}

escolhaPc();
escolhaJogador();
