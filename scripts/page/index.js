import RecipeFactory from "../factories/RecipeFactory.js";

const getRecipes = async () => {
  const response = await fetch("../../data/recipes.json");
  const data = await response.json();
  return data;
};
async function displayData(recipes) {
  const recipePromises = recipes.map((data) => {
    const recipe = RecipeFactory.createRecipe(data);
    // console.log(recipe)
    // displayRecipe(recipe); // Afficher chaque recette
    return recipe;
  });
  // console.log(recipes)
  // console.log(recipePromises)
  const recipeSection = document.querySelector(".cards-container");
  recipePromises.forEach((element) => {
    // const recipe = RecipeFactory.createRecipe(recipes);
    const recipeCardDOM = element.getRecipeCardDom();
    // console.log(recipeCardDOM);
    recipeSection.appendChild(recipeCardDOM);
  });
  return recipePromises;
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
  // console.log(recipes[0].ingredients)

  const recipe = await displayData(recipes); // Attendre que displayRecipes termine
  // console.log(recipe, 'from init');

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
    // const filteredIngredients = ingredients.reduce((accumulator, currentValue) => {
    //     if (!accumulator.includes(currentValue)) {
    //         accumulator.push(currentValue);
    //     }
    //     return accumulator;
    // }, []);
    // console.log( filteredIngredients)
    // return filteredIngredients;
    // Convertir le tableau en ensemble (Set) pour éliminer les doublons
    const filteredIngredients = new Set(ingredients);
    // Convertir l'ensemble (Set) en tableau
    filteredIngredientsArray = Array.from(filteredIngredients);
    // console.log(filteredIngredientsArray);
    return filteredIngredientsArray;
  };
  getIngredients(recipes);

  //*****afficher les ingredients dans le dropDown menu
  // Récupère la liste ul où les ingrédients seront ajoutés
  const ingredientList = document.getElementById("ingredientList");
  // console.log(ingredientList);

  filteredIngredientsArray.forEach((ingredient) => {
    // console.log(ingredient)
    const li = document.createElement("li");
    li.classList.add("li-style");
    // Crée un nouvel élément a
    const link = document.createElement("a");
    link.textContent = `${ingredient}`;
    link.setAttribute("href", "#");
    li.appendChild(link);
    ingredientList.appendChild(li);
  });

  //*****récuperer tous les appareils sans doublons
  let filteredappliancesArray;
  const getAppliance = (recipes) => {
    // console.log(recipes);
    const appliances = [];

    recipes.forEach((recipe) => {
      // console.log(recipe)
      const appliance = recipe.appliance;
      // console.log(appliance);
      appliances.push(appliance);
      // console.log(appliances);

    });
    const filteredappliances = new Set(appliances);
      // console.log(filteredappliances);

      filteredappliancesArray = Array.from(filteredappliances);
      // console.log(filteredappliancesArray)
    return filteredappliancesArray;
  };
  getAppliance(recipes);

  //****Afficher les appareils dans le dropDownMenu
  const applianceList = document.getElementById("applianceList");
  // console.log(applianceList);

  filteredappliancesArray.forEach((appliance) => {
    // console.log(appliance);

    const li = document.createElement("li");
    li.classList.add("li-style");
    // Crée un nouvel élément a
    const link = document.createElement("a");
    link.textContent = `${appliance}`;
    link.setAttribute("href", "#");
    li.appendChild(link);
    applianceList.appendChild(li);
  });

  //*****récuperer tous les ustensils sans doublons
  let filteredUstensilsArray;
  const getUstensil = (recipes) => {
    const ustensilsArray = [];

    recipes.forEach((recipe) =>{
      // console.log(recipe)
      const ustensils = recipe.ustensils;
      // console.log(ustensils);

      ustensils.forEach((ustensil)=>{
        // console.log(ustensil)
        ustensilsArray.push(ustensil);
        // console.log(ustensilsArray)
      })
    })
    const filteredUstensils = new Set(ustensilsArray);
      // console.log(filteredUstensils);
      filteredUstensilsArray = Array.from(filteredUstensils);
      // console.log(filteredUstensilsArray)
    return filteredUstensilsArray;
  }
  getUstensil(recipes)

  //****Afficher les ustensils dans le dropDownMenu
  const ustensilList = document.getElementById("ustensilList");
  // console.log(ustensilList);

  filteredUstensilsArray.forEach((ustensil) => {
    // console.log(ustensil)
    const li = document.createElement("li");
    li.classList.add("li-style");
    // Crée un nouvel élément a
    const link = document.createElement("a");
    link.textContent = `${ustensil}`;
    link.setAttribute("href", "#");
    li.appendChild(link);
    ustensilList.appendChild(li);
  });


};
init();
