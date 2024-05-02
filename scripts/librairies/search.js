


const notFoundElement = document.querySelector(".not-found");
// console.log(notFoundElement);


export const searchRecipe = (recipes, searchValue, tagArrays) => {
  let recipesSearch = recipes;
  // Supprimer les espaces de la valeur de recherche
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

    return false;
  });

  // Filtrer les recettes en fonction des tags sélectionnés
  if (tagArrays){
    if(tagArrays.selectedUstensilTagsArray.length > 0) {
      console.log(tagArrays.selectedUstensilTagsArray, 'depuis searchJs')
      filteredRecipes = filteredRecipes.filter(recipe => {
        return tagArrays.selectedUstensilTagsArray.every(searchUstensil => {
          return recipe.ustensils.some(ustensil =>
            ustensil.toLowerCase().includes(searchUstensil.toLowerCase())
          );
        });
      });
    }
  }

  // Afficher le compte du nombre de recettes filtrées
  const totalRecipeElement = document.querySelector(".total-recipe");
  totalRecipeElement.innerText = `${filteredRecipes.length} recettes`;

  // Si aucune recette n'est trouvée, afficher "not found"
  const notFoundElement = document.querySelector('.not-found');
  if (filteredRecipes.length === 0) {
    notFoundElement.innerText = "Aucune recette corresond à cette recherche";
  } else {
    notFoundElement.innerText = "";
  }

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

