import {
  displayUstensilTag,
  selectUstensilTag,
} from "../librairies/displayUstencilTag.js";
import { recipes } from "../utils/api.js";
import { displayData } from "../utils/api.js";

function addClickListenersToUstensilLinks() {
  const links = document.querySelectorAll(".link-ustensil");
  // console.log(links);
  links.forEach((link) => {
    //  console.log(link)
    // link.addEventListener("click", selectUstensilTag);
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const clickedElementContent = link.textContent.trim();
      selectUstensilTag(clickedElementContent, link);
      filterRecipesByUstensilTag(clickedElementContent);
    });
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

// Filtrer les recettes en fonction du tag sélectionné et prenon en consédération la recheche saisi dans la searchBar

function filterRecipesByUstensilTag(ustensilTag) {
  // console.log(ustensilTag)
  const searchValue = document
    .getElementById("searchInput")
    .value.toLowerCase()
    .trim()
    .replace(/\s/g, "");
  // console.log(searchValue)


  // const filteredRecipes = recipes.filter((recipe) => {

  //     // console.log(ustensil)
  //     // Vérifie si le tag d'ustensile correspond à au moins un ustensile dans la recette
  //   return recipe.ustensils.some((ustensil) => ustensil.toLowerCase() === ustensilTag.toLowerCase());

  //   // filter() pour parcourir toutes les recettes et retourner uniquement celles qui ont au moins un ustensile correspondant au tag sélectionné.
  //   // some() est utilisée pour vérifier si au moins un élément du tableau recipe.ustensils correspond au tag d'ustensile sélectionné,
  // });

  // Filtrer les recettes en fonction de la valeur de recherche actuelle et du tag d'ustensile sélectionné
  const filteredRecipes = recipes.filter((recipe) => {
    const matchesSearch =(
      recipe.name
        .toLowerCase()
        .trim()
        .replace(/\s/g, "")
        .includes(searchValue) ||
      recipe.description
        .toLowerCase()
        .trim()
        .replace(/\s/g, "")
        .includes(searchValue) ||
        recipe.ingredients.some((ingredientObj) =>
        ingredientObj.ingredient.toLowerCase().includes(searchValue)
      ))
      const matchesUstensilTag = recipe.ustensils.some((ustensil) => ustensil.toLowerCase() === ustensilTag.toLowerCase());
      // Retourner true uniquement si la recette correspond à la fois à la recherche et au tag d'ustensile sélectionné
    return matchesSearch && matchesUstensilTag;
  });
  
  // afficher les recettes filtrées
  displayData(filteredRecipes);
  // console.log(filteredRecipes);
  totalRecipeElement.innerText = `${filteredRecipes.length} recettes`;
}
const totalRecipeElement = document.querySelector(".total-recipe");
