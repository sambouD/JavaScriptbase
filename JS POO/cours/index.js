const obj = {
  // index : value
  pseudo: "sam",
  ville: "La marine",
  admin: true,
};

// ajouter
obj.age = 24;

// Modifier
obj.pseudo += " From";

// delete
delete obj.ville;
// console.log(obj);

// cheker si propriété existe
// console.log("ville" in obj);
// console.log("age" in obj);

//Parcourir l'objet
for (const key in obj) {
  //   console.log(obj[key]);
}

const keys = Object.keys(obj);
// console.log(keys);

const values = Object.values(obj);
// console.log(values);

const nestedArray = Object.entries(obj);
// console.log(nestedArray);

const obj2 = {
  taille: "1m68",
  poids: "63kg",
};
// fusionner objects
const fusion = Object.assign({}, obj, obj2);
// console.log(fusion);

// Empecher les modifications
const newObj = Object.freeze(obj);
newObj.pseudo = "Test";

// console.log(newObj);

//---------------------------------
// Class

class Utilisateur {
  constructor(pseudo, ville) {
    this.pseudo = pseudo;
    this.ville = ville;
  }
  sayMyName = function () {
    console.log("Bonjour je suis " + this.pseudo);
  };
}
const user5 = new Utilisateur("Sami", "Lyon");

Utilisateur.prototype.sayCity = function () {
  console.log("J'habite à " + this.ville);
};
// console.log(user5.sayCity());

//---------------------------
// L'Héritage
//---------------------------

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  saySomething(text) {
    console.log(this.name + " dit : " + text);
  }
}

class Dog extends Animal {
  run() {
    console.log("Le chien court ! ");
  }
}

class Cat extends Animal {
  hunt() {
    console.log("J'ai tué un oiseau");
  }
}

const rintintin = new Dog("Rintintin ", 10);
console.log(rintintin);
