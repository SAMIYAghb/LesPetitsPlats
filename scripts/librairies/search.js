//la recherche une seul fonction exporté


export function deleteAccents(texte) {
      return texte.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
// console.log(deleteAccents('éééé'))

export const searchRecipe = (recipes, searchValue, tagArray) => {
  // Vérifier si la longueur de la valeur de recherche est supérieure ou égale à 3
//   let recipesSearch = recipes;
if (!searchValue || searchValue.length < 3) {
    return recipes; // Si la valeur de recherche est vide ou inférieure à 3 caractères, retourner toutes les recettes
}
    // Filtrer les recettes en fonction de la valeur de recherche
    const filteredRecipes = recipes.filter((recipe) => {
      // Vérifier si le titre de la recette contient la valeur de recherche
      if (
        deleteAccents(recipe.name)
          .toLowerCase()
          .trim()
          .replace(/\s/g, "")
          .includes(deleteAccents(searchValue).toLowerCase().trim().replace(/\s/g, ""))
      ) {
        return true; // Si c'est le cas, garder cette recette
      }
      // Vérifier si la description de la recette contient la valeur de recherche
      if (
        deleteAccents(recipe.description)
          .toLowerCase()
          .trim()
          .replace(/\s/g, "")
          .includes(deleteAccents(searchValue).toLowerCase().trim().replace(/\s/g, ""))
      ) {
        return true;
      }
        // Vérifier si l'ingredient de la recette contient la valeur de recherche
        if (recipe.ingredients.some(ingredientObj => {
            if (typeof ingredientObj === 'object' && 'ingredient' in ingredientObj) {
                return deleteAccents(ingredientObj.ingredient).toLowerCase().trim().replace(/\s/g, "").includes(deleteAccents(searchValue).toLowerCase().trim().replace(/\s/g, ""));
            }
            return false;
        })) {
            return true;
        }

      // Vérifier si l'un des tags de la recette correspond à la valeur de recherche
      // if (recipe.tags.some(tag => tag.toLowerCase().includes(searchValue.toLowerCase()))) {
      //     return true; // Si c'est le cas, garder cette recette
      // }

      //Si la recette ne correspond à aucun critère de recherche, la rejeter
      return false;
    });

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
