import { CharactersManager } from "./comics.js";

// create async function to fetch async data from api & CharactersManager class method
(async () => {
  // create new
  let char = new CharactersManager();

  // get all characters
  let all = await char.getCharacters();

  //display cards
  all.forEach(el => {
    //setup card display
    const root = document.querySelector("#root") as HTMLElement;
    const cardContainer = document.createElement("div") as HTMLElement;
    cardContainer.setAttribute("class", "cardContainer");
    const cardImage = document.createElement("img") as HTMLElement;
    cardImage.setAttribute("class", "imgContainer");
    const editBtn = document.createElement("button") as HTMLElement;
    editBtn.setAttribute("class", "editBtn");
    const deleteBtn = document.createElement("button") as HTMLElement;
    deleteBtn.setAttribute("class", "deleteBtn");
    const viewBtn = document.createElement("button") as HTMLElement;
    viewBtn.setAttribute("class", "viewBtn");
    const textContainer = document.createElement("div") as HTMLElement;
    textContainer.setAttribute("class", "cardTextContainer");
    const cardName = document.createElement("h3") as HTMLElement;
    cardName.setAttribute("class", "cardName");
    const shortDesc = document.createElement("p") as HTMLElement;
    shortDesc.setAttribute("class", "shortDesc");

    if (el.name !== undefined) {
      //attach data to elements
      cardName.innerText = el.name;
      shortDesc.innerText = el.shortDescription;
      editBtn.innerText = "Edit";
      deleteBtn.innerText = "Delete";
      viewBtn.innerText = "View";
      if (el.image !== undefined) {
        cardImage.setAttribute("src", `data:image/jpeg;base64,${el.image}`);
      }else{
          "no image";
      }
      //display elements
      cardContainer.appendChild(editBtn);
      cardContainer.appendChild(viewBtn);
      cardContainer.appendChild(deleteBtn);
      cardContainer.appendChild(cardImage);
      textContainer.appendChild(cardName);
      textContainer.appendChild(shortDesc);
      cardContainer.appendChild(textContainer);
      root.appendChild(cardContainer);
    }
    return null;
  });

  console.log("all:", all);
})();
