import displayCard from "../librairies/view.js";
import { searchRecipe } from "../librairies/search.js";
import { getRecipes, displayData } from "../utils/api.js";
import {
  searchIngredientTag,
  getIngredients,
  //  matchingTagsLength
} from "./ingredients.js";
import { getAppliances } from "./appliances.js";
import { getUstensil } from "./ustensils.js";

// console.log(matchingTagsLength)

// const searchInput = document.getElementById("searchInput");
// const init = async () => {
//   const recipes = await getRecipes();

//   const ingredients = getIngredients(recipes);
//   // console.log(ingredients)
//   const appliances = getAppliances(recipes);
//   // console.log(appliances)
//   const ustensils = getUstensil(recipes);
//   // console.log(ustensils)
//   // const recipesSearch = searchRecipe(recipes);

//   // displayData(recipesSearch);
//   // Affichage initial des données
//   displayData(recipes);



//   // Définir la variable pour stocker le nombre total de recettes
//   let totalRecipesCount = recipes.length;
//   // console.log('totalRecipesCount',totalRecipesCount)
//   // Afficher le nombre total de recettes déjà existantes
//   const totalRecipeElement = document.querySelector(".total-recipe");
//   totalRecipeElement.innerText = `${totalRecipesCount} recettes`;

//   // Gestionnaire d'événements pour la recherche principale
//   searchInput.addEventListener("input", () => {
//     //       // console.log(event.currentTarget.value)
//     // const searchValue = deleteAccents(searchInput.value)
//     const searchValue = searchInput.value
//       .toLowerCase()
//       .trim()
//       .replace(/\s/g, "");
//     const recipesSearch = searchRecipe(recipes, searchValue, {
//       ingredients: ingredients,
//       appliances: appliances,
//       ustensils: ustensils,
//     });

//     displayData(recipesSearch);
//   });

  
//   // Ajouter un gestionnaire d'événements ipour la recherche par tag d'ingrédients
//   const ingredientInput = document.getElementById("ingredientInput");
//   ingredientInput.addEventListener("keyup", searchIngredientTag);
// };
// init();
const searchInput = document.getElementById("searchInput");
const init = async () => {
  // Définir les valeurs par défaut pour l'état de l'input de recherche et les résultats de la recherche
  let defaultSearchValue = "";
  let defaultFilteredRecipes = [];

  // Lorsque vous chargez la page, utilisez les valeurs par défaut pour afficher les résultats
  searchInput.value = defaultSearchValue;
  displayData(defaultFilteredRecipes);

  const recipes = await getRecipes();

  const ingredients = getIngredients(recipes);
  const appliances = getAppliances(recipes);
  const ustensils = getUstensil(recipes);

  // Affichage initial des données
  displayData(recipes);

  // Définir la variable pour stocker le nombre total de recettes
  let totalRecipesCount = recipes.length;
  // Afficher le nombre total de recettes déjà existantes
  const totalRecipeElement = document.querySelector(".total-recipe");
  totalRecipeElement.innerText = `${totalRecipesCount} recettes`;

  // Gestionnaire d'événements pour la recherche principale
  searchInput.addEventListener("input", () => {
    const searchValue = searchInput.value
      .toLowerCase()
      .trim()
      .replace(/\s/g, "");
    const recipesSearch = searchRecipe(recipes, searchValue, {
      ingredients: ingredients,
      appliances: appliances,
      ustensils: ustensils,
    });

    displayData(recipesSearch);
  });

  // Ajouter un gestionnaire d'événements ipour la recherche par tag d'ingrédients
  const ingredientInput = document.getElementById("ingredientInput");
  ingredientInput.addEventListener("keyup", searchIngredientTag);
};

init();

