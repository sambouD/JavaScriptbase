// document.querySelector(" #btn-1").style.background = "yellow";

// testtes.style.background = "yellow";

const questionContainer = document.querySelector(".click-event");

// Bouton 1
const btn1 = document.querySelector("#btn-1");
// Bouton 2
const btn2 = document.getElementById("btn-2");

const response = document.querySelector("p");

questionContainer.addEventListener("click", () => {
  questionContainer.classList.add("question-click");
});

// fonction pour permet de faire le click
btn1.addEventListener("click", () => {
  //ajouter une classe via à css
  response.classList.add("show-response");
  response.style.background = "green";
});

// fonction pour permet de faire le click
btn2.addEventListener("click", () => {
  //ajouter une classe via à css
  response.classList.add("show-response");
  response.style.background = "red";
});

//--------------------------------------------------------
// Mouse move

const mousemove = document.querySelector(".mousemove");

window.addEventListener("mousemove", (e) => {
  mousemove.style.left = e.pageX + "px";
  mousemove.style.top = e.pageY + "px";
});

window.addEventListener("mousedown", () => {
  mousemove.style.transform = "scale(2) translate(-25%, -25%)";
});

window.addEventListener("mouseup", () => {
  mousemove.style.transform = "scale(1) translate(-50%, -50%)";
  mousemove.style.border = "2px solid teal";
});

questionContainer.addEventListener("mouseenter", () => {
  questionContainer.style.background = "rgba(0,0,0,0.6)";
});

questionContainer.addEventListener("mouseout", () => {
  questionContainer.style.background = "pink";
});

response.addEventListener("mouseover", () => {
  response.style.transform = "rotate(2deg)";
});

// ---------------------------------------------------------------
// KeyPress event

const keypressContainer = document.querySelector(".keypress");
const key = document.getElementById("key");

document.addEventListener("keypress", (e) => {
  key.textContent = e.key;
  if (e.key == "j") {
    keypressContainer.style.background = "pink";
  } else if (e.key == "h") {
    keypressContainer.style.background = "teal";
  } else {
    keypressContainer.style.background = "green";
  }
});

// -------------------------------------------------------------------

// Scroll Event

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 120) {
    nav.style.top = 0;
  } else {
    nav.style.top = "-50px";
  }
});

// ----------------------------------------------------

// Form Events

const inputName = document.querySelector('input[type="text"]');
const select = document.querySelector("select");
const form = document.querySelector("form");
let pseudo = "";
let language = "";

console.log(form);

inputName.addEventListener("input", (e) => {
  pseudo = e.target.value;
});

select.addEventListener("input", (e) => {
  language = e.target.value;
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (cgv.checked) {
    // Affiche le contenu des variables
    document.querySelector("form > div").innerHTML = `
      <h3 > Pseudo : ${pseudo} </h3
      <h4> Langage préféré : ${language} </h4>
    `;
  } else {
    alert("Veillez accepter les CGV ");
  }
});

// -------------------------------------------------
// Load event
window.addEventListener("load", () => {
  // console.log("Document chargé ! ");
});

// ---------------------------------------------------
// Foreach

const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    e.target.style.transform = "scale(0.7)";
  });
});

//--------------------------------------------------
// addEventListener Vs onClick
document.body.onclick = () => {
  console.log("click ! ");
};

// -------------------------------------------------
// stop propagation

questionContainer.addEventListener("click", (e) => {
  // alert("Test ! ");
  e.stopPropagation();
});

//-----------------------------------------------------

// BOM

// console.log(window.innerHeight);

// window va ouvrir une nouvelle fenetre
// window.open("htpp://google.com", "cours js", "height =600, width = 800 ");

// pour ferme : window.close()

// Evénements adossés à Window
// alert("Bonjour");
let answer = "";
btn2.addEventListener("click", () => {
  answer = prompt("Entrez votre nom !");
  questionContainer.innerHTML +=
    "<h3> Désolé   " + answer + "! c'est une mauvaise réponse " + " </h3>";
});

btn1.addEventListener("click", () => {
  answer = prompt("Entrez votre nom !");
  questionContainer.innerHTML += "<h3> Bravo " + answer + " </h3>";
});

//Timer, compte à rebours

setTimeout(() => {
  // logique  à exécuter !
  questionContainer.style.borderRadius = " 300px";
}, 2000);

// setInterval(() => {
//   document.body.innerHTML += ` <div class='box'>
//       <h2>Nouvelle Boite !</h2>
//       </div>
//     `;
// }, 10);
// Location
// console.log(location.host);
// console.log(location.pathname);

// Redigéré vers un autre lien
// location.replace("http://tiwtch.com");

// window.onload = () => {
//   location.href = "http://youtube.com";
// };

// -------------------------------------------------------------
// setProperty

// window.addEventListener("mousemove", (e) => {
//   nav.style.setProperty("--x", e.layerX + "px");
//   nav.style.setProperty("--y", e.layerY + "px");
// });
