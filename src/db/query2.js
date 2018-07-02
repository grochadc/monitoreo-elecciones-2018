const db = require("./db1");
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

fs.writeFile(path.join(__dirname, "db2-elia.json"), data, err => {
  if (err) {
    console.log(err);
  } else {
    console.log("Success!");
  }
});
