const axios = require("axios");

export class CharactersManager {
  public getCharacters() {
    return axios
      .get("https://character-database.becode.xyz/characters")
      .then ((response: any) => {
        // console.log(response.data);
        // this.displayCharacters(response.data);
        return response.data;
      })
      .catch((err: any) => {
        console.log(err);
        return false;
      });
  }
  public getCharacter(id: string) {
    return axios
      .get("https://character-database.becode.xyz/characters/" + id)
      .then((response: any) => {
        // console.log(response.data);
        // this.displayCharacter(response.data);
        return response.data;
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
    return axios({
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
    return axios
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
    return axios({
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
  // public displayCharacters(table: []) {
  //   console.log(table);
  // }
  // public displayCharacter(table: []) {
  //   console.log(table);
  // }
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

//characters.addCharacter("SuperSerge", "Développeur", "Dev", "CDS");



