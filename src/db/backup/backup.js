const axios = require("axios");
const fs = require("fs");
const path = require("path");

let date = new Date();
let fileneame = date.toString() + ".json";
let filePath = path.join(__dirname, fileneame);

axios(
  "https://www.jsonstore.io/28b253e68a554f6305fbf89046cce7deaafbb553fddbab11116dc7bb04a149f3/"
).then(({ data }) => {
  let backup = JSON.stringify(data.result);
  fs.writeFile(filePath, backup, err => {
    if (err) console.log(err);
    console.log("Data backed up!");
  });
});
