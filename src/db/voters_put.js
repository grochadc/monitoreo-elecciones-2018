const axios = require("axios");
const fs = require("fs");
const path = require("path");

let filepath = path.join(__dirname, "voters", "cauzor.json");

let jsonstore =
  "https://www.jsonstore.io/28b253e68a554f6305fbf89046cce7deaafbb553fddbab11116dc7bb04a149f3";
let nombre = "ricardo_garcia_cauzor";

let url = `${jsonstore}/movilizadores/${nombre}/voters`;

axios(url).then(({ data }) => {
  let { result } = data;
  fs.readFile(filepath, "utf8", (err, data) => {
    let votersFile = JSON.parse(data);
    let votersStore = result;
    votersFinal = votersStore.concat(votersFile);
    axios.put(url, votersFinal).then(response => console.log(response));
  });
});
