
//la recherche une seul fonction exporté

export function deleteAccents(texte) {
  return texte.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
// console.log(deleteAccents('éééé'))

export const searchRecipe = (recipes, searchValue, tagArrays) => {
  // Vérifier si la longueur de la valeur de recherche est supérieure ou égale à 3
  let recipesSearch = recipes;
  // if (!searchValue || searchValue.length < 3) {
  //   return recipes; // Si la valeur de recherche est vide ou inférieure à 3 caractères, retourner toutes les recettes
  // }
  // Filtrer les recettes en fonction de la valeur de recherche
  const filteredRecipes = recipes.filter((recipe) => {
    // console.log(recipe)
    // Vérifier si le titre de la recette contient la valeur de recherche
    if (
      deleteAccents(recipe.name)
        .toLowerCase()
        .trim()
        .replace(/\s/g, "")
        .includes(
          deleteAccents(searchValue).toLowerCase().trim().replace(/\s/g, "")
        )
    ) {
      return true; // Si c'est le cas, garder cette recette
    }
    // Vérifier si la description de la recette contient la valeur de recherche
    if (
      deleteAccents(recipe.description)
        .toLowerCase()
        .trim()
        .replace(/\s/g, "")
        .includes(
          deleteAccents(searchValue).toLowerCase().trim().replace(/\s/g, "")
        )
    ) {
      return true;
    }
    // Vérifier si l'ingredient de la recette contient la valeur de recherche
    if (
      recipe.ingredients.some((ingredientObj) => {
        if (
          typeof ingredientObj === "object" &&
          "ingredient" in ingredientObj
        ) {
          return deleteAccents(ingredientObj.ingredient)
            .toLowerCase()
            .trim()
            .replace(/\s/g, "")
            .includes(
              deleteAccents(searchValue).toLowerCase().trim().replace(/\s/g, "")
            );
        }
        return false;
      })
    ) {
      return true;
    }

    //Si la recette ne correspond à aucun critère de recherche, la rejeter
    return false;
  });
  // Si aucune recette n'est trouvée, retourner "not found"
  // if (filteredRecipes.length === 0) {
  //   const notFound = document.querySelector('.cards-container');
  //   notFound.inneText = "not found";
  // }

  // console.log(filteredRecipes)
  //add+ filter search ====+++
  //add+ filter search ====+++
  //add+ filter search ====+++
  //add+ filter search ====+++

  // Vérifier si la recette a des tags correspondant à ceux dans tagArrays
  if (tagArrays) {
    // console.log(tagArrays);
    //   vérifier l'ingredient
    if (
      tagArrays.ingredients &&
      tagArrays.ingredients.length > 0 &&
      tagArrays.ingredients.some((ingredientObj) => {
        // console.log(ingredientObj);
      })
    ) {
      return true;
    }
    //   //verifient l'appareil
    if (
      tagArrays.appliances &&
      tagArrays.appliances.length > 0 &&
      tagArrays.appliances.some((appliance) => {
        // console.log(appliance);
      })
    ) {
      return true;
    }
      //verifier l'ustensil
      if (
        tagArrays.ustensils &&
        tagArrays.ustensils.length > 0 &&
        tagArrays.ustensils.some((ustensil) => {
          // console.log(ustensil)
        })
      ) {
        return true;
      }
  }
  // afficherle Compte du nombre de recettes filtrées
  const totalRecipeElement = document.querySelector('.total-recipe');
  totalRecipeElement.innerText = `${filteredRecipes.length} recettes`;

  return filteredRecipes; // Renvoyer les recettes filtrées
  
};


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
