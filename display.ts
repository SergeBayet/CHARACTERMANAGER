import { CharactersManager } from "./comics.js";

// create async function to fetch async data from api & CharactersManager class method
(async ()=>{

    // create new 
    let char = new CharactersManager;

    // get all characters
    let all = await char.getCharacters();

console.log("all:", all)

})();


