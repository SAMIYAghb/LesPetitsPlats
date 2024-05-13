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


const searchbar = document.getElementById("searchInput");
// console.log(searchbar)
const searchValue = searchbar.value
      .toLowerCase()
      .trim()
      .replace(/\s/g, "");
console.log(searchValue)
/**********Ingredients */
let filteredRecipes;
// Filtrer les recettes en fonction du tag sélectionné
let selectedIngredientTagsArray = [];
export function filterRecipesByIgredientTag(selectedIngredientTag, searchValue) {
  // Ajoutez le tag actuel à selectedIngredientTagsArray
  selectedIngredientTagsArray.push(selectedIngredientTag);
  filteredRecipes = searchRecipe(recipes, searchValue, {
    selectedIngredientTagsArray:selectedIngredientTagsArray,
    selectedApplianceTagsArray,
    selectedUstensilTagsArray,
  });
  // console.log(filteredRecipes, 'filterRecipesByIgredientTag')
  displayData(filteredRecipes);

  updateSelectBox(filteredRecipes, "ustensil", displayUstensilTag);
  updateSelectBox(filteredRecipes, "appliance", displayApplianceTag);
  updateSelectBox(filteredRecipes, "ingredient", displayIngredientTag);
  return selectedIngredientTagsArray;
}
/**********end Ingredients */
/**********appliances */
//  Filtrer les recettes en fonction de la recherche actuelle et du tag appareil sélectionné
let selectedApplianceTagsArray = [];
export function filterRecipesByApplianceTag(selectedAapplianceTag, searchValue) {
  //ajouter le tag selectionne dans selectedApplianceTagsArray
  selectedApplianceTagsArray.push(selectedAapplianceTag);

  filteredRecipes = searchRecipe(recipes, searchValue, {
    selectedIngredientTagsArray,
    selectedApplianceTagsArray:selectedApplianceTagsArray,
    selectedUstensilTagsArray,
  });
  // afficher les recettes filtrées
  displayData(filteredRecipes);

  updateSelectBox(filteredRecipes, "ustensil", displayUstensilTag);
  updateSelectBox(filteredRecipes, "appliance", displayApplianceTag);
  updateSelectBox(filteredRecipes, "ingredient", displayIngredientTag);

  return selectedApplianceTagsArray;
}
/**********end appliances */
/**********ustensil */
const recipes = await getRecipes();
// // Filtrer les recettes en fonction du tag sélectionné et prenon en consédération la recheche saisi dans la searchBar
let selectedUstensilTagsArray = [];
export function filterRecipesByUstensilTag(selectedUstensilTag, searchValue) {
  // console.log(selectedUstensilTag)
  selectedUstensilTagsArray.push(selectedUstensilTag);
  
  const filteredRecipes = searchRecipe(recipes, searchValue, {
    selectedIngredientTagsArray,
    selectedApplianceTagsArray,
    selectedUstensilTagsArray: selectedUstensilTagsArray,
  });
  // console.log(selectedIngredientTagsArray,
  //   selectedApplianceTagsArray,
  //   selectedUstensilTagsArray,"depuis filterRecipesByUstensilTag")
// console.log(filteredRecipes, 'filterRecipesByUstensilTag')
  displayData(filteredRecipes);

      updateSelectBox(filteredRecipes, "ustensil", displayUstensilTag);
      updateSelectBox(filteredRecipes, "appliance", displayApplianceTag);
      updateSelectBox(filteredRecipes, "ingredient", displayIngredientTag);
      // console.log(selectedUstensilTagsArray)
  return selectedUstensilTagsArray;
}
// Écouter l'événement "ustensilSelected" et appeler filterRecipesByUstensilTag
// document.addEventListener("ustensilSelected", (event) => {
//   const ustensil = event.detail.ustensil;
//   filterRecipesByUstensilTag(ustensil);
// });
/**********end ustensil */
function updateSelectBox(filteredRecipes, listType, displayFunction) {
  const listElement = document.getElementById(listType + "List");
  listElement.innerHTML = "";

  const itemSet = new Set();

  filteredRecipes.forEach((recipe) => {
    switch (listType) {
      case "ustensil":
        recipe.ustensils.forEach((ustensil) => itemSet.add(ustensil.toLowerCase()));
        break;
      case "appliance":
        itemSet.add(recipe.appliance.toLowerCase());
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

const init = async () => {
  // Définir les valeurs par défaut pour l'état de l'input de recherche et les résultats de la recherche
  let defaultSearchValue = "";
  let defaultFilteredRecipes = [];
  // Lorsque vous chargez la page, utilisez les valeurs par défaut pour afficher les résultats
  searchbar.value = defaultSearchValue;
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
 

  // Gestionnaire d'événements pour la recherche principale
  searchbar.addEventListener("input", () => {
    const searchValue = searchbar.value
      .toLowerCase()
      .trim()
      .replace(/\s/g, "");
      // console.log(searchValue)
    // if (searchValue.length >= 3 || selectedIngredientTagsArray.length > 0 || selectedApplianceTagsArray.length > 0 || selectedUstensilTagsArray.length > 0) {
    if (searchValue.length >= 3) {     
      const recipesSearch = searchRecipe(recipes, searchValue, {
        selectedIngredientTagsArray,
        selectedApplianceTagsArray,
        selectedUstensilTagsArray,
      });
      console.log(
        recipes, searchValue,
        selectedIngredientTagsArray,
        selectedApplianceTagsArray,
        selectedUstensilTagsArray,
        "depuis index"
      );
console.log(recipesSearch,
  "depuis init")
      displayData(recipesSearch);
      updateSelectBox(recipesSearch, "ustensil", displayUstensilTag);
      updateSelectBox(recipesSearch, "appliance", displayApplianceTag);
      updateSelectBox(recipesSearch, "ingredient", displayIngredientTag);
    } else {
      // Si la longueur de la valeur de recherche est inférieure à 3 caractères, ne rien faire (ou gérer autrement)
      // displayData(recipes);
    }
  });
  
  // Ajouter un gestionnaire d'événements pour la recherche par tag d'ingrédients
  ingredientInput.addEventListener("keyup", searchIngredientTag);
  appareilInput.addEventListener("keyup", searchApplianceTag);
  ustensilInput.addEventListener("keyup", searchUstensilTag);
  
};

init();
