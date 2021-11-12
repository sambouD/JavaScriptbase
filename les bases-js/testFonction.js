//Ceci est un commentaire

/* function faireQuelquechose() {
  console.log("Je fais un truc !");
  console.log("Trop cool");
}

// faireQuelquechose();

const faireUneTache = (tache) => {
  console.log(15 - tache);
};

function calc() {
  return "salut " + " bien ?";
}
console.log(calc());

(() => {
  console.log(" Je me joue toute seul ");
})(); */
let total = 0;

function addition(x) {
  total += x;
  return total;
}

function soustraire(x) {
  total -= x;
  return total;
}

function division(x) {
  total /= x;
  return total;
}

function multiplication(x) {
  if (total === 0) {
    return (total = x);
  } else {
    total *= x;
    return total;
  }
}
