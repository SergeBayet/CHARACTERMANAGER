const axios = require("axios");

axios
  .get("https://character-database.becode.xyz/characters")
  .then(response => {
    console.log(response);
  })
  .catch(err => {
    console.log("oups");
  });
