// Fonction pour échapper les caractères spéciaux dans une expression régulière
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

const searchRecipe = (recipes, searchValue, tagArrays) => {
  let recipesSearch = recipes;
  const searchValueTrimmed = searchValue
    .toLowerCase()
    .trim()
    .replace(/\s/g, '');

  if (
    searchValueTrimmed.length === 0
    && (!tagArrays || tagArrays.length === 0)
  ) {
    return recipesSearch;
  }

  if (searchValueTrimmed.length !== 0) {
    const escapedSearchValue = escapeRegExp(searchValueTrimmed);
    const regex = new RegExp(escapedSearchValue, 'i');
    const filteredRecipes = [];
    // boucle itère sur chaque recette dans le tableau recipesSearch.
    for (let i = 0; i < recipesSearch.length; i += 1) {
      const recipe = recipesSearch[i];
      const recipeName = recipe.name.toLowerCase().replace(/\s/g, '');
      const recipeDescription = recipe.description.toLowerCase().replace(/\s/g, '');
      let ingredientMatch = false;

      for (let j = 0; j < recipe.ingredients.length; j += 1) {
        const ingredientObj = recipe.ingredients[j];
        if (typeof ingredientObj === 'object' && 'ingredient' in ingredientObj) {
          const ingredientName = ingredientObj.ingredient.toLowerCase().replace(/\s/g, '');
          if (regex.test(ingredientName)) {
            ingredientMatch = true;
            break; // Sortir de la boucle des ingrédients si une correspondance est trouvée
          }
        }
      }

      if (regex.test(recipeName) || regex.test(recipeDescription) || ingredientMatch) {
        filteredRecipes.push(recipe);
      }
    }

    recipesSearch = filteredRecipes;
  }

  if (tagArrays && tagArrays.selectedIngredientTagsArray.length > 0) {
    const filteredRecipes = [];
    // Cette boucle itère sur chaque recette dans le tableau recipesSearch
    for (let i = 0; i < recipesSearch.length; i += 1) {
      const recipe = recipesSearch[i];
      // Cette variable sera utilisée pour déterminer si une recette correspond
      //  à tous les tags d'ingrédients sélectionnés.
      let match = true;
      // Cette boucle itère sur chaque tag d'ingrédient sélectionné dans
      // tagArrays.selectedIngredientTagsArray
      for (let j = 0; j < tagArrays.selectedIngredientTagsArray.length; j += 1) {
        const searchIngredient = tagArrays.selectedIngredientTagsArray[j];
        // Création de l'expression régulière pour le tag d'ingrédient
        const escapedTag = escapeRegExp(searchIngredient.toLowerCase());
        const tagRegex = new RegExp(escapedTag, 'i');

        let ingredientMatch = false;
        // Une autre boucle interne itère sur chaque ingrédient de la recette
        // en cours de traitement.
        for (let k = 0; k < recipe.ingredients.length; k += 1) {
          const ingredientObj = recipe.ingredients[k];
          // Vérification de la correspondance de l'ingrédient avec le tag
          if (tagRegex.test(ingredientObj.ingredient.toLowerCase())) {
            // si l'ingrédient correspond à l'expression régulière du tag d'ingrédient
            ingredientMatch = true;
            break;
          }
        }

        if (!ingredientMatch) {
          match = false;
          break;
        }
      }
      if (match) {
        // Ajout de la recette filtrée
        filteredRecipes.push(recipe);
      }
    }
    recipesSearch = filteredRecipes;
  }

  if (tagArrays && tagArrays.selectedApplianceTagsArray.length > 0) {
    const filteredRecipes = [];

    for (let i = 0; i < recipesSearch.length; i += 1) {
      const recipe = recipesSearch[i];
      let match = true;

      for (let j = 0; j < tagArrays.selectedApplianceTagsArray.length; j += 1) {
        const tag = tagArrays.selectedApplianceTagsArray[j];
        const escapedTag = escapeRegExp(tag.toLowerCase());
        const tagRegex = new RegExp(escapedTag, 'i');

        if (!tagRegex.test(recipe.appliance.toLowerCase())) {
          match = false;
          break;
        }
      }
      if (match) {
        filteredRecipes.push(recipe);
      }
    }
    recipesSearch = filteredRecipes;
  }

  if (tagArrays && tagArrays.selectedUstensilTagsArray.length > 0) {
    const filteredRecipes = [];

    for (let i = 0; i < recipesSearch.length; i += 1) {
      const recipe = recipesSearch[i];
      let match = true;

      for (let j = 0; j < tagArrays.selectedUstensilTagsArray.length; j += 1) {
        const searchUstensil = tagArrays.selectedUstensilTagsArray[j];
        const escapedUstensil = escapeRegExp(searchUstensil.toLowerCase());
        const ustensilRegex = new RegExp(escapedUstensil, 'i');

        let ustensilMatch = false;
        for (let k = 0; k < recipe.ustensils.length; k += 1) {
          const ustensil = recipe.ustensils[k];
          if (ustensilRegex.test(ustensil.toLowerCase())) {
            ustensilMatch = true;
            break;
          }
        }

        if (!ustensilMatch) {
          match = false;
          break;
        }
      }
      if (match) {
        filteredRecipes.push(recipe);
      }
    }
    recipesSearch = filteredRecipes;
  }

  return recipesSearch;
};
export default searchRecipe;
