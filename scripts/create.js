"use strict";
exports.__esModule = true;
var comics_js_1 = require("./comics.js");
var char = new comics_js_1.CharactersManager();
//add character
var addBtn = document.querySelector("#sendChar");
addBtn.addEventListener("click", function () {
    var charName = document.querySelector("#newName");
    var charShortDesc = document.querySelector("#newShortDesc");
    var charDesc = document.querySelector("#newDesc");
    char.addCharacter(charName.value, charShortDesc.value, charDesc.value, "");
    console.log(charName.value, charShortDesc.value, charDesc.value);
});
