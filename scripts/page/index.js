import displayCard from "../librairies/view.js";
import { searchRecipe } from "../librairies/search.js";
import { getRecipes, displayData } from "../utils/api.js";
import {
  displayUstensilTag,
  selectUstensilTag,
} from "../librairies/displayUstencilTag.js";
import { displayIngredientTag } from "../librairies/displayIngredientTag.js";
import { displayApplianceTag } from "../librairies/displayApplianceTag.js";
const filterUniqueData = (recipes, property) => {
  const uniqueData = new Set();

  recipes.forEach((recipe) => {
    const data = recipe[property];

    if (Array.isArray(data)) {
      data.forEach((item) => {
        if (typeof item === "object" && item.hasOwnProperty("ingredient")) {
          uniqueData.add(item.ingredient.toLowerCase());
        } else if (typeof item === "string") {
          uniqueData.add(item.toLowerCase());
        }
      });
    } else if (typeof data === "string") {
      uniqueData.add(data.toLowerCase());
    }
  });

  return Array.from(uniqueData);
};

export const getAppliances = (recipes) => {
  return filterUniqueData(recipes, "appliance");
};

export const getIngredients = (recipes) => {
  const ingredients = filterUniqueData(recipes, "ingredients");
  return ingredients;
};

export const getUstensil = (recipes) => {
  return filterUniqueData(recipes, "ustensils");
};

/**********Ingredients */
/********** */
/********** */
// let filteredIngredientsArray;
// export const getIngredients = (recipes) => {
//   // console.log(recipes)
//   const ingredientsSet = new Set();

//   recipes.forEach((recipe) => {
//     const recipeIngredients = recipe.ingredients;

//     recipeIngredients.forEach((ingredient) => {
//       const ingredientElement = ingredient.ingredient;
//       ingredientsSet.add(ingredientElement.toLowerCase());
//     });
//   });

//   filteredIngredientsArray = Array.from(ingredientsSet);
//   return filteredIngredientsArray;
// };
//++++++++++++
//++++++++++++
// Filtrer les recettes en fonction du tag sélectionné
const selectedIngredientTagsArray = [];
export function filterRecipesByIgredientTag(selectedIngredientTags) {
  // Ajoutez le tag actuel à selectedIngredientTagsArray
  selectedIngredientTagsArray.push(selectedIngredientTags);
  const filteredRecipes = recipes.filter((recipe) => {
    // Vérifie si la recette contient tous les tags d'ustensiles sélectionnés
    const matchesIngredientTags = selectedIngredientTagsArray.every((tag) =>
      recipe.ingredients.some((ingredientObj) =>
        ingredientObj.ingredient
          .toLowerCase()
          .trim()
          .includes(tag.toLowerCase())
      )
    );
    return matchesIngredientTags;
  });
  displayData(filteredRecipes);

  // totalRecipeElement.innerText = `${filteredRecipes.length} recettes`;
  let filteredRecipesCount = filteredRecipes.length;
  totalRecipeElement.innerText = `${filteredRecipesCount} ${pluralizeRecipe(
    filteredRecipesCount
  )}`;
  updateSelectBox(filteredRecipes, "ustensil", displayUstensilTag);
  updateSelectBox(filteredRecipes, "appliance", displayApplianceTag);
  updateSelectBox(filteredRecipes, "ingredient", displayIngredientTag);
  // return filteredRecipes;
}

/**********end Ingredients */

/**********appliances */

// let filteredAppliancesArray;
// export const getAppliances = (recipes) => {
//   const appliancesSet = new Set();

//   recipes.forEach((recipe) => {
//     const appliance = recipe.appliance;

//     appliancesSet.add(appliance.toLowerCase());
//   });

//   filteredAppliancesArray = Array.from(appliancesSet);
//   return filteredAppliancesArray;
// };
//++++++++++++
//++++++++++++
//  Filtrer les recettes en fonction de la recherche actuelle et du tag appareil sélectionné
const selectedApplianceTagsArray = [];
export function filterRecipesByApplianceTag(selectedAapplianceTags) {
  //ajouter le tag selectionne dans selectedApplianceTagsArray
  selectedApplianceTagsArray.push(selectedAapplianceTags);
  const filteredRecipes = recipes.filter((recipe) => {
    const matchesApplianceTags = selectedApplianceTagsArray.every((tag) =>
      recipe.appliance.toLowerCase().includes(tag.toLowerCase())
    );
    return matchesApplianceTags;
  });
  // afficher les recettes filtrées
  displayData(filteredRecipes);
  // console.log(filteredRecipes);
  // Afficher le compte du nombre de recettes filtrées
  // totalRecipeElement.innerText = `${filteredRecipes.length} recettes`;
  let filteredRecipesCount = filteredRecipes.length;
  totalRecipeElement.innerText = `${filteredRecipesCount} ${pluralizeRecipe(
    filteredRecipesCount
  )}`;
  updateSelectBox(filteredRecipes, "ustensil", displayUstensilTag);
  updateSelectBox(filteredRecipes, "appliance", displayApplianceTag);
  updateSelectBox(filteredRecipes, "ingredient", displayIngredientTag);
}
/**********end appliances */
/**********ustensil */
// let filteredUstensilsArray;
// export const getUstensil = (recipes) => {
//   // On crée un nouvel ensemble Les ensembles en JavaScript ne permettent pas les doublons, ce qui les rend parfaits pour stocker des valeurs uniques
//   const ustensilsSet = new Set();

//   recipes.forEach((recipe) => {
//     const ustensils = recipe.ustensils;
//     //Pour chaque ustensile dans la liste, on ajoute l'ustensile converti en minuscules à l'ensemble ustensilsSet en utilisant
//     ustensils.forEach((ustensil) => {
//       ustensilsSet.add(ustensil.toLowerCase()); // Convertir en minuscules
//     });
//   });
//   //Conversion de l'ensemble en tableau
//   filteredUstensilsArray = Array.from(ustensilsSet);
//   // console.log(filteredUstensilsArray);
//   return filteredUstensilsArray;
// };
const recipes = await getRecipes();

// // Filtrer les recettes en fonction du tag sélectionné et prenon en consédération la recheche saisi dans la searchBar
const selectedUstensilTagsArray = [];
export function filterRecipesByUstensilTag(selectedUstensilTags) {
  selectedUstensilTagsArray.push(selectedUstensilTags);

  const filteredRecipes = recipes.filter((recipe) => {
    const matchesUstensilTags = selectedUstensilTagsArray.every((tag) =>
      recipe.ustensils.some((ustensil) =>
        ustensil.toLowerCase().trim().includes(tag.toLowerCase())
      )
    );

    return matchesUstensilTags;
  });

  displayData(filteredRecipes);

  // totalRecipeElement.innerText = `${filteredRecipes.length} recettes`;
  let filteredRecipesCount = filteredRecipes.length;
  totalRecipeElement.innerText = `${filteredRecipesCount} ${pluralizeRecipe(
    filteredRecipesCount
  )}`;
  
  updateSelectBox(filteredRecipes, "ustensil", displayUstensilTag);
      updateSelectBox(filteredRecipes, "appliance", displayApplianceTag);
      updateSelectBox(filteredRecipes, "ingredient", displayIngredientTag);

  return selectedUstensilTagsArray;
}
/**********end ustensil */
function updateSelectBox(filteredRecipes, listType, displayFunction) {
  const listElement = document.getElementById(listType + "List");
  listElement.innerHTML = "";

  const itemSet = new Set();

  filteredRecipes.forEach((recipe) => {
    switch (listType) {
      case "ustensil":
        recipe.ustensils.forEach((ustensil) => itemSet.add(ustensil));
        break;
      case "appliance":
        itemSet.add(recipe.appliance);
        break;
      case "ingredient":
        recipe.ingredients.forEach((ingredient) =>
          itemSet.add(ingredient.ingredient.toLowerCase())
        );
        break;
      default:
        break;
    }
  });

  const sortedItems = Array.from(itemSet).sort((a, b) =>
    a.localeCompare(b, "fr")
  );

  sortedItems.forEach((item) => {
    displayFunction(item);
  });
}

export function filterRecipesByAllTags(
  selectedIngredientTags,
  selectedApplianceTags,
  selectedUstensilTags
) {
  // console.log(
  //   selectedIngredientTags,
  //   selectedApplianceTags,
  //   selectedUstensilTags
  // );
  const filteredRecipes = recipes.filter((recipe) => {
    const matchesIngredientTags = selectedIngredientTags.every((tag) =>
      recipe.ingredients.some((ingredientObj) =>
        ingredientObj.ingredient.toLowerCase().includes(tag.toLowerCase())
      )
    );

    const matchesApplianceTags = selectedApplianceTags.every((tag) =>
      recipe.appliance.toLowerCase().includes(tag.toLowerCase())
    );
    const matchesUstensilTags = selectedUstensilTags.every((tag) =>
      recipe.ustensils.some((ustensil) =>
        ustensil.toLowerCase().trim().includes(tag.toLowerCase())
      )
    );

    return matchesIngredientTags && matchesApplianceTags && matchesUstensilTags;
  });
  console.log(filteredRecipes);

  displayData(filteredRecipes);
  // totalRecipeElement.innerText = `${filteredRecipes.length} recettes`;
  let filteredRecipesCount = filteredRecipes.length;
  totalRecipeElement.innerText = `${filteredRecipesCount} ${pluralizeRecipe(
    filteredRecipesCount
  )}`;

  // Update select boxes if needed
}
const pluralizeRecipe = (count) => {
  // console.log(count)
  if (count === 0) {
    return "recette";
  } else {
    return count === 1 ? "recette" : "recettes";
  }
};

// Call this function whenever any tag selection changes
export function filterRecipes() {
  filterRecipesByAllTags(
    selectedIngredientTagsArray,
    selectedApplianceTagsArray,
    selectedUstensilTagsArray
  );
}

const totalRecipeElement = document.querySelector(".total-recipe");
const searchInput = document.getElementById("searchInput");

const init = async () => {
  // Définir les valeurs par défaut pour l'état de l'input de recherche et les résultats de la recherche
  let defaultSearchValue = "";
  let defaultFilteredRecipes = [];
  // Lorsque vous chargez la page, utilisez les valeurs par défaut pour afficher les résultats
  searchInput.value = defaultSearchValue;
  displayData(defaultFilteredRecipes);

  const recipes = await getRecipes();

  // Fonction générique pour afficher les tags
  function displayTags(tagsArray, displayFunction) {
    tagsArray
      .sort((a, b) => a.localeCompare(b, "fr"))
      .forEach((tag) => {
        displayFunction(tag);
      });
  }

  // Afficher les ingrédients
  const ingredientsArray = getIngredients(recipes);
  displayTags(ingredientsArray, displayIngredientTag);

  // Afficher les appareils
  const appliancesArray = getAppliances(recipes);
  displayTags(appliancesArray, displayApplianceTag);

  // Afficher les ustensiles
  const ustensilsArray = getUstensil(recipes);
  displayTags(ustensilsArray, displayUstensilTag);

  //   //**************search ingredient tag*/
  const ingredientList = document.getElementById("ingredientList");
  const ingredientInput = document.getElementById("ingredientInput");
  const searchIngredientTag = () => {
    const inputValue = ingredientInput.value
      .toLowerCase()
      .trim()
      .replace(/\s/g, "");
    // console.log(inputValue);
    // Recherche à partir du premier caractère
    if (inputValue.length > 0) {
      // Si l'utilisateur a saisi quelque chose, effectuez la recherche et affichez les résultats
      const matchingTags = ingredientsArray.filter((tag) =>
        tag.includes(inputValue)
      );
      if (matchingTags.length > 0) {
        ingredientList.innerHTML = ""; // Supprime tous les éléments enfants
        displayTags(matchingTags, displayIngredientTag);
      } else {
        // Si aucun résultat ne correspond à la recherche, affichez un message indiquant qu'aucun résultat n'a été trouvé
        ingredientList.innerHTML = "<li>Aucun résultat trouvé</li>";
      }
    } else {
      // Si le champ de recherche est vide, affichez la liste complète d'ingrédients
      ingredientList.innerHTML = ""; // Supprime tous les éléments enfants
      displayTags(ingredientsArray, displayIngredientTag);
    }
  };
//   //**************search appliance tag*/
const applianceList = document.getElementById("applianceList");
const appareilInput = document.getElementById("appareilInput");
const searchApplianceTag = () => {
  const inputValue = appareilInput.value
    .toLowerCase()
    .trim()
    .replace(/\s/g, "");
  console.log(inputValue);
  if (inputValue.length > 0) {
    const matchingTags = appliancesArray.filter((tag) =>
      tag.includes(inputValue)
    );
    if (matchingTags.length > 0) {
      applianceList.innerHTML = ""; 
      displayTags(matchingTags, displayApplianceTag);
    } else {
      applianceList.innerHTML = "<li>Aucun résultat trouvé</li>";
    }
  } else {
    applianceList.innerHTML = "";
    displayTags(appliancesArray, displayApplianceTag);
  }
};
//   //**************search ustensile tag*/
const ustensilList = document.getElementById("ustensilList");
const ustensilInput = document.getElementById("ustensilInput");
const searchUstensilTag = () => {
  const inputValue = ustensilInput.value
    .toLowerCase()
    .trim()
    .replace(/\s/g, "");
  // console.log(inputValue);
  if (inputValue.length > 0) {
    const matchingTags = ustensilsArray.filter((tag) =>
      tag.includes(inputValue)
    );
    if (matchingTags.length > 0) {
      console.log(matchingTags)
      ustensilList.innerHTML = ""; 
      displayTags(matchingTags, displayUstensilTag);

    } else {
      ustensilList.innerHTML = "<li>Aucun résultat trouvé</li>";
    }
  } else {
    ustensilList.innerHTML = "";
    displayTags(ustensilsArray, displayUstensilTag);
  }
};
// Fonction générique pour chercher les tags
// function searchTag(tagsArray, displayFunction) {}
  // Affichage initial des données
  displayData(recipes);

  // Définir la variable pour stocker le nombre total de recettes
  let totalRecipesCount = recipes.length;

  // totalRecipeElement.innerText = `${totalRecipesCount} recettes`;

  totalRecipeElement.innerText = `${totalRecipesCount} ${pluralizeRecipe(
    totalRecipesCount
  )}`;
  // Gestionnaire d'événements pour la recherche principale
  searchInput.addEventListener("input", () => {
    const searchValue = searchInput.value
      .toLowerCase()
      .trim()
      .replace(/\s/g, "");
    if (searchValue.length >= 3) {
      const recipesSearch = searchRecipe(recipes, searchValue, {
        selectedIngredientTagsArray,
        selectedApplianceTagsArray,
        selectedUstensilTagsArray,
      });
      console.log(
        selectedIngredientTagsArray,
        selectedApplianceTagsArray,
        selectedUstensilTagsArray,
        "depuis index"
      );

      displayData(recipesSearch);
      updateSelectBox(recipesSearch, "ustensil", displayUstensilTag);
      updateSelectBox(recipesSearch, "appliance", displayApplianceTag);
      updateSelectBox(recipesSearch, "ingredient", displayIngredientTag);
    } else {
      // Si la longueur de la valeur de recherche est inférieure à 3 caractères, ne rien faire (ou gérer autrement)
      // displayData(recipes);
    }
  });

  // Ajouter un gestionnaire d'événements ipour la recherche par tag d'ingrédients
  ingredientInput.addEventListener("keyup", searchIngredientTag);
  appareilInput.addEventListener("keyup", searchApplianceTag);
  ustensilInput.addEventListener("keyup", searchUstensilTag);
};

init();
