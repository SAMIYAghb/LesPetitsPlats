import {displayCard} from '../librairies/view.js';

export const getRecipes = async () => {
  const response = await fetch("../../data/recipes.json");
  const data = await response.json();
  return data;
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
}