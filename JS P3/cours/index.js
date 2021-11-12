// Tableau

let array = ["Paris", "Toulouse", "Nantes", "Bordeaux"];

// console.log(array[1][2]);

let array2 = ["Bordeaux", 24, true, [1, 2], { nom: "Denis" }];

// console.log(array2[4].nom);

let objet = {
  pseudo: "From scratch",
  age: 33,
  technos: ["Javascript", "React", "NodeJs"],
  admin: false,
};

// Les structure de controle
//---------------------------------------------------------

let data = [
  {
    pseudo: "nikola",
    age: 33,
    technos: ["Javascript", "React", "NodeJs"],
    admin: false,
  },
  {
    pseudo: "Samia",
    age: 24,
    technos: ["HTML", "React", "NodeJs"],
    admin: true,
  },
  {
    pseudo: "Denis",
    age: 33,
    technos: ["PHP", "React", "NodeJs"],
    admin: false,
  },
];

if (data[0].age > data[1].age) {
  //console.log(data[0].pseudo + " est plus agé que " + data[1].pseudo);
} else {
  //Valeur si faux
}

for (const user of data) {
  //   document.body.innerHTML += `<li>${user.pseudo} - ${user.age} ans`;
}

for (i = 0; i < data.length; i++) {
  //   console.log(i);
  //   console.log(data[i].pseudo);
  //   document.body.innerHTML += "<h2>" + data[i].pseudo + "</h2>";
}

// switch ! qui permet de facilité, au liée de faire des if, else en cascande

document.body.addEventListener("click", (e) => {
  //   console.log(e.target.id);

  switch (e.target.id) {
    case "JavaScript":
      document.body.style.background = "yellow";
      break;
    case "PHP":
      document.body.style.background = "green";
      break;
    case "Python":
      document.body.style.background = "red";
      break;
    default:
      document.body.style.background = "white";
      break;
  }
});
//-----------------
// Méthodes String
//-----------------

let testString = "JavaScript est un langage orienté objet";

// console.log(testString.indexOf("ob"));
// Minuscule !
// console.log(testString.toLowerCase());
//Majuscule !
// console.log(testString.toUpperCase());
// console.log(testString.replace("JavaScript", "PHP"));

//-----------------
// Méthodes numbers
//-----------------
let number2 = 42.1234;
// console.log(number2.toFixed(1));

//Changer une chaine de caracter en number
// console.log(parseInt("45"));

// Aléatoirement entre 0 et 50
// console.log(Math.floor(Math.random() * 50));

//-----------------
// Méthodes Arrays
//-----------------

let Testarray1 = ["JavaScript", "PHP", "Python", "C#"];
let Testarray2 = ["Ruby", "solidity"];

// Fusion des deux tableaux
// let newArray = Testarray1.concat(Testarray2);
// console.log(newArray);

// let newArray = [...Testarray1, ...Testarray2];
// console.log(Testarray1.join(" "));

// console.log(newArray.slice(0, 6));

/*Parcours le tableaux !!!!!
Testarray1.forEach((language) => console.log(language));
*/

/** Touvé si elle existe */

// console.log(Testarray1.some((language) => language == "PHP"));

// remplacer un élement !
// const restArray = Testarray1.splice(0, 1, "C++");

/** IMPORTANT !!! */

let arrayNumber = [4, 74, 28, 12, 11];
// let arrayNumber = ["Coucou", "Salut", "Bien", "Alors", "About"];

//Additionné tout  les élements de la table !
// console.log(arrayNumber.reduce((x, y) => x + y));

// Ajouter un élement dans la table !!
// arrayNumber.push("Coucou");
// console.log(arrayNumber);

/** Filter, Sort, Map, Trés IMPORTANT ! */

// fait de filtre
// console.log(arrayNumber.filter((number) => number > 10));

// Permet de classe par ordre croissant(alphébetique ou par nombre 1,2,3...)
// console.log(arrayNumber.sort());
// console.log(arrayNumber.sort((a, b) => b - a));

// arrayNumber.map((number) => console.log(number));

//-----------------
// Méthodes Objects
//---------

/**
 *.filter((user) => user.admin == false) Ici on filtre que le membre et non admin
 * .sort((a, b) => b.age - a.age) permet de ranger par ordre de l'age du plus grand au plus petit
 * <p>Status : ${user.admin ? "Modérateur" : "Membre"} </p> une ternaire (comme if et else)
 */
document.body.innerHTML = data
  .filter((user) => user.admin == false)
  .sort((a, b) => b.age - a.age)
  .map(
    (user) =>
      `<div class="user-card">
    <h2>${user.pseudo}</h2>
    <p>Age : ${user.age} ans</p>
    <p>Status : ${user.admin ? "Modérateur" : "Membre"} </p>
    </div>
    `
  );
