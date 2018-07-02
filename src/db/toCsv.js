const path = require("path");
const fs = require("fs");

fs.readFile(
  path.join(
    __dirname,
    "backup",
    "Mon Jul 02 2018 08:34:05 GMT-0500 (CDT).json"
  ),
  "utf8",
  (err, data) => {
    let { movilizadores } = JSON.parse(data);
    let movilizadoresArray = Object.keys(movilizadores).map(key => {
      return movilizadores[key];
    });
    let finalCsv = `
movilizador,confirmados,total
${movilizadoresArray
      .map(item => {
        return `${item.movilizador},${
          item.voters.filter(voter => voter.confirmed).length
        },${item.voters.length}\n`;
      })
      .join("")}
      `;

    fs.writeFile("reporte.csv", finalCsv, err => {
      if (err) {
        console.log(err);
      }
      console.log("File written");
    });

    console.log(finalCsv);
  }
);
