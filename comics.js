var axios = require("axios");
var CharactersManager = /** @class */ (function () {
    function CharactersManager() {
    }
    CharactersManager.prototype.getCharacters = function () {
        var _this = this;
        axios
            .get("https://character-database.becode.xyz/characters")
            .then(function (response) {
            console.log(response.data);
            _this.displayCharacters(response.data);
            return true;
        })["catch"](function (err) {
            console.log(err);
            return false;
        });
    };
    CharactersManager.prototype.getCharacter = function (id) {
        var _this = this;
        axios
            .get("https://character-database.becode.xyz/characters/" + id)
            .then(function (response) {
            console.log(response.data);
            _this.displayCharacter(response.data);
            return true;
        })["catch"](function (err) {
            console.log(err);
            return false;
        });
    };
    CharactersManager.prototype.deleteCharacter = function (id) {
        axios["delete"]("https://character-database.becode.xyz/characters/" + id)
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
        axios({
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
    CharactersManager.prototype.displayCharacters = function (table) {
        console.log(table);
    };
    CharactersManager.prototype.displayCharacter = function (table) {
        console.log(table);
    };
    return CharactersManager;
}());
var characters = new CharactersManager();
//characters.addCharacter("SuperSerge", "Développeur", "Dev", "CDS");
characters.getCharacters();
