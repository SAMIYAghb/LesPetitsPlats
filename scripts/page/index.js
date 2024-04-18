import displayCard from "../librairies/view.js";
import {
  displayIngredientTag,
  selectIngredientTag,
} from "../librairies/displayIngredientTag.js";
import {
  displayApplianceTag,
  selectApplianceTag,
} from "../librairies/displayApplianceTag.js";
import {
  displayUstensilTag,
  selectUstensilTag,
} from "../librairies/displayUstencilTag.js";

import { searchRecipe, deleteAccents } from "../librairies/search.js";

import { getRecipes, recipes } from "../utils/api.js";
// import { searchIngredientTag } from "./ingredients.js";
// import { getAppliances } from "./appliances.js";

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
    link.addEventListener("click", selectIngredientTag);
  });
}

//*****Recuperer tous les filtres sans doublons
let filteredIngredientsArray;
const getIngredients = (recipes) => {
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

//*****afficher les ingredients dans le dropDown menu
filteredIngredientsArray
  .sort((a, b) => a.localeCompare(b, "fr"))
  .forEach((ingredient) => {
    displayIngredientTag(ingredient);
  });

// Affichage des ingrédients triés dans le dropdown menu
// filteredIngredientsArray
//   .sort((a, b) => a.localeCompare(b, "fr"))
//   .forEach((ingredient) => {
//     displayIngredientTag(ingredient);
//   });
addClickListenersToIngredientLinks();

export const ingredientTag = getIngredients(recipes);
// console.log(ingredientTag);

//   //**************search ingredient*/
const ingredientInput = document.getElementById("ingredientInput");
const searchIngredientTag = () => {
  // clearDropdown();
  const inputValue = deleteAccents(ingredientInput.value)
    .toLowerCase()
    .trim()
    .replace(/\s/g, "");
  // console.log(inputValue)

  // Recherche à partir du premier caractère
  if (inputValue.length > 0) {
    //Vérifie si un tag correspond à l'entrée de l'utilisateur

    const matchingTags = transformedArray.filter((tag) =>
      tag.includes(inputValue)
    );
    console.log(matchingTags)
    // console.log(matchingTags.sort((a, b) => a.localeCompare(b, "fr")));
    if (matchingTags.length > 0) {
      clearDropdown();
      matchingTags.forEach((tag) => displayIngredientTag(tag));
    // } else if (matchingTags.length = 0){
    //   filteredIngredientsArray
    //     .sort((a, b) => a.localeCompare(b, "fr"))
    //     .forEach((ingredient) => {
    //       displayIngredientTag(ingredient);
    //     });
    // }
  }else if (inputValue.length = 0){
      filteredIngredientsArray
        .sort((a, b) => a.localeCompare(b, "fr"))
        .forEach((ingredient) => {
          displayIngredientTag(ingredient);
        });
    }
    }
};

//le tableau
//   // Appliquer les transformations à chaque élément du tableau
// console.log(ingredientTag)
const transformedArray = ingredientTag.map((ingredient) => {
  const trimmedIngredient = deleteAccents(ingredient).toLowerCase().trim();
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

//   //************** start appareils*/
//   //************** start appareils*/
function addClickListenersToApplianceLinks() {
  const links = document.querySelectorAll(".link-appliance");
  // console.log(links);
  links.forEach((link) => {
    //  console.log(link)
    link.addEventListener("click", selectApplianceTag);
  });
}

//   //*****récuperer tous les appareils sans doublons
let filteredappliancesArray;
const getAppliance = (recipes) => {
  const appliancesSet = new Set();

  recipes.forEach((recipe) => {
    const appliance = recipe.appliance;
    appliancesSet.add(appliance.toLowerCase()); // Convertir en minuscules
  });

  filteredappliancesArray = Array.from(appliancesSet);
  // console.log(filteredappliancesArray);
  return filteredappliancesArray;
};
getAppliance(recipes);

//****Afficher les appareils dans le dropDownMenu
filteredappliancesArray
  .sort((a, b) => a.localeCompare(b, "fr"))
  .forEach((appliance) => {
    displayApplianceTag(appliance);
  });
addClickListenersToApplianceLinks();
//   //************** end  appareils*/
//   //************** end  appareils*/

//   //************** start ustensils*/
//   //************** start ustensils*/
function addClickListenersToUstensilLinks() {
  const links = document.querySelectorAll(".link-ustensil");
  // console.log(links);
  links.forEach((link) => {
    //  console.log(link)
    link.addEventListener("click", selectUstensilTag);
  });
}

//*****récuperer tous les ustensils sans doublons
let filteredUstensilsArray;
const getUstensil = (recipes) => {
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
getUstensil(recipes);

//****Afficher les ustensils dans le dropDownMenu

filteredUstensilsArray
  .sort((a, b) => a.localeCompare(b, "fr"))
  .forEach((ustensil) => {
    displayUstensilTag(ustensil);
  });
addClickListenersToUstensilLinks();
//   //************** end ustensils*/
//   //************** end ustensils*/



const searchInput = document.getElementById("searchInput");
const init = async () => {
  const recipes = await getRecipes();
  // console.log(recipes)
  // const appliances = getAppliances(recipes);
  // const recipesSearch = searchRecipe(recipes);

  // displayData(recipesSearch);

  displayData(recipes);

  // // console.log(searchInput)deleteAccents(searchValue).toLowerCase().trim().replace(/\s/g, "")
  searchInput.addEventListener("input", () => {
    //       // console.log(event.currentTarget.value)
    // const searchValue = searchInput.value.trim();
    const searchValue = deleteAccents(searchInput.value)
      .toLowerCase()
      .trim()
      .replace(/\s/g, "");
    //       // const serachedItem = event.currentTarget.value.trim().toLowerCase();
    //       //   console.log(serachedItem)
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

// let tableau = ["orange", "pomme", "banane", "fraise"];

// // Trier le tableau par ordre alphabétique
// tableau.sort();

// // Afficher le tableau trié
// console.log(tableau);

// Définition du tableau
// let tableau = ["orange", "pomme", "banane", "fraise", "échalote"];

// // Trier le tableau par ordre alphabétique en tenant compte des caractères spéciaux
// tableau.sort((a, b) => a.localeCompare(b, "fr"));

// // Afficher le tableau trié
// console.log(tableau);
// //En utilisant localeCompare() avec l'option 'fr' (pour le français), le tri sera effectué en tenant compte des caractères spéciaux selon les règles de l'ordre alphabétique français

// const tags = ["huile d'olive", "huile d'olives", 'olives'];

// // Trie le tableau selon l'ordre alphabétique français
// const sortedTags = tags.sort((a, b) => a.localeCompare(b, "fr"));

// console.log(sortedTags);
