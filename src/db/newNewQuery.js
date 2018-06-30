const db = require("./newNewNewDb");
const fs = require("fs");
const path = require("path");

function toId(str) {
  return str
    .toLowerCase()
    .split(" ")
    .join("_");
}

let data = JSON.stringify(
  db.map(item => {
    let { movilizador, voters } = item;
    let newMov = toId(
      movilizador.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    );
    return {
      [newMov]: {
        movilizador,
        voters
      }
    };
  })
);

fs.writeFile(path.join(__dirname, "newNewNewDb.json"), data, err => {
  if (err) {
    console.log(err);
  } else {
    console.log("Success!");
  }
});
