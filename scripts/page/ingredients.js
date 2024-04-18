// import {getRecipes,recipes } from '../utils/api.js'
// import {
//     displayIngredientTag,
//     selectIngredientTag,
//   } from "../librairies/displayIngredientTag.js";

// //   //**************start ingredient*/
// //   //**************start ingredient*/

// //   //****afficher le tag ingredient selectionné
// //   // Ajouter un écouteur d'événements de clic à chaque lien
// //   // Définir la fonction qui ajoutera les écouteurs d'événements une fois que les éléments seront prêts
// function addClickListenersToIngredientLinks() {
//     const links = document.querySelectorAll(".link-ingredient");
//     // console.log(links);
//     links.forEach((link) => {
//       //  console.log(link)
//       link.addEventListener("click", selectIngredientTag);
//     });
//   }
//   function deleteAccents(texte) {
//       return texte.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
// }
//   //*****Recuperer tous les filtres sans doublons
//   let filteredIngredientsArray;
//   const getIngredients = (recipes) => {
//     // console.log(recipes)
//     const ingredientsSet = new Set();
  
//     recipes.forEach((recipe) => {
//       const recipeIngredients = recipe.ingredients;
  
//       recipeIngredients.forEach((ingredient) => {
//         const ingredientElement = ingredient.ingredient;
//         ingredientsSet.add(ingredientElement.toLowerCase()); // Convertir en minuscules
//       });
//     });
  
//     filteredIngredientsArray = Array.from(ingredientsSet);
//     // console.log(filteredIngredientsArray);
//     return filteredIngredientsArray;
//   };
//   getIngredients(recipes);
  
//   //*****afficher les ingredients dans le dropDown menu
//   filteredIngredientsArray
//     .sort((a, b) => a.localeCompare(b, "fr"))
//     .forEach((ingredient) => {
//       displayIngredientTag(ingredient);
//     });
  
//   // Affichage des ingrédients triés dans le dropdown menu
//   // filteredIngredientsArray
//   //   .sort((a, b) => a.localeCompare(b, "fr"))
//   //   .forEach((ingredient) => {
//   //     displayIngredientTag(ingredient);
//   //   });
//   addClickListenersToIngredientLinks();
  
//   export const ingredientTag = getIngredients(recipes);
//   // console.log(ingredientTag);
  
//   //   //**************search ingredient*/
//   const ingredientInput = document.getElementById("ingredientInput");
//   export const searchIngredientTag = () => {
//     // clearDropdown();
//     const inputValue = deleteAccents(ingredientInput.value)
//       .toLowerCase()
//       .trim()
//       .replace(/\s/g, "");
//     // console.log(inputValue)
  
//     // Recherche à partir du premier caractère
//     if (inputValue.length > 0) {
//       //Vérifie si un tag correspond à l'entrée de l'utilisateur
  
//       const matchingTags = transformedArray.filter((tag) =>
//         tag.includes(inputValue)
//       );
//       console.log(matchingTags)
//       // console.log(matchingTags.sort((a, b) => a.localeCompare(b, "fr")));
//       if (matchingTags.length > 0) {
//         clearDropdown();
//         matchingTags.forEach((tag) => displayIngredientTag(tag));
//       // } else if (matchingTags.length = 0){
//       //   filteredIngredientsArray
//       //     .sort((a, b) => a.localeCompare(b, "fr"))
//       //     .forEach((ingredient) => {
//       //       displayIngredientTag(ingredient);
//       //     });
//       // }
//     }else if (inputValue.length = 0){
//         filteredIngredientsArray
//           .sort((a, b) => a.localeCompare(b, "fr"))
//           .forEach((ingredient) => {
//             displayIngredientTag(ingredient);
//           });
//       }
//       }
//   };
  
//   //le tableau
//   //   // Appliquer les transformations à chaque élément du tableau
//   // console.log(ingredientTag)
//   const transformedArray = ingredientTag.map((ingredient) => {
//     const trimmedIngredient = deleteAccents(ingredient).toLowerCase().trim();
//     // .replace(/\s/g, "");
//     // console.log(trimmedIngredient);
  
//     return trimmedIngredient;
//   });
//   // console.log(transformedArray)
  
//   // Fonction pour effacer tous les éléments du dropdown
//   const clearDropdown = () => {
//     const ingredientList = document.getElementById("ingredientList");
//     ingredientList.innerHTML = ""; // Supprime tous les éléments enfants
//   };
  
//   //   //**************end ingredient*/
//   //   //**************end ingredient*/
  