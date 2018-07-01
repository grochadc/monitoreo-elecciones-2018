const db = require("./db0");
const fs = require("fs");
const path = require("path");

function toId(str) {
  return str
    .toLowerCase()
    .split(" ")
    .join("_");
}

let newDb = db.map(item => {
  return {
    movilizador: item.movilizador,
    voters: item.voters.map(voter => {
      return {
        name: voter,
        confirmed: false,
        lastUpdated: new Date(),
        id: toId(voter)
      };
    })
  };
});

fs.writeFile(path.join(__dirname, "db1.json"), JSON.stringify(newDb), err => {
  if (err) {
    console.log(err);
  } else {
    console.log("Success!");
  }
});
