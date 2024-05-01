// import {
//   displayUstensilTag,
//   selectUstensilTag,
  
// } from "../librairies/displayUstencilTag.js";
// import { recipes } from "../utils/api.js";
// import { displayData } from "../utils/api.js";


// function addClickListenersToUstensilLinks() {
//   const links = document.querySelectorAll(".link-ustensil");
//   // console.log(links);
//   links.forEach((link) => {
//     //  console.log(link)
//     // link.addEventListener("click", selectUstensilTag);
//     link.addEventListener("click", (event) => {
//       event.preventDefault();
//       const clickedElementContent = link.textContent.trim();
//       selectUstensilTag(clickedElementContent, link);
//       filterRecipesByUstensilTag(clickedElementContent);
//       // console.log(clickedElementContent)
//     });
//   });
// }

// //*****récuperer tous les ustensils sans doublons
// let filteredUstensilsArray;
// export const getUstensil = (recipes) => {
//   // On crée un nouvel ensemble Les ensembles en JavaScript ne permettent pas les doublons, ce qui les rend parfaits pour stocker des valeurs uniques
//   const ustensilsSet = new Set();

//   recipes.forEach((recipe) => {
//     const ustensils = recipe.ustensils;
//     //Pour chaque ustensile dans la liste, on ajoute l'ustensile converti en minuscules à l'ensemble ustensilsSet en utilisant
//     ustensils.forEach((ustensil) => {
//       ustensilsSet.add(ustensil.toLowerCase()); // Convertir en minuscules
//     });
//   });
//   //Conversion de l'ensemble en tableau
//   filteredUstensilsArray = Array.from(ustensilsSet);
//   // console.log(filteredUstensilsArray);
//   return filteredUstensilsArray;
// };
// getUstensil(recipes);

// filteredUstensilsArray.sort((a, b) => a.localeCompare(b, "fr"))
//   .forEach((ustensil) => {
//     displayUstensilTag(ustensil);
//   });

// addClickListenersToUstensilLinks();


// // // Filtrer les recettes en fonction du tag sélectionné et prenon en consédération la recheche saisi dans la searchBar
// export const ustensilTag = getUstensil(recipes);
// // console.log(ustensilTag);


// const selectedUstensilTagsArray = [];
// export function filterRecipesByUstensilTag(selectedUstensilTags) {
//   // console.log(ustensilTag)
 
//   const searchValue = document
//     .getElementById("searchInput")
//     .value.toLowerCase()
//     .trim()
//     .replace(/\s/g, "");
//   // console.log(searchValue)
// // Concaténer les nouveaux tags avec les tags existants

//     // Ajoutez le tag actuel à selectedUstensilTagsArray
//   selectedUstensilTagsArray.push(selectedUstensilTags);
//   // console.log(selectedUstensilTagsArray)
//   // Filtrer les recettes en fonction de la valeur de recherche actuelle et du tag d'ustensile sélectionné
//    const filteredRecipes = recipes.filter((recipe) => {
//     // Vérifie si la recette correspond à la recherche
//     const matchesSearch =
//       recipe.name
//         .toLowerCase()
//         .trim()
//         .replace(/\s/g, "")
//         .includes(searchValue) ||
//       recipe.description
//         .toLowerCase()
//         .trim()
//         .replace(/\s/g, "")
//         .includes(searchValue) ||
//       recipe.ingredients.some((ingredientObj) =>
//         ingredientObj.ingredient.toLowerCase().includes(searchValue)
//       );
   
//   //  console.log(recipe.ustensils)
//     // Vérifie si la recette contient tous les tags d'ustensiles sélectionnés
//     const matchesUstensilTags = selectedUstensilTagsArray.every(tag =>
//       recipe.ustensils.some((ustensil) => ustensil.toLowerCase().includes(tag.toLowerCase()))
//   );
//     //  console.log(recipe.ustensils)
//   //  console.log(tagsArray)
//     // Retourner true uniquement si la recette correspond à la fois à la recherche et au tag d'ustensile sélectionné
//     return matchesSearch && matchesUstensilTags;
//   });
// // console.log(filteredRecipes)
//   // afficher les recettes filtrées
//   displayData(filteredRecipes);
//   // console.log(filteredRecipes);
//   totalRecipeElement.innerText = `${filteredRecipes.length} recettes`;
//   // console.log(filteredRecipes);

//   // Mettre à jour la liste d'ustensiles
//   updateUstensilSelectBox(filteredRecipes);



// }




// const totalRecipeElement = document.querySelector(".total-recipe");
// const ustensilList = document.getElementById("ustensilList");


//   // Récupérer les ustensiles à partir des recettes filtrées

// function updateUstensilSelectBox(filteredRecipes) {
//   // console.log(filteredRecipes);
 

// // Effacer les options existantes
// ustensilList.innerHTML = "";
// // Récupérer les ustensiles à partir des recettes filtrées
// const ustensilsSet = new Set();
// // console.log(ustensilsSet)
// const filteredUstensils = filteredRecipes.forEach((recipe) => {
//   // console.log(recipe.ustensils)
//   recipe.ustensils.forEach((ustensil) => {
//     ustensilsSet.add(ustensil);
//   });
// });


// const newFilteredUstensils = Array.from(ustensilsSet)
// .sort((a, b) => a.localeCompare(b, "fr"));
// // console.log(newFilteredUstensils)
//   // Afficher les ustensiles dans la liste
//   newFilteredUstensils.forEach((element) => {
//     displayUstensilTag(element);
//   });
// }

//la je doit verifier pour quoi il s'affiche que le dernier tag selectionner




















import {
  displayUstensilTag,
  selectUstensilTag,
} from "../librairies/displayUstencilTag.js";
import { recipes } from "../utils/api.js";
import { displayData } from "../utils/api.js";


// function addClickListenersToUstensilLinks() {
//   const links = document.querySelectorAll(".link-ustensil");
//   // console.log(links);
//   links.forEach((link) => {
//     //  console.log(link)
//     // link.addEventListener("click", selectUstensilTag);
//     link.addEventListener("click", (event) => {
//       event.preventDefault();
//       const clickedElementContent = link.textContent.trim();
//       selectUstensilTag(clickedElementContent, link);
//       // filterRecipesByUstensilTag(clickedElementContent);
//       // console.log(clickedElementContent)
//     });
//   });
// }

//*****récuperer tous les ustensils sans doublons
// let filteredUstensilsArray;
// export const getUstensil = (recipes) => {
//   // On crée un nouvel ensemble Les ensembles en JavaScript ne permettent pas les doublons, ce qui les rend parfaits pour stocker des valeurs uniques
//   const ustensilsSet = new Set();

//   recipes.forEach((recipe) => {
//     const ustensils = recipe.ustensils;
//     //Pour chaque ustensile dans la liste, on ajoute l'ustensile converti en minuscules à l'ensemble ustensilsSet en utilisant
//     ustensils.forEach((ustensil) => {
//       ustensilsSet.add(ustensil.toLowerCase()); // Convertir en minuscules
//     });
//   });
//   //Conversion de l'ensemble en tableau
//   filteredUstensilsArray = Array.from(ustensilsSet);
//   // console.log(filteredUstensilsArray);
//   return filteredUstensilsArray;
// };
// getUstensil(recipes);

// filteredUstensilsArray.sort((a, b) => a.localeCompare(b, "fr"))
//   .forEach((ustensil) => {
//     displayUstensilTag(ustensil);
//   });

// addClickListenersToUstensilLinks();


// // Filtrer les recettes en fonction du tag sélectionné et prenon en consédération la recheche saisi dans la searchBar
// export const ustensilTag = getUstensil(recipes);
// console.log(ustensilTag);


// const selectedUstensilTagsArray = [];
// export function filterRecipesByUstensilTag(selectedUstensilTags) {
//   // console.log(ustensilTag)
 
//   const searchValue = document
//     .getElementById("searchInput")
//     .value.toLowerCase()
//     .trim()
//     .replace(/\s/g, "");
//   // console.log(searchValue)
// // Concaténer les nouveaux tags avec les tags existants

//     // Ajoutez le tag actuel à selectedUstensilTagsArray
//   selectedUstensilTagsArray.push(selectedUstensilTags);
//   // console.log(selectedUstensilTagsArray)
//   // Filtrer les recettes en fonction de la valeur de recherche actuelle et du tag d'ustensile sélectionné
//    const filteredRecipes = recipes.filter((recipe) => {
//     // Vérifie si la recette correspond à la recherche
//     const matchesSearch =
//       recipe.name
//         .toLowerCase()
//         .trim()
//         .replace(/\s/g, "")
//         .includes(searchValue) ||
//       recipe.description
//         .toLowerCase()
//         .trim()
//         .replace(/\s/g, "")
//         .includes(searchValue) ||
//       recipe.ingredients.some((ingredientObj) =>
//         ingredientObj.ingredient.toLowerCase().includes(searchValue)
//       );
   
//   //  console.log(recipe.ustensils)
//     // Vérifie si la recette contient tous les tags d'ustensiles sélectionnés
//     const matchesUstensilTags = selectedUstensilTagsArray.every(tag =>
//       recipe.ustensils.some((ustensil) => ustensil.toLowerCase().includes(tag.toLowerCase()))
//   );
//     //  console.log(recipe.ustensils)
//   //  console.log(tagsArray)
//     // Retourner true uniquement si la recette correspond à la fois à la recherche et au tag d'ustensile sélectionné
//     return matchesSearch && matchesUstensilTags;
//   });
// // console.log(filteredRecipes)
//   // afficher les recettes filtrées
//   displayData(filteredRecipes);
//   // console.log(filteredRecipes);
//   totalRecipeElement.innerText = `${filteredRecipes.length} recettes`;
//   // console.log(filteredRecipes);

//   // Mettre à jour la liste d'ustensiles
//   updateUstensilSelectBox(filteredRecipes);



// }




// const totalRecipeElement = document.querySelector(".total-recipe");
// const ustensilList = document.getElementById("ustensilList");


  // Récupérer les ustensiles à partir des recettes filtrées

// function updateUstensilSelectBox(filteredRecipes) {
//   // console.log(filteredRecipes);
 

// // Effacer les options existantes
// ustensilList.innerHTML = "";
// // Récupérer les ustensiles à partir des recettes filtrées
// const ustensilsSet = new Set();
// // console.log(ustensilsSet)
// const filteredUstensils = filteredRecipes.forEach((recipe) => {
//   // console.log(recipe.ustensils)
//   recipe.ustensils.forEach((ustensil) => {
//     ustensilsSet.add(ustensil);
//   });
// });


const newFilteredUstensils = Array.from(ustensilsSet)
.sort((a, b) => a.localeCompare(b, "fr"));
// console.log(newFilteredUstensils)
  // Afficher les ustensiles dans la liste
  newFilteredUstensils.forEach((element) => {
    displayUstensilTag(element);
  });
}






















// // La différence entre les méthodes every() et some() réside dans leur comportement lorsqu'elles sont utilisées sur un tableau.

// // every() : Cette méthode vérifie si tous les éléments d'un tableau satisfont une condition spécifiée par une fonction de rappel. Elle retourne true si tous les éléments passent le test, sinon elle retourne false. En d'autres termes, elle renvoie true si chaque élément du tableau répond à la condition spécifiée.
// // some() : Cette méthode vérifie si au moins un des éléments d'un tableau satisfait une condition spécifiée par une fonction de rappel. Elle retourne true si au moins un élément passe le test, sinon elle retourne false. En d'autres termes, elle renvoie true dès qu'un élément du tableau répond à la condition spécifiée.

// // Dans le contexte de mon code :

// // Utiliser every() signifie que je vérifie si **tous les tags** d'ustensiles sélectionnés sont inclus dans les ustensiles de la recette. Si chaque tag est présent au moins une fois dans les ustensiles de la recette, la condition est vraie et matchesUstensilTags sera true.
// // Utiliser some() signifie que je vérifie si **au moins un des tags** d'ustensiles sélectionnés est inclus dans les ustensiles de la recette. Si au moins un des tags est présent dans les ustensiles de la recette, la condition est vraie et matchesUstensilTags sera true.