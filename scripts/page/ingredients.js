import { getRecipes, recipes } from "../utils/api.js";
import {
  displayIngredientTag,
  selectIngredientTag,
  displayNewlySelectedTag,
} from "../librairies/displayIngredientTag.js";
import { displayData } from "../utils/api.js";



//   //**************start ingredient*/
//   //**************start ingredient*/

//   //****afficher le tag ingredient selectionné
//   // Ajouter un écouteur d'événements de clic à chaque lien
//   // Définir la fonction qui ajoutera les écouteurs d'événements une fois que les éléments seront prêts
function addClickListenersToIngredientLinks() {
  const links = document.querySelectorAll(".link-ingredient");
  // console.log(links);
  links.forEach((link) => {
    //  console.log(link)
    // link.addEventListener("click", selectUstensilTag);
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const clickedElementContent = link.textContent.trim();
      selectIngredientTag(clickedElementContent, link);
      filterRecipesByIgredientTag(clickedElementContent);
    });
  });
}
// function deleteAccents(texte) {
//   return texte.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
// }
//*****Recuperer tous les filtres sans doublons
let filteredIngredientsArray;
export const getIngredients = (recipes) => {
  // console.log(recipes)
  const ingredientsSet = new Set();

  recipes.forEach((recipe) => {
    const recipeIngredients = recipe.ingredients;

    recipeIngredients.forEach((ingredient) => {
      const ingredientElement = ingredient.ingredient;
      ingredientsSet.add(ingredientElement.toLowerCase()); // Convertir en minuscules
    });
  });

  filteredIngredientsArray = Array.from(ingredientsSet);
  // console.log(filteredIngredientsArray);
  return filteredIngredientsArray;
};
getIngredients(recipes);

// //*****afficher les ingredients dans le dropDown menu
// filteredIngredientsArray
//   .sort((a, b) => a.localeCompare(b, "fr"))
//   .forEach((ingredient) => {
//     displayIngredientTag(ingredient);
//   });

// Affichage des ingrédients triés dans le dropdown menu
filteredIngredientsArray
  .sort((a, b) => a.localeCompare(b, "fr"))
  .forEach((ingredient) => {
    displayIngredientTag(ingredient);
  });
addClickListenersToIngredientLinks();

export const ingredientTag = getIngredients(recipes);
// console.log(ingredientTag);

//   //**************search ingredient*/
const ingredientInput = document.getElementById("ingredientInput");
// export let matchingTagsLength = 0; // Déclare une variable globale pour stocker la longueur des tags correspondants

export const searchIngredientTag = () => {
  // clearDropdown();
  // const inputValue = deleteAccents(ingredientInput.value)
  const inputValue = ingredientInput.value
    .toLowerCase()
    .trim()
    .replace(/\s/g, "");
  // console.log(inputValue)

  // Recherche à partir du premier caractère
  if (inputValue.length > 0) {
    //Vérifie si un tag correspond à l'entrée de l'utilisateur
    // console.log(inputValue);
    const matchingTags = transformedArray.filter((tag) =>
      tag.includes(inputValue)
    );
    // matchingTagsLength =matchingTags.length;
    // console.log(matchingTags)
    // console.log(matchingTags.length)
    if (matchingTags.length > 0) {
      clearDropdown();
      matchingTags.forEach((tag) => {
        displayIngredientTag(tag); // Affiche le tag dans le dropdown
      });
      addClickListenersToNewTags(); // Ajoute les écouteurs d'événements de clic aux tags dans le dropdown
    }
  }
};
// Fonction pour ajouter un écouteur d'événements de clic à chaque tag dans le dropdown
const addClickListenersToNewTags = () => {
  const dropdownTags = document.querySelectorAll(".link-ingredient");
  dropdownTags.forEach((tag) => {
    tag.addEventListener("click", (event) => {
      event.preventDefault();
      const selectedTag = tag.textContent;
      displayNewlySelectedTag(selectedTag);
    });
  });
};
//le tableau
// Appliquer les transformations à chaque élément du tableau
// console.log(ingredientTag)
const transformedArray = ingredientTag.map((ingredient) => {
  // const trimmedIngredient = deleteAccents(ingredient).toLowerCase().trim();
  const trimmedIngredient = ingredient.toLowerCase().trim();
  // .replace(/\s/g, "");
  // console.log(trimmedIngredient);

  return trimmedIngredient;
});
// console.log(transformedArray)

// Fonction pour effacer tous les éléments du dropdown
const clearDropdown = () => {
  const ingredientList = document.getElementById("ingredientList");
  ingredientList.innerHTML = ""; // Supprime tous les éléments enfants
};

//   //**************end ingredient*/
//   //**************end ingredient*/

// Filtrer les recettes en fonction du tag sélectionné
function filterRecipesByIgredientTag(ingredientTag) {
  // console.log(recipes)
  // console.log(ingredientTag)
   // Si le tag d'ingrédient est fermé (aucun tag sélectionné), afficher toutes les recettes
  //  if (!ingredientTag) {
  //   displayData(recipes);
  //   // Mettre à jour le compteur pour afficher le nombre total de recettes
  //   totalRecipeElement.innerText = `${recipes.length} recettes`;
  //   return;
  // }

  const filteredRecipes = recipes.filter((recipe) => {
    // console.log(recipe.ingredients)
    // Vérifie si le tag d'ingrédient correspond à au moins un ingrédient dans la recette
    return recipe.ingredients.some((ingredient) => {
      return ingredient.ingredient.toLowerCase() === ingredientTag.toLowerCase();
    });

    // filter() pour parcourir toutes les recettes et retourner uniquement celles qui ont au moins un ustensile correspondant au tag sélectionné.
    // some() est utilisée pour vérifier si au moins un élément du tableau recipe.ustensils correspond au tag d'ustensile sélectionné,
  });
  // Afficher le nombre de recettes filtrées
  // afficher les recettes filtrées
  displayData(filteredRecipes);
  // Afficher le compte du nombre de recettes filtrées
 
  totalRecipeElement.innerText = `${filteredRecipes.length} recettes`;
  console.log(filteredRecipes);
  return filteredRecipes;
}
const totalRecipeElement = document.querySelector('.total-recipe');

// // Utiliser le résultat stocké
// console.log(filteredRecipes);
// add+ logic to filter ingredient in dropdownmenu




// } else if (matchingTags.length = 0){
//   filteredIngredientsArray
//     .sort((a, b) => a.localeCompare(b, "fr"))
//     .forEach((ingredient) => {
//       displayIngredientTag(ingredient);
//     });
// }
// }else if (inputValue.length = 0){
//     filteredIngredientsArray
//       .sort((a, b) => a.localeCompare(b, "fr"))
//       .forEach((ingredient) => {
//         displayIngredientTag(ingredient);
//       });
//   }
