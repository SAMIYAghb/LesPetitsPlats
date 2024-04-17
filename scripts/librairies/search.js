//la recherche une seul fonction exporté


function deleteAccents(texte) {
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
        console.log(recipe.name)
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




// Fonction pour filtrer les appareils en fonction de la saisie de l'utilisateur
// function filterAppareils() {

// }
// import { ingredientTag } from "../page/index.js";

// // console.log(ingredientTag);

// function deleteAccents(texte) {
//   return texte.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
// }

// // var texteAvecAccents = "Éléphant";
// // var texteSansAccents = enleverAccents(texteAvecAccents);
// // console.log(texteSansAccents); // Affiche "Elephant"

// // Récupérer l'élément de saisie
// const ingredientInput = document.getElementById("ingredientInput");
// // console.log(ingredientInput);
// ingredientInput.addEventListener("input", function () {
//   // console.log('hhh')
//   //La méthode trim() enlève les espaces au début et à la fin de la chaîne, mais conserve les espaces à l'intérieur de la chaîne, replace(/\s/g, "") supprimer les espaces à l'intérieur de la chaîne,
//   const inputValue = ingredientInput.value
//     .toLowerCase()
//     .trim()
//     .replace(/\s/g, "");
//   // console.log(inputValue)
//   const inputValueWithoutAccents = deleteAccents(inputValue);
//   // console.log(inputValueWithoutAccents)

//   //le tableau
//   // console.log(ingredientTag)
//   // Appliquer les transformations à chaque élément du tableau
//   const transformedArray = ingredientTag.map((ingredient) => {
//     const trimmedIngredient = ingredient
//       .toLowerCase()
//       .trim()
//       .replace(/\s/g, "");
//     // console.log(trimmedIngredient);
//     const ingredientWithoutAccent = deleteAccents(trimmedIngredient);
//     // console.log(ingredientWithoutAccent);
//     return ingredientWithoutAccent;
//   });
//   // console.log(transformedArray)
//   // Utiliser forEach pour comparer chaque élément de transformedArray avec inputValueWithoutAccents
// //   transformedArray.forEach((element) => {
// //     if (element === inputValueWithoutAccents) {
// //       console.log("La correspondance a été trouvée !");
// //       // Effectuez les actions nécessaires lorsque la correspondance est trouvée
// //     }
// //   });
// });

// // export const searchRecipe =(recipes, searchValue)=>{
// //    // Filtrer les recettes en fonction de la valeur de recherche
// //    console.log(recipes, searchValue)
// // }
