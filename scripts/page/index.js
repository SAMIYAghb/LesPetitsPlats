// import RecipeFactory from "../factories/RecipeFactory.js";
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

import {searchRecipe} from '../librairies/search.js'
const getRecipes = async () => {
  const response = await fetch("../../data/recipes.json");
  const data = await response.json();
  return data;
};

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

const recipes = await getRecipes();
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
  filteredIngredientsArray.forEach((ingredient) => {
    displayIngredientTag(ingredient);
  });

  addClickListenersToIngredientLinks();

  export const ingredientTag = getIngredients(recipes);
// console.log(IngredientTag);

  //   //**************end ingredient*/

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
filteredappliancesArray.forEach((appliance) => {
  displayApplianceTag(appliance);
});
addClickListenersToApplianceLinks();

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

filteredUstensilsArray.forEach((ustensil) => {
  displayUstensilTag(ustensil);
});
addClickListenersToUstensilLinks();
//   //************** end ustensils*/





const init = async () => {
  const recipes = await getRecipes();
  // console.log(recipes)
  // const recipesSearch = searchRecipe(recipes);
  
  // displayData(recipesSearch);
  

  displayData(recipes);
  
  const searchInput = document.getElementById('searchInput');
  // // console.log(searchInput)
  searchInput.addEventListener('input', ()=>{
  //       // console.log(event.currentTarget.value)
        const searchValue = searchInput.value.trim(); 
  //       // const serachedItem = event.currentTarget.value.trim().toLowerCase();
  //       //   console.log(serachedItem)
        const recipesSearch = searchRecipe(recipes, searchValue); 
      displayData(recipesSearch);
  })

  
  // const displayTags = (tags, type, container) => {
  //   tags.forEach(tag => {
  //       const tagElement = document.createElement('div');
  //       tagElement.classList.add('tag', type);
  //       tagElement.textContent = tag;
  //       container.appendChild(tagElement);
  //   });
  // };
  // const updateTags = () => {
  //   const tagContainer = document.querySelector('.tag-container');
  //   tagContainer.innerHTML = '';

  //   displayTags(ingredientTags, 'ingredient', tagContainer);
  //   displayTags(ustensilTags, 'ustensil', tagContainer);
  //   displayTags(appareilTags, 'appareil', tagContainer);
  // };
  // return updateTags;
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
};
init();


// const displayTags = (tags, type, container) => {
//   tags.forEach(tag => {
//       const tagElement = document.createElement('div');
//       tagElement.classList.add('tag', type);
//       tagElement.textContent = tag;
//       container.appendChild(tagElement);
//   });
// };
// export const updateTags = () => {
//   const tagContainer = document.querySelector('.tag-container');
//   tagContainer.innerHTML = '';

//   displayTags(ingredientTags, 'ingredient', tagContainer);
//   displayTags(ustensilTags, 'ustensil', tagContainer);
//   displayTags(appareilTags, 'appareil', tagContainer);
// };
