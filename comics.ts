const axios = require("axios");

class CharactersManager {
  public getCharacters() {
    axios
      .get("https://character-database.becode.xyz/characters")
      .then((response: any) => {
        console.log(response.data);
        this.displayCharacters(response.data);
        return true;
      })
      .catch((err: any) => {
        console.log(err);
        return false;
      });
  }
  public getCharacter(id: string) {
    axios
      .get("https://character-database.becode.xyz/characters/" + id)
      .then((response: any) => {
        console.log(response.data);
        this.displayCharacter(response.data);
        return true;
      })
      .catch((err: any) => {
        console.log(err);
        return false;
      });
  }
  public updateCharacter(
    id: string,
    name: string,
    shortDescription: string,
    description: string,
    image: string
  ) {
    let json: {} = {
      id,
      name,
      shortDescription,
      description,
      image
    };
    axios({
      method: "put",
      url: "https://character-database.becode.xyz/characters/",
      data: json
    })
      .then((response: any) => {
        return true;
      })
      .catch((err: any) => {
        console.log(err);
        return false;
      });
  }
  public deleteCharacter(id: string) {
    axios
      .delete("https://character-database.becode.xyz/characters/" + id)
      .then((response: any) => {
        return true;
      })
      .catch((err: any) => {
        console.log(err);
        return false;
      });
  }
  public addCharacter(
    name: string,
    shortDescription: string,
    description: string,
    image: string
  ) {
    let json: {} = {
      name,
      shortDescription,
      description,
      image
    };
    axios({
      method: "post",
      url: "https://character-database.becode.xyz/characters/",
      data: json
    })
      .then((response: any) => {
        return response.data;
      })
      .catch((err: any) => {
        console.log(err);
        return false;
      });
  }
  public displayCharacters(table: []) {
    console.log(table);
  }
  public displayCharacter(table: []) {
    console.log(table);
  }
  public getBase64(file: File) {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function() {
      return reader.result;
    };
    reader.onerror = function(error) {
      console.log("Error: ", error);
      return false;
    };
  }
}

let characters = new CharactersManager();

//characters.addCharacter("SuperSerge", "Développeur", "Dev", "CDS");

characters.getCharacters();
