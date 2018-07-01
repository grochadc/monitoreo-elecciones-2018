const axios = require("axios");
const db = require("./db2-lenin.json");

db.forEach(data => {
  let key = Object.keys(data)[0];
  let newData = {
    ...data[key]
  };
  const url =
    "https://www.jsonstore.io/28b253e68a554f6305fbf89046cce7deaafbb553fddbab11116dc7bb04a149f3/movilizadores/" +
    "lenin_aceves_diaz";
  axios
    .post(url, newData)
    .then(({ data }) => console.log(data))
    .catch(err => console.error(err));
});

console.log("Finished");
