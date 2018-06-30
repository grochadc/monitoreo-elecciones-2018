const axios = require("axios");
const db = require("./newNewNewDb");

db.forEach(data => {
  const url =
    "https://www.jsonstore.io/28b253e68a554f6305fbf89046cce7deaafbb553fddbab11116dc7bb04a149f3/movilizadores/" +
    Object.keys(data)[0];

  axios
    .post(url, data)
    .then(({ data }) => console.log(data))
    .catch(err => console.error(err));
});
