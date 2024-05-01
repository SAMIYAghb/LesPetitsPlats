import displayCard from "../librairies/view.js";
import { searchRecipe } from "../librairies/search.js";
import { getRecipes, displayData } from "../utils/api.js";
import // searchIngredientTag,
// getIngredients,
//  matchingTagsLength
"./ingredients.js";
// import { getAppliances } from "./appliances.js";
// import { getUstensil } from "./ustensils.js";

import {
  displayUstensilTag,
  selectUstensilTag,
} from "../librairies/displayUstencilTag.js";
import { displayIngredientTag } from "../librairies/displayIngredientTag.js";
import { displayApplianceTag } from "../librairies/displayApplianceTag.js";
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

/**********Ingredients */
/********** */
/********** */
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
//++++++++++++
//++++++++++++
// Filtrer les recettes en fonction du tag sélectionné
const selectedIngredientTagsArray = [];
export function filterRecipesByIgredientTag(selectedIngredientTags) {
  // Ajoutez le tag actuel à selectedIngredientTagsArray
  selectedIngredientTagsArray.push(selectedIngredientTags);
  const filteredRecipes = recipes.filter((recipe) => {
    // Vérifie si la recette contient tous les tags d'ustensiles sélectionnés
    const matchesIngredientTags = selectedIngredientTagsArray.every((tag) =>
      recipe.ingredients.some((ingredientObj) =>
        ingredientObj.ingredient.toLowerCase().trim().includes(tag.toLowerCase())
      )
    );

    // Retourner true uniquement si la recette correspond à la fois à la recherche et au tag d'ustensile sélectionné
    return matchesIngredientTags;
  });

  // Afficher le nombre de recettes filtrées
  // afficher les recettes filtrées
  displayData(filteredRecipes);
  // Afficher le compte du nombre de recettes filtrées
  totalRecipeElement.innerText = `${filteredRecipes.length} recettes`;
  // console.log(filteredRecipes);

  updateIngredientSelectBox(filteredRecipes);

  // return filteredRecipes;
}
function updateIngredientSelectBox(filteredRecipes) {
  // console.log(filteredRecipes);
  const ingredientList = document.getElementById("ingredientList");

// Effacer les options existantes
ingredientList.innerHTML = "";
// Récupérer les ustensiles à partir des recettes filtrées
const ingredientsSet = new Set();
// console.log(ustensilsSet)
const filteredAppliances = filteredRecipes.forEach((recipe) => {
  // console.log(recipe.ingredients)
  recipe.ingredients.filter((ele) => {
    // console.log(ele.ingredient)
    const ing = ele.ingredient.toLowerCase();
    ingredientsSet.add(ing);
    // console.log(ingredientsSet.add(ing))
  });
});


const newFilteredIngredients = Array.from(ingredientsSet)
.sort((a, b) => a.localeCompare(b, "fr"));
// console.log(newFilteredIngredients)
  // Afficher les ustensiles dans la liste
  newFilteredIngredients.forEach((element) => {
    // console.log(element)
     displayIngredientTag(element);
  });
}
/**********end Ingredients */
/********** */
/********** */
/**********appliances */
/********** */
/********** */
let filteredAppliancesArray;
export const getAppliances = (recipes) => {
  // console.log(recipes)
  const appliancesSet = new Set();

  recipes.forEach((recipe) => {
    const appliance = recipe.appliance;
    //   console.log(appliance)
    appliancesSet.add(appliance.toLowerCase()); // Convertir en minuscules
  });

  filteredAppliancesArray = Array.from(appliancesSet);
  // console.log(filteredAppliancesArray);
  return filteredAppliancesArray;
};
//++++++++++++
//++++++++++++
//  Filtrer les recettes en fonction de la recherche actuelle et du tag appareil sélectionné
const selectedApplianceTagsArray = [];
export function filterRecipesByApplianceTag(selectedAapplianceTags) {
  //ajouter le tag selectionne dans selectedApplianceTagsArray
  selectedApplianceTagsArray.push(selectedAapplianceTags);
  //  console.log(selectedApplianceTagsArray)
  const filteredRecipes = recipes.filter((recipe) => {
    // console.log(recipe.appliance)
    // Vérifie si la recette contient le tag d'appareil sélectionné
    const matchesApplianceTags = selectedApplianceTagsArray.every((tag) =>
      recipe.appliance.toLowerCase().includes(tag.toLowerCase())
    );
    //ca fonctionne pas avec le deuxieme tag selectionner , normalement j'obtien 0 des que je selectonne un deuxieme tag
    // const matchesApplianceTag = recipe.appliance.toLowerCase() === selectedAapplianceTags.toLowerCase();
    // Retourner true uniquement si la recette correspond à la fois à la recherche et au tag d'ustensile sélectionné
    return matchesApplianceTags;
  });

  // afficher les recettes filtrées
  displayData(filteredRecipes);
  // console.log(filteredRecipes);
  // Afficher le compte du nombre de recettes filtrées
  totalRecipeElement.innerText = `${filteredRecipes.length} recettes`;

  updateApplianceSelectBox(filteredRecipes);
}
function updateApplianceSelectBox(filteredRecipes) {
  // console.log(filteredRecipes);
  const applianceList = document.getElementById("applianceList");

  // Effacer les options existantes
  applianceList.innerHTML = "";
  // Récupérer les appareil à partir des recettes filtrées
  const appliancesSet = new Set();
  // console.log(ustensilsSet)
  const filteredAppliances = filteredRecipes.forEach((recipe) => {
    // console.log(recipe.appliance);
    const app = recipe.appliance;
    // console.log(app)
    appliancesSet.add(app);
  });
}
/**********end appliances */
/********** */
/********** */
/**********ustensil */
/********** */
/********** */
let filteredUstensilsArray;
export const getUstensil = (recipes) => {
  // On crée un nouvel ensemble Les ensembles en JavaScript ne permettent pas les doublons, ce qui les rend parfaits pour stocker des valeurs uniques
  const ustensilsSet = new Set();

  recipes.forEach((recipe) => {
    const ustensils = recipe.ustensils;
    //Pour chaque ustensile dans la liste, on ajoute l'ustensile converti en minuscules à l'ensemble ustensilsSet en utilisant
    ustensils.forEach((ustensil) => {
      ustensilsSet.add(ustensil.toLowerCase()); // Convertir en minuscules
    });
  });
  //Conversion de l'ensemble en tableau
  filteredUstensilsArray = Array.from(ustensilsSet);
  // console.log(filteredUstensilsArray);
  return filteredUstensilsArray;
};
const recipes = await getRecipes();
//++++++++++++
//++++++++++++
// // Filtrer les recettes en fonction du tag sélectionné et prenon en consédération la recheche saisi dans la searchBar
const selectedUstensilTagsArray = [];
export function filterRecipesByUstensilTag(selectedUstensilTags) {
  // console.log(selectedUstensilTags)
  // Concaténer les nouveaux tags avec les tags existants
  // Ajoutez le tag actuel à selectedUstensilTagsArray
  selectedUstensilTagsArray.push(selectedUstensilTags);
  // console.log(selectedUstensilTagsArray)
  // Filtrer les recettes en fonction de la valeur de recherche actuelle et du tag d'ustensile sélectionné
  const filteredRecipes = recipes.filter((recipe) => {
    // Vérifie si la recette contient tous les tags d'ustensiles sélectionnés
    const matchesUstensilTags = selectedUstensilTagsArray.every((tag) =>
      recipe.ustensils.some((ustensil) =>
        ustensil.toLowerCase().trim().includes(tag.toLowerCase())
      )
    );
    // Retourner true uniquement si la recette correspond à la fois à la recherche et au tag d'ustensile sélectionné
    return matchesUstensilTags;
  });
  // console.log(filteredRecipes)
  // afficher les recettes filtrées
  displayData(filteredRecipes);
  // console.log(filteredRecipes);
  totalRecipeElement.innerText = `${filteredRecipes.length} recettes`;
  // console.log(filteredRecipes);

  // Mettre à jour la liste d'ustensiles
  updateUstensilSelectBox(filteredRecipes);
}

function updateUstensilSelectBox(filteredRecipes) {
  // console.log(filteredRecipes);
  const ustensilList = document.getElementById("ustensilList");
  // Effacer les options existantes
  ustensilList.innerHTML = "";
  // Récupérer les ustensiles à partir des recettes filtrées
  const ustensilsSet = new Set();
  // console.log(ustensilsSet)
  const filteredUstensils = filteredRecipes.forEach((recipe) => {
    // console.log(recipe.ustensils)
    recipe.ustensils.forEach((ustensil) => {
      ustensilsSet.add(ustensil);
    });
  });
  const newFilteredUstensils = Array.from(ustensilsSet).sort((a, b) =>
    a.localeCompare(b, "fr")
  );
  // console.log(newFilteredUstensils)
  // Afficher les ustensiles dans la liste
  newFilteredUstensils.forEach((element) => {
    displayUstensilTag(element);
  });
}
/**********end ustensil */
/********** */
/********** */


const totalRecipeElement = document.querySelector(".total-recipe");
const searchInput = document.getElementById("searchInput");
const init = async () => {
  // Définir les valeurs par défaut pour l'état de l'input de recherche et les résultats de la recherche
  let defaultSearchValue = "";
  let defaultFilteredRecipes = [];
  // Lorsque vous chargez la page, utilisez les valeurs par défaut pour afficher les résultats
  searchInput.value = defaultSearchValue;
  displayData(defaultFilteredRecipes);

  const recipes = await getRecipes();

  // afficher les Ingredients( tags
  filteredIngredientsArray = getIngredients(recipes);
  filteredIngredientsArray
    .sort((a, b) => a.localeCompare(b, "fr"))
    .forEach((ingredient) => {
      // console.log(ingredient)
      displayIngredientTag(ingredient);
    });
  // afficher les appliance tags
  filteredAppliancesArray = getAppliances(recipes);
  filteredAppliancesArray
    .sort((a, b) => a.localeCompare(b, "fr"))
    .forEach((appliance) => {
      displayApplianceTag(appliance);
    });

  // afficher les Ustensil tags
  filteredUstensilsArray = getUstensil(recipes);
  // console.log(filteredUstensilsArray);
  filteredUstensilsArray
    .sort((a, b) => a.localeCompare(b, "fr"))
    .forEach((ustensil) => {
      displayUstensilTag(ustensil);
    });

  // Affichage initial des données
  displayData(recipes);

  // Définir la variable pour stocker le nombre total de recettes
  let totalRecipesCount = recipes.length;
  // Afficher le nombre total de recettes déjà existantes

  totalRecipeElement.innerText = `${totalRecipesCount} recettes`;

  // Gestionnaire d'événements pour la recherche principale
  searchInput.addEventListener("input", () => {
    const searchValue = searchInput.value
      .toLowerCase()
      .trim()
      .replace(/\s/g, "");
    // Vérifier si la longueur de la valeur de recherche est supérieure ou égale à 3 caractères
    if (searchValue.length >= 3) {
      const recipesSearch = searchRecipe(recipes, searchValue, {
        selectedIngredientTagsArray,
        selectedApplianceTagsArray,
        selectedUstensilTagsArray,
      });
      console.log(selectedIngredientTagsArray,
        selectedApplianceTagsArray,
        selectedUstensilTagsArray)

      displayData(recipesSearch);
    } else {
      // Si la longueur de la valeur de recherche est inférieure à 3 caractères, ne rien faire (ou gérer autrement)
      displayData(recipes);
    }
  });

  // Ajouter un gestionnaire d'événements ipour la recherche par tag d'ingrédients
  const ingredientInput = document.getElementById("ingredientInput");
  // ingredientInput.addEventListener("keyup", searchIngredientTag);
};

init();
