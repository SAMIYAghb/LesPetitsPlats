import {displayCard} from '../librairies/view.js';

export const getRecipes = async () => {
  const response = await fetch("../../data/recipes.json");
  const data = await response.json();
  return data;
};
const pluralizeRecipe = (count) => {
  // console.log(count)
  if (count === 0) {
    return "recette";
  } else {
    return count === 1 ? "recette" : "recettes";
  }
};
export const recipes = await getRecipes();
export function displayData(recipes) {
  // console.log(recipes)
  const recipeSection = document.querySelector(".cards-container");
  // Nettoyez le conteneur avant d'ajouter de nouvelles cartes (si nécessaire)
  recipeSection.innerHTML = "";
  recipes.forEach((recipe) => {
    const card = displayCard(recipe); // Appelez displayCard pour obtenir la carte HTML de la recette
    // console.log(card)
    recipeSection.appendChild(card); // Ajoutez la carte au conteneu
  });


  let totalRecipesCount = recipes.length;
    // console.log(totalRecipesCount)
    const totalRecipeElement = document.querySelector(".total-recipe");
    totalRecipeElement.innerText = `${totalRecipesCount} ${pluralizeRecipe(
      totalRecipesCount
    )}`;
  // Si aucune recette n'est trouvée, afficher "not found"
  const notFoundElement = document.querySelector(".not-found");
  // console.log(notFoundElement)
  if (totalRecipesCount === 0) {
    notFoundElement.innerText = "Aucune recette corresond à cette recherche";
  } else {
    notFoundElement.innerText = "";
  }

}


    