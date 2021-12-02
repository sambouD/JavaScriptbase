// XMLHtppRequest
function reqListener() {
  //   console.log(this.responseText);
}
let req = new XMLHttpRequest();
req.onload = reqListener;

// req.open("get", "data.json", true);
req.open("get", "https://api.blablagues.net/?rub=blagues", true);
req.send();

//------------------------
// FETCH
//------------------------

// fetch("monLien", "object d'options")
//   .then((response) => {
//     //response
//   })
//   .catch((err) => console.log(err));

fetch("data.txt")
  .then((res) => res.text())
  .then((data) => console.log(data));

fetch("data.json").then((res) => res.json());
// .then((data) => console.log(data.workbench.colorTheme));

const myHeaders = new Headers();

const init = {
  method: "GET",
  headers: myHeaders,
  mode: "cors",
  cache: "default",
};

// fetch("data.json", init).then((res) => console.log(res));

// CRUD => CREATE (POST), read (GET), update (PUT), Delete(DELETE)

// Méthode .json() => méthode qui s'auto-résout en royant le Body de la requête.

fetch("data.json")
  .then((res) => res.json())
  .then((data) => {
    //Stringify => convertie en JSON
    let settings = JSON.stringify(data);
    // Parse => transofrme json en object js
    console.log(JSON.parse(settings));
  });

//-------------------------------------------
// Web API
// ------------------------------------------

//CLIENT STORAGE
//----------------------------

//  Local Storage
// localStorage.data = "Je stock de la merde";

// document.cookie = "username=SamD";
