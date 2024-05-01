//la recherche une seul fonction exporté

// export function deleteAccents(texte) {
//   return texte.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
// }
// console.log(deleteAccents('éééé'))

// export const searchRecipe = (recipes, searchValue, tagArrays) => {
//   // Vérifier si la longueur de la valeur de recherche est supérieure ou égale à 3
//   let recipesSearch = recipes;
//   // if (!searchValue || searchValue.length < 3) {
//   //   return recipes; // Si la valeur de recherche est vide ou inférieure à 3 caractères, retourner toutes les recettes
//   // }
//   // Filtrer les recettes en fonction de la valeur de recherche
//   const filteredRecipes = recipes.filter((recipe) => {
//     // console.log(recipe)
//     // Vérifier si le titre de la recette contient la valeur de recherche
//     if (
//       deleteAccents(recipe.name)
//         .toLowerCase()
//         .trim()
//         .replace(/\s/g, "")
//         .includes(
//           deleteAccents(searchValue).toLowerCase().trim().replace(/\s/g, "")
//         )
//     ) {
//       return true; // Si c'est le cas, garder cette recette
//     }
//     // Vérifier si la description de la recette contient la valeur de recherche
//     if (
//       deleteAccents(recipe.description)
//         .toLowerCase()
//         .trim()
//         .replace(/\s/g, "")
//         .includes(
//           deleteAccents(searchValue).toLowerCase().trim().replace(/\s/g, "")
//         )
//     ) {
//       return true;
//     }
//     // Vérifier si l'ingredient de la recette contient la valeur de recherche
//     if (
//       recipe.ingredients.some((ingredientObj) => {
//         if (
//           typeof ingredientObj === "object" &&
//           "ingredient" in ingredientObj
//         ) {
//           return deleteAccents(ingredientObj.ingredient)
//             .toLowerCase()
//             .trim()
//             .replace(/\s/g, "")
//             .includes(
//               deleteAccents(searchValue).toLowerCase().trim().replace(/\s/g, "")
//             );
//         }
//         return false;
//       })
//     ) {
//       return true;
//     }

//     //Si la recette ne correspond à aucun critère de recherche, la rejeter
//     return false;
//   });
//   // Si aucune recette n'est trouvée, retourner "not found"
//   // if (filteredRecipes.length === 0) {
//   //   const notFound = document.querySelector('.cards-container');
//   //   notFound.inneText = "not found";
//   // }

//   // console.log(filteredRecipes)
//   //add+ filter search ====+++
//   //add+ filter search ====+++
//   //add+ filter search ====+++
//   //add+ filter search ====+++

//   // Vérifier si la recette a des tags correspondant à ceux dans tagArrays
//   if (tagArrays) {
//     // console.log(tagArrays);
//     //   vérifier l'ingredient
//     if (
//       tagArrays.ingredients &&
//       tagArrays.ingredients.length > 0 &&
//       tagArrays.ingredients.some((ingredientObj) => {
//         // console.log(ingredientObj);
//       })
//     ) {
//       return true;
//     }
//     //   //verifient l'appareil
//     if (
//       tagArrays.appliances &&
//       tagArrays.appliances.length > 0 &&
//       tagArrays.appliances.some((appliance) => {
//         // console.log(appliance);
//       })
//     ) {
//       return true;
//     }
//       //verifier l'ustensil
//       if (
//         tagArrays.ustensils &&
//         tagArrays.ustensils.length > 0 &&
//         tagArrays.ustensils.some((ustensil) => {
//           // console.log(ustensil)
//         })
//       ) {
//         return true;
//       }
//   }
//   // afficherle Compte du nombre de recettes filtrées
//   const totalRecipeElement = document.querySelector('.total-recipe');
//   totalRecipeElement.innerText = `${filteredRecipes.length} recettes`;

//   return filteredRecipes; // Renvoyer les recettes filtrées

// };

export const searchRecipe = (recipes, searchValue, tagArrays) => {
  let recipesSearch = recipes;
  // Supprimer les espaces de la valeur de recherche
  // const searchValueTrimmed = deleteAccents(searchValue).toLowerCase().trim().replace(/\s/g, "");
  const searchValueTrimmed = searchValue
    .toLowerCase()
    .trim()
    .replace(/\s/g, "");

  // Vérifier si la valeur de recherche est vide après la suppression des espaces
  if (
    searchValueTrimmed.length === 0 &&
    (!tagArrays || tagArrays.length === 0)
  ) {
    // Si la valeur de recherche est vide, retourner toutes les recettes
    return recipes;
  }

  // Filtrer les recettes en fonction de la valeur de recherche
  let filteredRecipes = recipes.filter((recipe) => {
    // Vérifier si le titre de la recette contient la valeur de recherche
    // if (searchValue.length >= 3) {}
    if (
      recipe.name
        .toLowerCase()
        .trim()
        .replace(/\s/g, "")
        .includes(searchValueTrimmed)
    ) {
      return true;
    }
    // Vérifier si la description de la recette contient la valeur de recherche
    if (
      recipe.description
        .toLowerCase()
        .trim()
        .replace(/\s/g, "")
        .includes(searchValueTrimmed)
    ) {
      return true;
    }
    // Vérifier si l'ingrédient de la recette contient la valeur de recherche
    if (
      recipe.ingredients.some((ingredientObj) => {
        if (
          typeof ingredientObj === "object" &&
          "ingredient" in ingredientObj
        ) {
          // return deleteAccents(ingredientObj.ingredient)
          return ingredientObj.ingredient
            .toLowerCase()
            .trim()
            .replace(/\s/g, "")
            .includes(searchValueTrimmed);
        }
        return false;
      })
    ) {
      return true;
    }

    //Si la recette ne correspond à aucun critère de recherche, la rejeter
    // return false;

    // // Vérifier si la recette a des tags correspondant à ceux dans tagArrays
    // const selectedUstensilTagsArray = tagArrays.selectedUstensilTagsArray;
    // console.log(selectedUstensilTagsArray)
    // if (tagArrays) {
    //   // console.log(tagArrays.selectedUstensilTagsArray)
    //   if (
    //     selectedUstensilTagsArray &&
    //     selectedUstensilTagsArray.length > 0 &&
    //     selectedUstensilTagsArray.some((searchUstensil) => {
    //       console.log("Searching for ustensil:", searchUstensil);
    //       return recipe.ustensils.some((ustensil) => {
    //         console.log("Current ustensil in recipe:", ustensil);
    //         return ustensil
    //           .toLowerCase()
    //           .trim()
    //           .replace(/\s/g, "")
    //           .includes(searchUstensil.toLowerCase().trim().replace(/\s/g, ""));
    //       });
    //     })
    //   ) {
    //     console.log("Recipe matches ustensil search criteria");
    //     return true;
    //   }
    // }
 //Si la recette ne correspond à aucun critère de recherche, la rejeter
    // return false;
  });


  

  // Afficher le compte du nombre de recettes filtrées
  const totalRecipeElement = document.querySelector(".total-recipe");
  totalRecipeElement.innerText = `${filteredRecipes.length} recettes`;

  // Si aucune recette n'est trouvée, afficher "not found"
  // const notFoundElement = document.querySelector('.not-found');
  //   console.log(notFoundElement);
  if (filteredRecipes.length === 0) {
    // console.log(filteredRecipes.length)
    notFoundElement.innerText = "Aucune recette corresond à cette recherche";
  } else {
    // Si des recettes sont trouvées, effacer le message "not found"
    notFoundElement.innerText = "";
  }

  return filteredRecipes; // Renvoyer les recettes filtrées
};

const notFoundElement = document.querySelector(".not-found");
// console.log(notFoundElement);

// export const searchRecipe =(recipes, searchValue, tagArray)=>{

//     //toute la recherche
//     let recipesSearch = recipes;
//     // const search = recipesSearch.

// function deleteAccents(texte) {
//   return texte.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
// }

// // var texteAvecAccents = "Éléphant";
// // var texteSansAccents = enleverAccents(texteAvecAccents);
// // console.log(texteSansAccents); // Affiche "Elephant"

// // export const searchRecipe =(recipes, searchValue)=>{
// //    // Filtrer les recettes en fonction de la valeur de recherche
// //    console.log(recipes, searchValue)
// // }

// La méthode some() teste si au moins un élément du tableau passe le test implémenté par la fonction fournie. Elle renvoie un booléen indiquant le résultat du test.
// const array = [1, 2, 3, 4, 5];
// // Checks whether an element is even
// const even = (ele)=>ele % 2 === 0;

// console.log(array.some(even))//true
// Si on veut vérifier qu'un élément est dans un tableau, on pourra utiliser la méthode Array.prototype.includes().

// Par exemple, si vous recherchez "pomme" dans un tableau contenant ["pomme", "pomme de terre", "pommeau"], includes() retournerait true pour "pomme", mais aussi pour "pommeau", ce qui peut ne pas être souhaité. some() permet de spécifier des conditions plus complexes pour la recherche, ce qui peut être plus approprié dans certains cas.

//verifier l'ustensil
//   // if (
//   //   tagArrays.ustensils &&
//   //   tagArrays.ustensils.length > 0 &&
//   //   tagArrays.ustensils.some((searchUstensil) => {
//   //     console.log(searchUstensil)
//   //     console.log(recipe.ustensil)
//   //     // deleteAccents(recipe.ustensil)
//   //     //   .toLowerCase()
//   //     //   .trim()
//   //     //   .includes(deleteAccents(searchUstensil).toLowerCase().trim());
//   //   })
//   // ) {
//   //   return true;
//   // }

// // Vérifier si la recette a des tags correspondant à ceux dans tagArrays
// if (tagArrays) {
//   // Vérifier les ingrédients
//   if (
//     tagArrays.ingredients &&
//     tagArrays.ingredients.length > 0 &&
//     recipe.ingredients.some((ingredientObj) => {
//       return tagArrays.ingredients.some((searchIngredient) =>
//         deleteAccents(ingredientObj.ingredient)
//           .toLowerCase()
//           .includes(deleteAccents(searchIngredient).toLowerCase().trim())
//       );
//     })
//   ) {
//     return true;
//   }
//   // Vérifier les appareils
//   if (
//     tagArrays.appliances &&
//     tagArrays.appliances.length > 0 &&
//     tagArrays.appliances.some((searchAppliance) =>
//       deleteAccents(recipe.appliance)
//         .toLowerCase()
//         .includes(deleteAccents(searchAppliance).toLowerCase().trim())
//     )
//   ) {
//     return true;
//   }
//   // Vérifier les ustensiles
//   if (
//     tagArrays.ustensils &&
//     tagArrays.ustensils.length > 0 &&
//     recipe.ustensils.some((ustensil) =>
//       tagArrays.ustensils.some((searchUstensil) =>
//         deleteAccents(ustensil)
//           .toLowerCase()
//           .includes(deleteAccents(searchUstensil).toLowerCase().trim())
//       )
//     )
//   ) {
//     return true;
//   }
// }

// return (

//   (tagArrays.filteredIngredientsArray ? tagArrays.filteredIngredientsArray.every((tag) => recipe.ingredients.some((ingredientObj) => ingredientObj.ingredient.toLowerCase().includes(tag))) : true) &&
//   (tagArrays.filteredAppliancesArray ? tagArrays.filteredAppliancesArray.every((tag) => recipe.appliances.map(appliance => appliance.toLowerCase()).includes(tag)) : true) &&
//   // (tagArrays.filteredUstensilsArray ? tagArrays.filteredUstensilsArray.every((tag) => recipe.ustensils.map(ustensil => ustensil.toLowerCase()).includes(tag)) : true)
//   (tagArrays.filteredUstensilsArray ? tagArrays.filteredUstensilsArray.every((tag) => recipe.ustensils.map(ustensil => ustensil.toLowerCase()).includes(tag)) : true)

// );

// Filtrer les recettes en fonction des tags sélectionnés dans chaque catégorie
// if (tagArrays && tagArrays.length > 0) {
//   console.log(tagArrays);
//   console.log(tagArrays.filteredUstensilsArray);
//   console.log(filteredUstensilsArray)
//   const filteredRecipes = recipes.filter((recipe) => {
//    console.log(recipe)
//     // if (tagArrays.filteredIngredientsArray.every((tag) => recipe.ingredients.some((ingredientObj) => ingredientObj.ingredient.toLowerCase().includes(tag)))){
//     //   return true;
//     // }
//     // if(tagArrays.filteredAppliancesArray.every((tag) => recipe.appliances.map(appliance => appliance.toLowerCase()).includes(tag))){
//     //   return true;
//     // }

//     // if (tagArrays.filteredUstensilsArray.every((tag) => recipe.ustensils.map(ustensil => ustensil.toLowerCase()).includes(tag))){
//     //   return true;
//     // }
//   })
// }

// return (
//   recipe.name.toLowerCase().includes(searchValueTrimmed) ||
//   recipe.description.toLowerCase().includes(searchValueTrimmed) ||
//   recipe.ingredients.some((ingredientObj) => {
//     return ingredientObj.ingredient.toLowerCase().includes(searchValueTrimmed);
//   })
// );

// Filtrer les recettes en fonction des tags sélectionnés dans chaque catégorie
// if (tagArrays && (tagArrays.filteredIngredientsArray.length > 0 || tagArrays.filteredAppliancesArray.length > 0 || tagArrays.filteredUstensilsArray.length > 0)) {
//   filteredRecipes = recipes.filter((recipe) => {
//     if (tagArrays.filteredIngredientsArray.length > 0 && !tagArrays.filteredIngredientsArray.every((tag) => recipe.ingredients.some((ingredientObj) => ingredientObj.ingredient.toLowerCase().includes(tag)))) {
//       return false;
//     }
//     if (tagArrays.filteredAppliancesArray.length > 0 && !tagArrays.filteredAppliancesArray.every((tag) => recipe.appliances.map(appliance => appliance.toLowerCase()).includes(tag))) {
//       return false;
//     }
//     if (tagArrays.filteredUstensilsArray.length > 0 && !tagArrays.filteredUstensilsArray.every((tag) => recipe.ustensils.map(ustensil => ustensil.toLowerCase()).includes(tag))) {
//       return false;
//     }
//     return true;
//   });
// }

// // // Vérifier si la recette a des tags correspondant à ceux dans tagArrays

// if (tagArrays) {
//   // console.log(recipes)
//   // console.log(tagArrays)
//   // console.log(tagArrays.filteredIngredientsArray)
//   // console.log(tagArrays.filteredIngredientsArray.length)
// if(tagArrays.filteredIngredientsArray && tagArrays.filteredIngredientsArray.length > 0 &&
//   tagArrays.filteredIngredientsArray.some((ing)=>{
//     console.log(ing)

//   })
// ){
//  console.log('gg')

// }
// }

// console.log(recipe.ustensil)
//   //     // deleteAccents(recipe.ustensil)
//   //     //   .toLowerCase()
//   //     //   .trim()
//   //     //   .includes(deleteAccents(searchUstensil).toLowerCase().trim());
//   //   })
//   // ) {
//   //   return true;
//   // }
// afficher les recettes filtrées
// displayData(filteredRecipes);
