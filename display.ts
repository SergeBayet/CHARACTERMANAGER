import { CharactersManager } from "./comics.js";

(async ()=>{

    let char = new CharactersManager;

console.log(char)

let all = await char.getCharacters();

console.log("all:", all)

})();


