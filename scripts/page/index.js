import displayCard from "../librairies/view.js";
import { searchRecipe, deleteAccents } from "../librairies/search.js";
import { getRecipes, displayData } from "../utils/api.js";
import { 
  searchIngredientTag,
   getIngredients,
  //  matchingTagsLength 
  } from "./ingredients.js";
import { getAppliances } from "./appliances.js";
import { getUstensil } from "./ustensils.js";


// console.log(matchingTagsLength)

const searchInput = document.getElementById("searchInput");
const init = async () => {
  const recipes = await getRecipes();

  const ingredients = getIngredients(recipes);
  // console.log(ingredients)
  const appliances = getAppliances(recipes);
  // console.log(appliances)
  const ustensils = getUstensil(recipes);
  // console.log(ustensils)
  // const recipesSearch = searchRecipe(recipes);

  // displayData(recipesSearch);
  // Affichage initial des données
  displayData(recipes);

  // Gestionnaire d'événements pour la recherche principale
  searchInput.addEventListener("input", () => {
    //       // console.log(event.currentTarget.value)
    const searchValue = deleteAccents(searchInput.value)
      .toLowerCase()
      .trim()
      .replace(/\s/g, "");
    const recipesSearch = searchRecipe(recipes, searchValue, {
      ingredients: ingredients,
      appliances: appliances,
      ustensils: ustensils
    });
    displayData(recipesSearch);
  });

  // Ajouter un gestionnaire d'événements ipour la recherche par tag d'ingrédients
  const ingredientInput = document.getElementById("ingredientInput");
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
