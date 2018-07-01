const fs = require("fs");
const path = require("path");
const voters = require("./db.json");

let movilizadores = [];

voters.forEach(voter => {
  if (movilizadores.indexOf(voter.movilizador) == -1) {
    movilizadores.push(voter.movilizador);
  }
});

console.log(movilizadores);

let objects = [];
movilizadores.map(movilizador => {
  let movilizadorObject = {
    movilizador,
    voters: voters
      .filter(voter => {
        return voter.movilizador == movilizador;
      })
      .map(voter => voter.nombre)
  };
  objects.push(movilizadorObject);
});

fs.writeFile(path.join(__dirname, "db0.json"), JSON.stringify(objects), err => {
  if (err) {
    console.log(err);
  } else {
    console.log("Success!");
  }
});
