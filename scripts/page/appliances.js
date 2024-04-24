
// import {
//     displayApplianceTag,
//     selectApplianceTag,
//   } from "../librairies/displayApplianceTag.js";
//   import { recipes } from "../utils/api.js";
// //   console.log(recipes)

// //   //************** start appareils*/
// //   //************** start appareils*/
// function addClickListenersToApplianceLinks() {
//     const links = document.querySelectorAll(".link-appliance");
//     // console.log(links);
//     links.forEach((link) => {
//       //  console.log(link)
//       link.addEventListener("click", selectApplianceTag);
//     });
//   }
  
//   //   //*****récuperer tous les appareils sans doublons
//   let filteredappliancesArray;
//   export const getAppliances = (recipes) => {
//     // console.log(recipes)
//     const appliancesSet = new Set();
  
//     recipes.forEach((recipe) => {
//       const appliance = recipe.appliance;
//     //   console.log(appliance)
//       appliancesSet.add(appliance.toLowerCase()); // Convertir en minuscules
//     });
  
//     filteredappliancesArray = Array.from(appliancesSet);
//     // console.log(filteredappliancesArray);
//     return filteredappliancesArray;
//   };
//   getAppliances(recipes);
  
//   //****Afficher les appareils dans le dropDownMenu
//   filteredappliancesArray
//     .sort((a, b) => a.localeCompare(b, "fr"))
//     .forEach((appliance) => {
//       displayApplianceTag(appliance);
//     });
//   addClickListenersToApplianceLinks();
// // }
//   //   //************** end  appareils*/
//   //   //************** end  appareils*/




import {
    displayApplianceTag,
    selectApplianceTag,
  } from "../librairies/displayApplianceTag.js";
  import { recipes } from "../utils/api.js";
import { displayData } from "../utils/api.js";

//   console.log(recipes)

//   //************** start appareils*/
//   //************** start appareils*/
// function addClickListenersToApplianceLinks() {
//     const links = document.querySelectorAll(".link-appliance");
//     // console.log(links);
//     links.forEach((link) => {
//       //  console.log(link)
//       link.addEventListener("click", selectApplianceTag);
//     });
//   }
function addClickListenersToApplianceLinks() {
  const links = document.querySelectorAll(".link-appliance");
  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const clickedElementContent = link.textContent.trim();
      selectApplianceTag(clickedElementContent, link);
      filterRecipesByApplianceTag(clickedElementContent);
    });
  });
}
  //   //*****récuperer tous les appareils sans doublons
  let filteredappliancesArray;
  export const getAppliances = (recipes) => {
    // console.log(recipes)
    const appliancesSet = new Set();
  
    recipes.forEach((recipe) => {
      const appliance = recipe.appliance;
    //   console.log(appliance)
      appliancesSet.add(appliance.toLowerCase()); // Convertir en minuscules
    });
  
    filteredappliancesArray = Array.from(appliancesSet);
    // console.log(filteredappliancesArray);
    return filteredappliancesArray;
  };
  getAppliances(recipes);
  
  //****Afficher les appareils dans le dropDownMenu
  filteredappliancesArray
    .sort((a, b) => a.localeCompare(b, "fr"))
    .forEach((appliance) => {
      displayApplianceTag(appliance);
    });
  addClickListenersToApplianceLinks();
// }
  //   //************** end  appareils*/
  //   //************** end  appareils*/

  //  Filtrer les recettes en fonction de la recherche actuelle et du tag appareil sélectionné 
   function filterRecipesByApplianceTag(applianceTag) {
    // const filteredRecipes = recipes.filter((recipe) => {
    //   return recipe.appliance.toLowerCase() === applianceTag.toLowerCase();
    // });
    const searchValue = document
    .getElementById("searchInput")
    .value.toLowerCase()
    .trim()
    .replace(/\s/g, "");
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
        const matchesUstensilTag = recipe.appliance.toLowerCase() === applianceTag.toLowerCase();
        // Retourner true uniquement si la recette correspond à la fois à la recherche et au tag d'ustensile sélectionné
      return matchesSearch && matchesUstensilTag;
    });
    
    
    // afficher les recettes filtrées
  displayData(filteredRecipes);
    // console.log(filteredRecipes); 
    // Afficher le compte du nombre de recettes filtrées
  totalRecipeElement.innerText = `${filteredRecipes.length} recettes`;
  }
  const totalRecipeElement = document.querySelector('.total-recipe');
