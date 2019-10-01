"use strict";
exports.__esModule = true;
var axios = require("axios");
var CharactersManager = /** @class */ (function () {
    function CharactersManager() {
    }
    CharactersManager.prototype.getCharacters = function () {
        return axios
            .get("https://character-database.becode.xyz/characters")
            .then(function (response) {
            // console.log(response.data);
            // this.displayCharacters(response.data);
            return response.data;
        })["catch"](function (err) {
            console.log(err);
            return false;
        });
    };
    CharactersManager.prototype.getCharacter = function (id) {
        return axios
            .get("https://character-database.becode.xyz/characters/" + id)
            .then(function (response) {
            // console.log(response.data);
            // this.displayCharacter(response.data);
            return response.data;
        })["catch"](function (err) {
            console.log(err);
            return false;
        });
    };
    CharactersManager.prototype.updateCharacter = function (id, name, shortDescription, description, image) {
        var json = {
            id: id,
            name: name,
            shortDescription: shortDescription,
            description: description,
            image: image
        };
        return axios({
            method: "put",
            url: "https://character-database.becode.xyz/characters/",
            data: json
        })
            .then(function (response) {
            return true;
        })["catch"](function (err) {
            console.log(err);
            return false;
        });
    };
    CharactersManager.prototype.deleteCharacter = function (id) {
        return axios["delete"]("https://character-database.becode.xyz/characters/" + id)
            .then(function (response) {
            return true;
        })["catch"](function (err) {
            console.log(err);
            return false;
        });
    };
    CharactersManager.prototype.addCharacter = function (name, shortDescription, description, image) {
        var json = {
            name: name,
            shortDescription: shortDescription,
            description: description,
            image: image
        };
        return axios({
            method: "post",
            url: "https://character-database.becode.xyz/characters/",
            data: json
        })
            .then(function (response) {
            return response.data;
        })["catch"](function (err) {
            console.log(err);
            return false;
        });
    };
    // public displayCharacters(table: []) {
    //   console.log(table);
    // }
    // public displayCharacter(table: []) {
    //   console.log(table);
    // }
    CharactersManager.prototype.getBase64 = function (file) {
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            return reader.result;
        };
        reader.onerror = function (error) {
            console.log("Error: ", error);
            return false;
        };
    };
    return CharactersManager;
}());
exports.CharactersManager = CharactersManager;
//characters.addCharacter("SuperSerge", "Développeur", "Dev", "CDS");
