// Fonction pour échapper les caractères spéciaux dans une expression régulière
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
const searchRecipe = (recipes, searchValue, tagArrays) => {
  let recipesSearch = recipes;
  // Supprimer les espaces de la valeur de recherche
  const searchValueTrimmed = searchValue
    .toLowerCase()
    .trim()
    .replace(/\s/g, '');

  // Vérifier si la valeur de recherche est vide après la suppression des espaces
  if (
    searchValueTrimmed.length === 0
    && (!tagArrays || tagArrays.length === 0)
  ) {
    // Si la valeur de recherche est vide, retourner toutes les recettes
    return recipesSearch;
  }

  // Filtrer les recettes en fonction de la valeur de recherche
  if (searchValueTrimmed.length !== 0) {
    const escapedSearchValue = escapeRegExp(searchValueTrimmed);
    // Utilisation de RegExp pour échapper les caractères spéciaux dans la recherche
    const regex = new RegExp(escapedSearchValue, 'i');
    recipesSearch = recipesSearch.filter((recipe) => {
      if (regex.test(recipe.name.toLowerCase().replace(/\s/g, ''))) {
        return true;
      }

      if (regex.test(recipe.description.toLowerCase().replace(/\s/g, ''))) {
        return true;
      }
      // Vérifier si l'ingrédient de la recette contient la valeur de recherche
      if (
        recipe.ingredients.some((ingredientObj) => {
          if (
            typeof ingredientObj === 'object'
            && 'ingredient' in ingredientObj
          ) {
            return regex.test(
              ingredientObj.ingredient.toLowerCase().replace(/\s/g, ''),
            );
          }
          return false;
        })
      ) {
        return true;
      }
      return false;
    });
  }

  // Filtrer les recettes en fonction des tags d'ingrédients sélectionnés
  if (tagArrays && tagArrays.selectedIngredientTagsArray.length > 0) {
    recipesSearch = recipesSearch.filter((recipe) => tagArrays.selectedIngredientTagsArray
      .every((searchIngredient) => {
        const escapedTag = escapeRegExp(searchIngredient.toLowerCase());
        const tagRegex = new RegExp(escapedTag, 'i');
        return recipe.ingredients.some((ingredientObj) => tagRegex
          .test(ingredientObj.ingredient.toLowerCase()));
      }));
  }
  // Filtrer les recettes en fonction des tags d'appareil sélectionnés
  if (tagArrays && tagArrays.selectedApplianceTagsArray.length > 0) {
    recipesSearch = recipesSearch.filter((recipe) => tagArrays.selectedApplianceTagsArray
      .every((tag) => {
        const escapedTag = escapeRegExp(tag.toLowerCase());
        const tagRegex = new RegExp(escapedTag, 'i');
        return tagRegex.test(recipe.appliance.toLowerCase());
      }));
  }
  // Filtrer les recettes en fonction des tags ustensil sélectionnés
  if (tagArrays && tagArrays.selectedUstensilTagsArray.length > 0) {
    // console.log(tagArrays.selectedUstensilTagsArray, 'depuis searchJs')
    recipesSearch = recipesSearch
      .filter((recipe) => tagArrays.selectedUstensilTagsArray
        .every((searchUstensil) => {
        // console.log(typeof(searchUstensil))
          const escapedUstensil = escapeRegExp(searchUstensil.toLowerCase());
          const ustensilRegex = new RegExp(escapedUstensil, 'i');
          return recipe.ustensils.some((ustensil) => ustensilRegex.test(ustensil.toLowerCase()));
        }));
  }

  return recipesSearch; // Renvoyer les recettes filtrées
};
export default searchRecipe;

// La méthode some() teste si au moins un élément du tableau
// passe le test implémenté par la fonction fournie. Elle renvoie
// un booléen indiquant le résultat du test.
// const array = [1, 2, 3, 4, 5];
// // Checks whether an element is even
// const even = (ele)=>ele % 2 === 0;

// console.log(array.some(even))//true
// Si on veut vérifier qu'un élément est dans un tableau, on pourra utiliser
// la méthode Array.prototype.includes().

// Par exemple, si vous recherchez "pomme" dans un tableau contenant
//  ["pomme", "pomme de terre", "pommeau"], includes() retournerait true
// pour "pomme", mais aussi pour "pommeau", ce qui peut ne pas être souhaité.
//  some() permet de spécifier des conditions plus complexes pour la recherche,
// ce qui peut être plus approprié dans certains cas.

// const regex = /chat/;
// const phrase = "Les chiens sont adorables";

// const resultat = regex.test(phrase);

// console.log(resultat); // Cela affichera false car la phrase ne contient pas le mot "chat".










// // Fonction pour échapper les caractères spéciaux dans une expression régulière
// function escapeRegExp(string) {
//   return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
// }

// export const searchRecipe = (recipes, searchValue, tagArrays) => {
//   let recipesSearch = recipes;
//   const searchValueTrimmed = searchValue
//     .toLowerCase()
//     .trim()
//     .replace(/\s/g, "");

//   if (
//     searchValueTrimmed.length === 0 &&
//     (!tagArrays || tagArrays.length === 0)
//   ) {
//     return recipesSearch;
//   }

//   if (searchValueTrimmed.length !== 0) {
//     const escapedSearchValue = escapeRegExp(searchValueTrimmed);
//     const regex = new RegExp(escapedSearchValue, "i");
//     const filteredRecipes = [];
// //boucle itère sur chaque recette dans le tableau recipesSearch.
//     for (let i = 0; i < recipesSearch.length; i++) {
//       //À chaque itération, la recette actuelle est récupérée à partir de recipesSearch[i] et stockée dans la variable recipe
//       const recipe = recipesSearch[i];
//       //vérifie si l'expression régulière regex correspond au nom de la recette ou à sa description
//       if (
//         regex.test(recipe.name.toLowerCase().replace(/\s/g, "")) ||
//         regex.test(recipe.description.toLowerCase().replace(/\s/g, ""))
//       ) {
//         filteredRecipes.push(recipe);
//         continue;
//       }

//       for (let j = 0; j < recipe.ingredients.length; j++) {
//         const ingredientObj = recipe.ingredients[j];
//         if (
//           typeof ingredientObj === "object" &&
//           "ingredient" in ingredientObj &&
//           regex.test(ingredientObj.ingredient.toLowerCase().replace(/\s/g, ""))
//         ) {
//           filteredRecipes.push(recipe);
//           break;
//         }
//       }
//     }
//     recipesSearch = filteredRecipes;
//   }

//   if (tagArrays && tagArrays.selectedIngredientTagsArray.length > 0) {
//     const filteredRecipes = [];
//     // Cette boucle itère sur chaque recette dans le tableau recipesSearch
//     for (let i = 0; i < recipesSearch.length; i++) {
//       const recipe = recipesSearch[i];
//       // Cette variable sera utilisée pour déterminer si une recette correspond à tous les tags d'ingrédients sélectionnés.
//       let match = true;
// //Cette boucle itère sur chaque tag d'ingrédient sélectionné dans tagArrays.selectedIngredientTagsArray
//       for (let j = 0; j < tagArrays.selectedIngredientTagsArray.length; j++) {
//         const searchIngredient = tagArrays.selectedIngredientTagsArray[j];
//         //Création de l'expression régulière pour le tag d'ingrédient
//         const escapedTag = escapeRegExp(searchIngredient.toLowerCase());
//         const tagRegex = new RegExp(escapedTag, "i");

//         let ingredientMatch = false;
//         // Une autre boucle interne itère sur chaque ingrédient de la recette en cours de traitement.
//         for (let k = 0; k < recipe.ingredients.length; k++) {
//           const ingredientObj = recipe.ingredients[k];
//           //Vérification de la correspondance de l'ingrédient avec le tag
//           if (tagRegex.test(ingredientObj.ingredient.toLowerCase())) {
//             // si l'ingrédient correspond à l'expression régulière du tag d'ingrédient
//             ingredientMatch = true;
//             break;
//           }
//         }

//         if (!ingredientMatch) {
//           match = false;
//           break;
//         }
//       }
//       if (match) {
//         //Ajout de la recette filtrée
//         filteredRecipes.push(recipe);
//       }
//     }
//     recipesSearch = filteredRecipes;
//   }

//   if (tagArrays && tagArrays.selectedApplianceTagsArray.length > 0) {
//     const filteredRecipes = [];

//     for (let i = 0; i < recipesSearch.length; i++) {
//       const recipe = recipesSearch[i];
//       let match = true;

//       for (let j = 0; j < tagArrays.selectedApplianceTagsArray.length; j++) {
//         const tag = tagArrays.selectedApplianceTagsArray[j];
//         const escapedTag = escapeRegExp(tag.toLowerCase());
//         const tagRegex = new RegExp(escapedTag, "i");

//         if (!tagRegex.test(recipe.appliance.toLowerCase())) {
//           match = false;
//           break;
//         }
//       }
//       if (match) {
//         filteredRecipes.push(recipe);
//       }
//     }
//     recipesSearch = filteredRecipes;
//   }

//   if (tagArrays && tagArrays.selectedUstensilTagsArray.length > 0) {
//     const filteredRecipes = [];

//     for (let i = 0; i < recipesSearch.length; i++) {
//       const recipe = recipesSearch[i];
//       let match = true;

//       for (let j = 0; j < tagArrays.selectedUstensilTagsArray.length; j++) {
//         const searchUstensil = tagArrays.selectedUstensilTagsArray[j];
//         const escapedUstensil = escapeRegExp(searchUstensil.toLowerCase());
//         const ustensilRegex = new RegExp(escapedUstensil, "i");

//         let ustensilMatch = false;
//         for (let k = 0; k < recipe.ustensils.length; k++) {
//           const ustensil = recipe.ustensils[k];
//           if (ustensilRegex.test(ustensil.toLowerCase())) {
//             ustensilMatch = true;
//             break;
//           }
//         }

//         if (!ustensilMatch) {
//           match = false;
//           break;
//         }
//       }
//       if (match) {
//         filteredRecipes.push(recipe);
//       }
//     }
//     recipesSearch = filteredRecipes;
//   }

//   return recipesSearch;
// };