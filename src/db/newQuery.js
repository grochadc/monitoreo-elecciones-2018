const db = require("./newDb");
const fs = require("fs");
const path = require("path");

let newDb = db.map(item => {
  return {
    movilizador: item.movilizador,
    voters: item.voters.map(voter => {
      return { name: voter, confirmed: false };
    })
  };
});

fs.writeFile(
  path.join(__dirname, "newNewDb.json"),
  JSON.stringify(newDb),
  err => {
    if (err) {
      console.log(err);
    } else {
      console.log("Success!");
    }
  }
);
