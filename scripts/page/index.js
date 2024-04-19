import displayCard from "../librairies/view.js";
import {
  displayIngredientTag,
  selectIngredientTag,
} from "../librairies/displayIngredientTag.js";
// import {
//   displayApplianceTag,
//   selectApplianceTag,
// } from "../librairies/displayApplianceTag.js";
// import {
//   displayUstensilTag,
//   selectUstensilTag,
// } from "../librairies/displayUstencilTag.js";

import { searchRecipe, deleteAccents } from "../librairies/search.js";

import { getRecipes, recipes } from "../utils/api.js";
import { searchIngredientTag } from "./ingredients.js";
import { getAppliances } from "./appliances.js";
import { getUstensil } from "./ustensils.js";

function displayData(recipes) {
  // console.log(recipes)
  const recipeSection = document.querySelector(".cards-container");
  // Nettoyez le conteneur avant d'ajouter de nouvelles cartes (si nécessaire)
  recipeSection.innerHTML = "";
  recipes.forEach((recipe) => {
    const card = displayCard(recipe); // Appelez displayCard pour obtenir la carte HTML de la recette
    // console.log(card)
    recipeSection.appendChild(card); // Ajoutez la carte au conteneu
  });
}

const searchInput = document.getElementById("searchInput");
const init = async () => {
  const recipes = await getRecipes();

  const appliances = getAppliances(recipes);
  const ustensils = getUstensil(recipes);
  // const recipesSearch = searchRecipe(recipes);

  // displayData(recipesSearch);

  displayData(recipes);

  searchInput.addEventListener("input", () => {
    //       // console.log(event.currentTarget.value)
    const searchValue = deleteAccents(searchInput.value)
      .toLowerCase()
      .trim()
      .replace(/\s/g, "");
    const recipesSearch = searchRecipe(recipes, searchValue);
    displayData(recipesSearch);
  });

  // Ajouter un gestionnaire d'événements input au champ d'entrée
  ingredientInput.addEventListener("keyup", searchIngredientTag);

};
init();


//   //***cherche recette par Ingredients
//   const ingredientInput = document.getElementById("ingredientInput");

//   //    const filterIngredients = () => {
//   //       // console.log('ggg');
//   //       const filter = ingredientInput.value;
//   //       // console.log(filter);
//   //       // console.log(filteredIngredientsArray);

//   //       for(let i = 0; i <= filteredIngredientsArray.length; i++){
//   //         console.log(i)
//   //         // Comparer l'élément actuel avec la chaîne de caractères saisi
//   //         if(filteredIngredientsArray[i] ){
//   // console.groupEnd(filteredIngredientsArray[i] )
//   // console.log(filter)
//   //         }
//   //       }
//   //    }

//   // console.log(ingredientInput)
//   // ingredientInput.addEventListener('keyup', filterIngredients);

