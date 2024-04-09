// import RecipeFactory from "../factories/RecipeFactory.js";
import displayCard from '../librairies/view.js'
import {displayIngredientTag, selectIngredientTag} from '../librairies/displayIngredientTag.js'

const getRecipes = async () => {
  const response = await fetch("../../data/recipes.json");
  const data = await response.json();
  return data;
};

function displayData(recipes) {
  // console.log(recipes)
  const recipeSection = document.querySelector(".cards-container");
  // Nettoyez le conteneur avant d'ajouter de nouvelles cartes (si nécessaire)
  recipeSection.innerHTML = '';
  recipes.forEach((recipe) => {
    const card = displayCard(recipe); // Appelez displayCard pour obtenir la carte HTML de la recette
    // console.log(card)
    recipeSection.appendChild(card); // Ajoutez la carte au conteneu
    
  })

}

// console.log(recipeSection)

// const displayRecipe = (recipe) => {
//     console.log(`Recette: ${recipe.name}`);
//     console.log(`Ingrédients:`);
//     recipe.ingredients.forEach(ingredient => {
//         console.log(`- ${ingredient.quantity} ${ingredient.unit || ''} ${ingredient.ingredient}`);
//     });
//     console.log(`Temps de préparation: ${recipe.time} minutes`);
//     console.log(`Description: ${recipe.description}`);
//     console.log('-----------------------------');
// }
// const getIngredients =(recipes)=>{
//     const ingredients = [];

// }
// getIngredients(recipes)

const init = async () => {
  const recipes = await getRecipes();
  // console.log(recipes)
  displayData(recipes);
  // console.log(recipes[0].ingredients)

  // const recipe = displayData(recipes); 
//   // Attendre que displayRecipes termine
  //  console.log(recipe, 'from init');

  // const tagContainer = document.getElementById("tag-container");
//   // console.log(tagContainer)
//   // const div = document.createElement("div");
//   // div.classList.add("tag-element");
//   // tagContainer.appendChild(div);

//   //************** */
//   //************** */
//   //**************start ingredient*/
//   //************** */
//   //************** */

//   //****afficher le tag ingredient selectionné
//   // Ajouter un écouteur d'événements de clic à chaque lien
//   // Définir la fonction qui ajoutera les écouteurs d'événements une fois que les éléments seront prêts
  function addClickListenersToLinks() {
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
    const ingredients = [];
    // console.log('gg')
    recipes.forEach((recipe) => {
      // console.log(recipe)
      // console.log(recipe.ingredients)
      const recipeIngredients = recipe.ingredients;
      // console.log(recipeIngredients)
      recipeIngredients.forEach((ingredient) => {
        // console.log(ingredient)
        // console.log(ingredient.ingredient)
        const ingredientElements = ingredient.ingredient;
        // console.log(ingredientElements)
        ingredients.push(ingredientElements);
      });
    });
    
    // Convertir le tableau en ensemble (Set) pour éliminer les doublons
    const filteredIngredients = new Set(ingredients);
    // Convertir l'ensemble (Set) en tableau
    filteredIngredientsArray = Array.from(filteredIngredients);
    // console.log(filteredIngredientsArray);
    return filteredIngredientsArray;
  };
  getIngredients(recipes);

  //*****afficher les ingredients dans le dropDown menu
  filteredIngredientsArray.forEach((ingredient) => {
    displayIngredientTag(ingredient);
  });

  addClickListenersToLinks();
  

//   //************** */
//   //************** */
//   //**************end ingredient*/
//   //************** */
//   //************** */

//   //************** */
//   //************** */
//   //************** start appareils*/
//   //************** */
//   //************** */
//   //*****récuperer tous les appareils sans doublons
//   let filteredappliancesArray;
//   const getAppliance = (recipes) => {
//     // console.log(recipes);
//     const appliances = [];

//     recipes.forEach((recipe) => {
//       // console.log(recipe)
//       const appliance = recipe.appliance;
//       // console.log(appliance);
//       appliances.push(appliance);
//       // console.log(appliances);
//     });
//     const filteredappliances = new Set(appliances);
//     // console.log(filteredappliances);

//     filteredappliancesArray = Array.from(filteredappliances);
//     // console.log(filteredappliancesArray)
//     return filteredappliancesArray;
//   };
//   getAppliance(recipes);

//   //****Afficher les appareils dans le dropDownMenu
//   const applianceList = document.getElementById("applianceList");
//   // console.log(applianceList);

//   filteredappliancesArray.forEach((appliance) => {
//     // console.log(appliance);

//     const li = document.createElement("li");
//     li.classList.add("li-appliance");
//     // Crée un nouvel élément a
//     const link = document.createElement("a");
//     link.textContent = `${appliance}`;
//     link.setAttribute("href", "#");
//     li.appendChild(link);
//     applianceList.appendChild(li);
//   });

//   //*****récuperer tous les ustensils sans doublons
//   let filteredUstensilsArray;
//   const getUstensil = (recipes) => {
//     const ustensilsArray = [];

//     recipes.forEach((recipe) => {
//       // console.log(recipe)
//       const ustensils = recipe.ustensils;
//       // console.log(ustensils);

//       ustensils.forEach((ustensil) => {
//         // console.log(ustensil)
//         ustensilsArray.push(ustensil);
//         // console.log(ustensilsArray)
//       });
//     });
//     const filteredUstensils = new Set(ustensilsArray);
//     // console.log(filteredUstensils);
//     filteredUstensilsArray = Array.from(filteredUstensils);
//     // console.log(filteredUstensilsArray)
//     return filteredUstensilsArray;
//   };
//   getUstensil(recipes);

//   //************** */
//   //************** */
//   //************** end appareils*/
//   //************** */
//   //************** */

//   //************** */
//   //************** */
//   //************** start ustensils*/
//   //************** */
//   //************** */

//   //****Afficher les ustensils dans le dropDownMenu
//   const ustensilList = document.getElementById("ustensilList");
//   // console.log(ustensilList);

//   filteredUstensilsArray.forEach((ustensil) => {
//     // console.log(ustensil)
//     const li = document.createElement("li");
//     li.classList.add("li-ustensil");
//     // Crée un nouvel élément a
//     const link = document.createElement("a");
//     link.textContent = `${ustensil}`;
//     link.setAttribute("href", "#");
//     li.appendChild(link);
//     ustensilList.appendChild(li);
//   });

//   //************** */
//   //************** */
//   //************** end ustensils*/
//   //************** */
//   //************** */

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

// Définir un tableau d'exemple
// const fruits = ['Apple', 'Orange', 'Banana', 'Mango'];

// // Chaîne de caractères à comparer
// const searchString = 'na';

// // Parcourir chaque élément du tableau
// for (let i = 0; i < fruits.length; i++) {
//     // Comparer l'élément actuel avec la chaîne de caractères
//     if (fruits[i].includes(searchString)) {
//         console.log(`${fruits[i]} contient "${searchString}"`);
//     } else {
//         console.log(`${fruits[i]} ne contient pas "${searchString}"`);
//     }
// }
