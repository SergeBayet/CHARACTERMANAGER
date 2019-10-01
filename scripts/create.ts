import { CharactersManager } from "./comics.js";

let char = new CharactersManager();

//add character

const addBtn = document.querySelector("#sendChar") as HTMLElement;
addBtn.addEventListener("click", ()=>{
  let charName = document.querySelector("#newName") as HTMLInputElement;
  let charShortDesc = document.querySelector("#newShortDesc") as HTMLInputElement;
  let charDesc = document.querySelector("#newDesc") as HTMLInputElement;

char.addCharacter(charName.value, charShortDesc.value, charDesc.value, "");
  console.log(charName.value, charShortDesc.value, charDesc.value);
})