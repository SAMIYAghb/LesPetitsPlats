




import {
    displayApplianceTag,
    selectApplianceTag,
  } from "../librairies/displayApplianceTag.js";
  import { recipes } from "../utils/api.js";
import { displayData } from "../utils/api.js";

//   console.log(recipes)


// function addClickListenersToApplianceLinks() {
//   const links = document.querySelectorAll(".link-appliance");
//   links.forEach((link) => {
//     link.addEventListener("click", (event) => {
//       event.preventDefault();
//       const clickedElementContent = link.textContent.trim();
//       selectApplianceTag(clickedElementContent, link);
//       filterRecipesByApplianceTag(clickedElementContent);
//     });
//   });
// }
  //   //*****récuperer tous les appareils sans doublons
  // let filteredappliancesArray;
  // export const getAppliances = (recipes) => {
  //   // console.log(recipes)
  //   const appliancesSet = new Set();
  
  //   recipes.forEach((recipe) => {
  //     const appliance = recipe.appliance;
  //   //   console.log(appliance)
  //     appliancesSet.add(appliance.toLowerCase()); // Convertir en minuscules
  //   });
  
  //   filteredappliancesArray = Array.from(appliancesSet);
  //   // console.log(filteredappliancesArray);
  //   return filteredappliancesArray;
  // };
  // getAppliances(recipes);
  
  //****Afficher les appareils dans le dropDownMenu
  // filteredappliancesArray
  //   .sort((a, b) => a.localeCompare(b, "fr"))
  //   .forEach((appliance) => {
  //     displayApplianceTag(appliance);
  //   });
  // addClickListenersToApplianceLinks();
// }
  //   //************** end  appareils*/
  //   //************** end  appareils*/

  //  Filtrer les recettes en fonction de la recherche actuelle et du tag appareil sélectionné 
//   const selectedApplianceTagsArray = [];
//   export function filterRecipesByApplianceTag(selectedAapplianceTags) {
    
//     const searchValue = document
//     .getElementById("searchInput")
//     .value.toLowerCase()
//     .trim()
//     .replace(/\s/g, "");

//      //ajouter le tag selectionne dans selectedApplianceTagsArray
//      selectedApplianceTagsArray.push(selectedAapplianceTags)
//     //  console.log(selectedApplianceTagsArray)
//     const filteredRecipes = recipes.filter((recipe) => {
//       const matchesSearch =(
//         recipe.name
//           .toLowerCase()
//           .trim()
//           .replace(/\s/g, "")
//           .includes(searchValue) ||
//         recipe.description
//           .toLowerCase()
//           .trim()
//           .replace(/\s/g, "")
//           .includes(searchValue) ||
//           recipe.ingredients.some((ingredientObj) =>
//           ingredientObj.ingredient.toLowerCase().includes(searchValue)
//         ))

       

// // console.log(recipe.appliance)
// // Vérifie si la recette contient le tag d'appareil sélectionné
// const matchesApplianceTags = selectedApplianceTagsArray.every(tag =>
//   recipe.appliance.toLowerCase().includes(tag.toLowerCase())
// );
// //ca fonctionne pas avec le deuxieme tag selectionner , normalement j'obtien 0 des que je selectonne un deuxieme tag
//         // const matchesApplianceTag = recipe.appliance.toLowerCase() === selectedAapplianceTags.toLowerCase();
//         // Retourner true uniquement si la recette correspond à la fois à la recherche et au tag d'ustensile sélectionné
//       return matchesSearch && matchesApplianceTags;
//     });
    
    
//     // afficher les recettes filtrées
//   displayData(filteredRecipes);
//     // console.log(filteredRecipes); 
//     // Afficher le compte du nombre de recettes filtrées
//   totalRecipeElement.innerText = `${filteredRecipes.length} recettes`;

//   updateApplianceSelectBox(filteredRecipes)
//   }
//   const totalRecipeElement = document.querySelector('.total-recipe');




    // Récupérer les ustensiles à partir des recettes filtrées

// function updateApplianceSelectBox(filteredRecipes) {
//   // console.log(filteredRecipes);
//   const applianceList = document.getElementById("applianceList");

// // Effacer les options existantes
// applianceList.innerHTML = "";
// // Récupérer les appareil à partir des recettes filtrées
// const appliancesSet = new Set();
// // console.log(ustensilsSet)
// const filteredAppliances = filteredRecipes.forEach((recipe) => {
//   // console.log(recipe.appliance);
//   const app = recipe.appliance
//   // console.log(app)
//   appliancesSet.add(app);
// });

// }