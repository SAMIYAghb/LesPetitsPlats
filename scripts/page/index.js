import { displayApplianceTag } from "../librairies/displayApplianceTag.js";
import { displayIngredientTag } from "../librairies/displayIngredientTag.js";
import { displayUstensilTag } from "../librairies/displayUstencilTag.js";
import { searchRecipe } from "../librairies/search.js";
import { getRecipes } from "../utils/api.js";
import { displayData } from "../librairies/view.js";
import { updateSelectBox } from "../librairies/updateSelectBox.js";

const ingredientList = document.getElementById("ingredientList");
const ingredientInput = document.getElementById("ingredientInput");

const applianceList = document.getElementById("applianceList");
const appareilInput = document.getElementById("appareilInput");

const ustensilList = document.getElementById("ustensilList");
const ustensilInput = document.getElementById("ustensilInput");

const searchbar = document.getElementById("searchInput");

let filteredRecipes;

let selectedIngredientTagsArray = [];
let selectedApplianceTagsArray = [];
let selectedUstensilTagsArray = [];
let filteredIngredientTags = [];

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

export const getAppliances = (recipes) =>
  filterUniqueData(recipes, "appliance");

export const getIngredients = (recipes) => {
  const ingredients = filterUniqueData(recipes, "ingredients");
  return ingredients;
};

export const getUstensil = (recipes) => filterUniqueData(recipes, "ustensils");

const searchValue = searchbar.value.toLowerCase().trim().replace(/\s/g, "");

//  Filtrer les recettes en fonction de la recherche actuelle et du tag  sélectionné
// export function filterRecipesByTag(tagType, selectedTag, searchValue) {
//   let tagArray, displayFunction;

//   switch (tagType) {
//     case 'ingredient':
//       tagArray = selectedIngredientTagsArray;
//       displayFunction = displayIngredientTag;
//       break;
//     case 'appliance':
//       tagArray = selectedApplianceTagsArray;
//       displayFunction = displayApplianceTag;
//       break;
//     case 'ustensil':
//       tagArray = selectedUstensilTagsArray;
//       displayFunction = displayUstensilTag;
//       break;
//     default:
//       // console.error('Invalid tag type');
//       return;
//   }

//   tagArray.push(selectedTag);

//   filteredRecipes = searchRecipe(recipes, searchValue, {
//     selectedIngredientTagsArray,
//     selectedApplianceTagsArray,
//     selectedUstensilTagsArray,
//   });
//   console.log(filteredRecipes);

//   displayData(filteredRecipes);
//   updateSelectBox(filteredRecipes, 'ustensil', displayUstensilTag);

//   // const r = updateSelectBox(filteredRecipes, 'ustensil', displayUstensilTag)
//   //  console.log(r,'r')
//   updateSelectBox(filteredRecipes, 'appliance', displayApplianceTag);
//   updateSelectBox(filteredRecipes, 'ingredient', displayIngredientTag);

//   return tagArray;
// }

export function filterRecipesByUstensilTag(selectedUstensilTag, searchValue) {
  // console.log(selectedUstensilTag, 'selectedUstensilTag')
  const recipesSearch = recipes;
  // console.log(selectedUstensilTag)
  // console.log(typeof(selectedUstensilTag))
  // selectedUstensilTagsArray.push(selectedUstensilTag);
  selectedUstensilTagsArray = selectedUstensilTag.split(',');
  // console.log(selectedUstensilTagsArray)
  filteredRecipes = searchRecipe(recipes, searchValue, {
    selectedIngredientTagsArray,
    selectedApplianceTagsArray,
    selectedUstensilTagsArray,
  });
  displayData(filteredRecipes);
  // Vérifier si aucun tag n'est sélectionné
  if (!selectedUstensilTag) {
    // Retourner toutes les recettes si aucun tag n'est sélectionné
    displayData(filteredRecipes);
    return;
  }

  updateSelectBox(filteredRecipes, 'ustensil', displayUstensilTag);
  updateSelectBox(filteredRecipes, 'appliance', displayApplianceTag);
  updateSelectBox(filteredRecipes, 'ingredient', displayIngredientTag);

  const ustensilTags = updateSelectBox(
    filteredRecipes,
    'ustensil',
    displayUstensilTag,
  );
  const filteredUstensil = ustensilTags.ustensil;
  ustensilInput.addEventListener('keyup', () => searchUstensilTag(filteredUstensil));
}

export function filterRecipesByApplianceTag(
  selectedAapplianceTag,
  searchValue
) {
  const recipesSearch = recipes;
  // ajouter le tag selectionne dans selectedApplianceTagsArray
  // selectedApplianceTagsArray.push(selectedAapplianceTag);
  selectedApplianceTagsArray = selectedAapplianceTag.split(",");
  filteredRecipes = searchRecipe(recipes, searchValue, {
    selectedIngredientTagsArray,
    selectedApplianceTagsArray,
    selectedUstensilTagsArray,
  });
  // afficher les recettes filtrées
  displayData(filteredRecipes);
  // Vérifier si aucun tag n'est sélectionné
  if (!selectedAapplianceTag) {
    // Retourner toutes les recettes si aucun tag n'est sélectionné
    displayData(filteredRecipes);
    return;
  }
  updateSelectBox(filteredRecipes, 'ustensil', displayUstensilTag);
  updateSelectBox(filteredRecipes, 'appliance', displayApplianceTag);
  updateSelectBox(filteredRecipes, 'ingredient', displayIngredientTag);

  const applianceTags = updateSelectBox(filteredRecipes, 'appliance', displayApplianceTag);
  const filteredAppliance = applianceTags.appliance;

  appareilInput.addEventListener('keyup', () => searchApplianceTag(filteredAppliance));
}

export function filterRecipesByIgredientTag(
  selectedIngredientTag,
  searchValue
) {
  // console.log(selectedIngredientTag, 'selectedIngredientTag')
  const recipesSearch = recipes;
  // Ajoutez le tag actuel à selectedIngredientTagsArray
  // selectedIngredientTagsArray.push(selectedIngredientTag);
  // console.log(selectedIngredientTagsArray)
  selectedIngredientTagsArray = selectedIngredientTag.split(',');
  // console.log(selectedIngredientTagsArray)
  filteredRecipes = searchRecipe(recipes, searchValue, {
    selectedIngredientTagsArray,
    selectedApplianceTagsArray,
    selectedUstensilTagsArray,
  });
  // console.log(filteredRecipes, 'filterRecipesByIgredientTag')
  displayData(filteredRecipes);
  // Vérifier si aucun tag n'est sélectionné
  if (!selectedIngredientTag) {
    // Retourner toutes les recettes si aucun tag n'est sélectionné
    displayData(filteredRecipes);
    return;
  }

  updateSelectBox(filteredRecipes, 'ustensil', displayUstensilTag);
  updateSelectBox(filteredRecipes, 'appliance', displayApplianceTag);
  updateSelectBox(filteredRecipes, 'ingredient', displayIngredientTag);

  const ingredientTags = updateSelectBox(
    filteredRecipes,
    'ingredient',
    displayIngredientTag,
  );
  // console.log(ingredientTags)
  const filteredIngredient = ingredientTags.ingredient;
  ingredientInput.addEventListener('keyup', () => searchIngredientTag(filteredIngredient));
}

const recipes = await getRecipes();
// Fonction générique pour afficher les tags
function displayTags(tagsArray, displayFunction) {
  tagsArray
    .sort((a, b) => a.localeCompare(b, "fr"))
    .forEach((tag) => {
      displayFunction(tag);
    });
}
//   //**************search ingredient tag*/
const searchIngredientTag = (filteredIngredient) => {
  const inputIngredientValue = ingredientInput.value
    .toLowerCase()
    .trim()
    .replace(/\s/g, "");
  if (inputIngredientValue.length > 0) {
    const matchingTags = filteredIngredient.filter((tag) => tag.includes(inputIngredientValue));
    // console.log(matchingTags);
    if (matchingTags.length > 0) {
      ingredientList.innerHTML = '';
      displayTags(matchingTags, displayIngredientTag);
    } else {
      ingredientList.innerHTML = '<li>Aucun résultat trouvé</li>';
    }
  }
};
//   //**************search ustensile tag*/
const searchUstensilTag = (filteredUstensil) => {
  const inputUstensilValue = ustensilInput.value
    .toLowerCase()
    .trim()
    .replace(/\s/g, "");
  if (inputUstensilValue.length > 0) {
    const matchingTags = filteredUstensil.filter((tag) =>
      tag.includes(inputUstensilValue)
    );
    // console.log(matchingTags);
    if (matchingTags.length > 0) {
      ustensilList.innerHTML = "";
      displayTags(matchingTags, displayUstensilTag);
    } else {
      ustensilList.innerHTML = "<li>Aucun résultat trouvé</li>";
    }
  }
};
//   //**************search appliance tag*/
const searchApplianceTag = (filteredAppliance) => {
  const inputAppValue = appareilInput.value
    .toLowerCase()
    .trim()
    .replace(/\s/g, "");
  if (inputAppValue.length > 0) {
    const matchingTags = filteredAppliance.filter((tag) =>
      tag.includes(inputAppValue)
    );
    // console.log(matchingTags);
    if (matchingTags.length > 0) {
      applianceList.innerHTML = '';
      displayTags(matchingTags, displayApplianceTag);
    } else {
      applianceList.innerHTML = '<li>Aucun résultat trouvé</li>';
    }
  }
};

const init = async () => {
  // console.log(filteredUstensilTags,'init')

  // Définir les valeurs par défaut pour l'état de l'input de recherche et
  // les résultats de la recherche
  const defaultSearchValue = '';
  const defaultFilteredRecipes = [];
  // Lorsque vous chargez la page, utilisez les valeurs par défaut pour afficher les résultats
  searchbar.value = defaultSearchValue;
  displayData(defaultFilteredRecipes);

  const recipes = await getRecipes();

  // Afficher les ingrédients
  const ingredientsArray = getIngredients(recipes);
  displayTags(ingredientsArray, displayIngredientTag);
  // Afficher les appareils
  const appliancesArray = getAppliances(recipes);
  displayTags(appliancesArray, displayApplianceTag);
  // Afficher les ustensiles
  const ustensilsArray = getUstensil(recipes);
  displayTags(ustensilsArray, displayUstensilTag);

  // Affichage initial des données
  displayData(recipes);

  ingredientInput.addEventListener('keyup', () => searchIngredientTag(ingredientsArray));

  appareilInput.addEventListener('keyup', () => searchApplianceTag(appliancesArray));

  ustensilInput.addEventListener('keyup', () => searchUstensilTag(ustensilsArray));

  // Gestionnaire d'événements pour la recherche principale
  searchbar.addEventListener('input', () => {
    const searchValue = searchbar.value.toLowerCase().trim().replace(/\s/g, "");
    // console.log(searchValue)

    if (searchValue.length >= 3) {
      const recipesSearch = searchRecipe(recipes, searchValue, {
        selectedIngredientTagsArray,
        selectedApplianceTagsArray,
        selectedUstensilTagsArray,
      });
      displayData(recipesSearch);
      updateSelectBox(recipesSearch, 'ustensil', displayUstensilTag);
      updateSelectBox(recipesSearch, 'appliance', displayApplianceTag);
      updateSelectBox(recipesSearch, 'ingredient', displayIngredientTag);

      const ingredientTags = updateSelectBox(recipesSearch, 'ingredient', displayIngredientTag);
      const filteredIngredient = ingredientTags.ingredient;

      const applianceTags = updateSelectBox(recipesSearch, 'appliance', displayApplianceTag);
      const filteredAppliance = applianceTags.appliance;

      const ustensilTags = updateSelectBox(recipesSearch, 'ustensil', displayUstensilTag);
      const filteredUstensil = ustensilTags.ustensil;
      // Ajouter un gestionnaire d'événements pour la recherche par tag
      ingredientInput.addEventListener('keyup', () => searchIngredientTag(filteredIngredient));
      appareilInput.addEventListener('keyup', () => searchApplianceTag(filteredAppliance));
      ustensilInput.addEventListener('keyup', () => searchUstensilTag(filteredUstensil));
    } else {
      displayData(recipes);
    }
  });
};

init();
