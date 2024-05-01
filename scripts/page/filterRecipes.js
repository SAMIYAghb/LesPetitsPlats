// Fonction pour filtrer les recettes en fonction de tous les tags de toutes les catégories

// const selectedUstensilTagsArray = [];
// const selectedApplianceTagsArray = [];
// const selectedIngredientTagsArray = [];

// Fonctions pour ajouter des tags sélectionnés à chaque tableau correspondant
// function addSelectedUstensilTag(tag) {
//   selectedUstensilTagsArray.push(tag.toLowerCase());
// }

// function addSelectedApplianceTag(tag) {
//   selectedApplianceTagsArray.push(tag.toLowerCase());
// }

// function addSelectedIngredientTag(tag) {
//   selectedIngredientTagsArray.push(tag.toLowerCase());
// }
// import { getRecipes, recipes } from "../utils/api.js";
// // Fonction pour filtrer les recettes en fonction de tous les tags de toutes les catégories
// export function filterRecipesByAllTags() {
//   const searchValue = document
//     .getElementById("searchInput")
//     .value.toLowerCase()
//     .trim()
//     .replace(/\s/g, "");

//   const filteredRecipes = recipes.filter((recipe) => {
//     const matchesSearch = (
//       recipe.name.toLowerCase().includes(searchValue) ||
//       recipe.description.toLowerCase().includes(searchValue) ||
//       recipe.ingredients.some((ingredientObj) =>
//         ingredientObj.ingredient.toLowerCase().includes(searchValue)
//       )
//     );

//     const matchesUstensilTags = selectedUstensilTagsArray.every(tag =>
//       recipe.ustensils.some((ustensil) => ustensil.toLowerCase().includes(tag.toLowerCase()))
//     );

//     const matchesApplianceTags = selectedApplianceTagsArray.every(tag =>
//       recipe.appliance.toLowerCase().includes(tag.toLowerCase())
//     );

//     const matchesIngredientTags = selectedIngredientTagsArray.every(tag =>
//       recipe.ingredients.some((ingredientObj) => ingredientObj.ingredient.toLowerCase().includes(tag.toLowerCase()))
//     );

//     return matchesSearch && matchesUstensilTags && matchesApplianceTags && matchesIngredientTags;
//   });

//   // Afficher les recettes filtrées
//   displayData(filteredRecipes);
//   totalRecipeElement.innerText = `${filteredRecipes.length} recettes`;
// }
// const totalRecipeElement = document.querySelector(".total-recipe");

// //adapte le code de ustensil & appliance & ingredient
















// import { getRecipes, recipes } from "../utils/api.js";
// import { displayData } from "../utils/api.js";
// import {
//     displayUstensilTag,
//     selectUstensilTag,
//   } from "../librairies/displayUstencilTag.js";


// Filtrer les recettes en fonction du tag sélectionné et prenon en consédération la recheche saisi dans la searchBar
// const selectedUstensilTagsArray = [];
// export function filterRecipesByUstensilTag(selectedUstensilTags) {
//   // console.log(ustensilTag)
 
//   const searchValue = document
//     .getElementById("searchInput")
//     .value.toLowerCase()
//     .trim()
//     .replace(/\s/g, "");
//   // console.log(searchValue)

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
//   updateUstensilList(filteredRecipes);

// //   //afficher les ustencils des nouvelle recettes filtré
// //   // Effacer les options existantes
// // ustensilList.innerHTML = "";
// //   // / Récupérer les ustensiles à partir des recettes filtrées
// // const ustensilsSet = new Set();
// // // console.log(ustensilsSet)
// //   const filteredUstensils = filteredRecipes.forEach((recipe) => {
// //     recipe.ustensils.forEach((ustensil) => {
// //       // console.log(ustensil)
// //       ustensilsSet.add(ustensil);
// //     });
// //   });
// //   // console.log(filteredUstensils)
// //    const newFilteredUstensils = Array.from(ustensilsSet).sort((a, b) => a.localeCompare(b, "fr"));
// // // console.log(newFilteredUstensils)
// // newFilteredUstensils.forEach((element)=>{
// //   displayUstensilTag(element);

// // }
// // )

// }


// // Fonction pour mettre à jour la liste d'ustensiles
// function updateUstensilList(filteredRecipes) {
//   ustensilList.innerHTML = "";

//   // Récupérer les ustensiles à partir des recettes filtrées
//   const ustensilsSet = new Set();
//   filteredRecipes.forEach((recipe) => {
//     recipe.ustensils.forEach((ustensil) => {
//       ustensilsSet.add(ustensil);
//     });
//   });
//   const newFilteredUstensils = Array.from(ustensilsSet).sort((a, b) => a.localeCompare(b, "fr"));

//   // Afficher les ustensiles dans la liste
//   newFilteredUstensils.forEach((element) => {
//     displayUstensilTag(element);
//   });

//   // Ajouter un gestionnaire d'événements pour chaque nouveau tag d'ustensile
// // newFilteredUstensils.forEach((element) => {
// //   const link = document.querySelector(`[data-ustensil="${element}"]`);
// //   console.log(link)
// //   link.addEventListener("click", () => {
// //     filterRecipesByUstensilTag([element]);
// //   });
// // });
// }


// const totalRecipeElement = document.querySelector(".total-recipe");
// const ustensilList = document.getElementById("ustensilList");





























// export const searchRecipe = (recipes, searchValue, tagArrays) => {
//     // Supprimer les accents et les espaces de la valeur de recherche
//     const searchValueTrimmed = searchValue.toLowerCase().trim().replace(/\s/g, "");
  
//     // Filtrer les recettes en fonction de la valeur de recherche
//     let filteredRecipes = recipes.filter((recipe) => {
//       // Vérifier si le titre de la recette contient la valeur de recherche
//       if (
//         recipe.name.toLowerCase().trim().replace(/\s/g, "").includes(searchValueTrimmed)
//       ) {
//         return true;
//       }
//       // Vérifier si la description de la recette contient la valeur de recherche
//       if (
//         recipe.description.toLowerCase().trim().replace(/\s/g, "").includes(searchValueTrimmed)
//       ) {
//         return true;
//       }
//       // Vérifier si l'ingrédient de la recette contient la valeur de recherche
//       if (
//         recipe.ingredients.some((ingredientObj) => {
//           if (
//             typeof ingredientObj === "object" &&
//             "ingredient" in ingredientObj
//           ) {
//             return ingredientObj.ingredient.toLowerCase().trim().replace(/\s/g, "").includes(searchValueTrimmed);
//           }
//           return false;
//         })
//       ) {
//         return true;
//       }
//       // Vérifier si la recette a des tags d'ustensil correspondant à ceux dans tagArrays.filteredUstensilsArray
//       if (
//         tagArrays &&
//         tagArrays.filteredUstensilsArray &&
//         tagArrays.filteredUstensilsArray.length > 0
//       ) {
//         return tagArrays.filteredUstensilsArray.every((tag) =>
//           recipe.ustensils.map((ustensil) => ustensil.toLowerCase().trim().replace(/\s/g, "")).includes(tag)
//         );
//       }
//       // Si aucun critère de recherche n'est trouvé, rejeter la recette
//       return false;
//     });
  
//     // Afficher le compte du nombre de recettes filtrées
//     const totalRecipeElement = document.querySelector(".total-recipe");
//     totalRecipeElement.innerText = `${filteredRecipes.length} recettes`;
  
//     // Si aucune recette n'est trouvée, afficher "not found"
//     const notFoundElement = document.querySelector(".not-found");
//     if (filteredRecipes.length === 0) {
//       notFoundElement.innerText = "Aucune recette ne correspond à cette recherche";
//     } else {
//       notFoundElement.innerText = "";
//     }
  
//     return filteredRecipes; // Renvoyer les recettes filtrées
//   };