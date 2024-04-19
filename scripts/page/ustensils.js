import {
  displayUstensilTag,
  selectUstensilTag,
} from "../librairies/displayUstencilTag.js";
import { recipes } from "../utils/api.js";

function addClickListenersToUstensilLinks() {
  const links = document.querySelectorAll(".link-ustensil");
  // console.log(links);
  links.forEach((link) => {
    //  console.log(link)
    link.addEventListener("click", selectUstensilTag);
  });
}

//*****récuperer tous les ustensils sans doublons
let filteredUstensilsArray;
export const getUstensil = (recipes) => {
  // On crée un nouvel ensemble Les ensembles en JavaScript ne permettent pas les doublons, ce qui les rend parfaits pour stocker des valeurs uniques
  const ustensilsSet = new Set();

  recipes.forEach((recipe) => {
    const ustensils = recipe.ustensils;
    //Pour chaque ustensile dans la liste, on ajoute l'ustensile converti en minuscules à l'ensemble ustensilsSet en utilisant
    ustensils.forEach((ustensil) => {
      ustensilsSet.add(ustensil.toLowerCase()); // Convertir en minuscules
    });
  });
  //Conversion de l'ensemble en tableau
  filteredUstensilsArray = Array.from(ustensilsSet);
  // console.log(filteredUstensilsArray);
  return filteredUstensilsArray;
};
getUstensil(recipes);

//****Afficher les ustensils dans le dropDownMenu

filteredUstensilsArray
  .sort((a, b) => a.localeCompare(b, "fr"))
  .forEach((ustensil) => {
    displayUstensilTag(ustensil);
  });
addClickListenersToUstensilLinks();
//   //************** end ustensils*/
//   //************** end ustensils*/
