import { displayApplianceTag } from "../librairies/displayApplianceTag.js";
import { displayIngredientTag } from "../librairies/displayIngredientTag.js";
import { displayUstensilTag } from "../librairies/displayUstencilTag.js";
import { searchRecipe } from "../librairies/search.js";
import { getRecipes } from "../utils/api.js";
import { displayData } from "../librairies/view.js";

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
let filteredApplianceTags = [];
let filteredUstensilTags = [];
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

const searchValue = searchbar.value.toLowerCase().trim().replace(/\s/g, "");

//  Filtrer les recettes en fonction de la recherche actuelle et du tag  sélectionné
// export function filterRecipesByTag(tagType, selectedTag, searchValue) {
//   let tagArray, displayFunction;

//   switch (tagType) {
//     case "ingredient":
//       tagArray = selectedIngredientTagsArray;
//       displayFunction = displayIngredientTag;
//       break;
//     case "appliance":
//       tagArray = selectedApplianceTagsArray;
//       displayFunction = displayApplianceTag;
//       break;
//     case "ustensil":
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
//   updateSelectBox(filteredRecipes, "ustensil", displayUstensilTag);

//   // const r = updateSelectBox(filteredRecipes, "ustensil", displayUstensilTag)
//   //  console.log(r,'r')
//   updateSelectBox(filteredRecipes, "appliance", displayApplianceTag);
//   updateSelectBox(filteredRecipes, "ingredient", displayIngredientTag);

//   return tagArray;
// }

export function filterRecipesByUstensilTag(selectedUstensilTag, searchValue) {
  // console.log(selectedUstensilTag)
  selectedUstensilTagsArray.push(selectedUstensilTag);

  const filteredRecipes = searchRecipe(recipes, searchValue, {
    selectedIngredientTagsArray,
    selectedApplianceTagsArray,
    selectedUstensilTagsArray: selectedUstensilTagsArray,
  });
  //  console.log(filteredRecipes)
  displayData(filteredRecipes);

  updateSelectBox(filteredRecipes, "ustensil", displayUstensilTag);
  updateSelectBox(filteredRecipes, "appliance", displayApplianceTag);
  updateSelectBox(filteredRecipes, "ingredient", displayIngredientTag);

  const ustensilTags = updateSelectBox(
    filteredRecipes,
    "ustensil",
    displayUstensilTag
  );
  // console.log(ustensilTags)
  const filteredUstensil = ustensilTags.ustensil;

  filteredUstensilTags.push(filteredUstensil);
  //  console.log(filteredUstensilTags,'filteredUstensilTags')
  // console.log(selectedUstensilTagsArray)
  // return selectedUstensilTagsArray;
  return {
    selectedUstensilTagsArray: selectedUstensilTagsArray,
    filteredUstensilTags: filteredUstensilTags,
  };
}

// console.log(filteredUstensilTags)
export function filterRecipesByApplianceTag(
  selectedAapplianceTag,
  searchValue
) {
  //ajouter le tag selectionne dans selectedApplianceTagsArray
  selectedApplianceTagsArray.push(selectedAapplianceTag);
  filteredRecipes = searchRecipe(recipes, searchValue, {
    selectedIngredientTagsArray,
    selectedApplianceTagsArray: selectedApplianceTagsArray,
    selectedUstensilTagsArray,
  });
  // afficher les recettes filtrées
  displayData(filteredRecipes);

  updateSelectBox(filteredRecipes, "ustensil", displayUstensilTag);
  updateSelectBox(filteredRecipes, "appliance", displayApplianceTag);
  updateSelectBox(filteredRecipes, "ingredient", displayIngredientTag);

  return selectedApplianceTagsArray;
}
export function filterRecipesByIgredientTag(
  selectedIngredientTag,
  searchValue
) {
  // Ajoutez le tag actuel à selectedIngredientTagsArray
  selectedIngredientTagsArray.push(selectedIngredientTag);
  filteredRecipes = searchRecipe(recipes, searchValue, {
    selectedIngredientTagsArray: selectedIngredientTagsArray,
    selectedApplianceTagsArray,
    selectedUstensilTagsArray,
  });
  // console.log(filteredRecipes, 'filterRecipesByIgredientTag')
  displayData(filteredRecipes);

  updateSelectBox(filteredRecipes, "ustensil", displayUstensilTag);
  updateSelectBox(filteredRecipes, "appliance", displayApplianceTag);
  updateSelectBox(filteredRecipes, "ingredient", displayIngredientTag);


  const ingredientTags = updateSelectBox(
    filteredRecipes,
    "ingredient",
    displayIngredientTag
  );
  // console.log(ingredientTags)
  const filteredIngredient = ingredientTags.ingredient;

  filteredIngredientTags.push(filteredIngredient);
  //  console.log(filteredIngredientTags,'filteredUstensilTags')
  // console.log(selectedUstensilTagsArray)
  // return selectedUstensilTagsArray;
  return {
    selectedIngredientTagsArray: selectedIngredientTagsArray,
    filteredIngredientTags: filteredIngredientTags,
  };
  
}

const recipes = await getRecipes();

function updateSelectBox(filteredRecipes, listType, displayFunction) {
  const listElement = document.getElementById(listType + "List");
  listElement.innerHTML = "";

  const itemSet = new Set();

  filteredRecipes.forEach((recipe) => {
    switch (listType) {
      case "ustensil":
        recipe.ustensils.forEach((ustensil) =>
          itemSet.add(ustensil.toLowerCase())
        );
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
  // console.log(sortedItems[0]);
  // console.log(sortedItems[1]);
  // console.log(sortedItems[2]);

  // return sortedItems;

  return {
    [listType]: sortedItems,
  };
}

// const tags = updateSelectBox(filteredRecipes, "ustensil", displayUstensilTag)
//   console.log(tags)
//   // const ustensilTags =tags.ustensil
//   //   //  console.log(ustensilTags,'r')

const init = async () => {
  // console.log(filteredUstensilTags,'init')

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
  // console.log( ustensilsArray)

  //   //**************search ingredient tag*/
  const searchIngredientTag = () => {
    const inputValue = ingredientInput.value
      .toLowerCase()
      .trim()
      .replace(/\s/g, "");
    // console.log(inputValue);
    // Recherche à partir du premier caractère

    const tagsArray = Object.values(filteredIngredientTags);
    console.log(filteredIngredientTags)
     console.log(tagsArray)
    // Filtrer les tags correspondants
    const matchingTags = tagsArray.reduce((acc, tagArray) => {
      // Vérifier chaque élément du tableau tagArray
      const matchingSubTags = tagArray.filter((tag) =>
        tag.toLowerCase().includes(inputValue)
      );
      if (matchingSubTags.length > 0) {
        acc.push(matchingSubTags);
      }
      return acc;
    }, []);

    // Si des tags correspondants sont trouvés
    if (matchingTags.length > 0) {
      ingredientList.innerHTML = ""; // Vider la liste pour afficher les nouveaux tags
      displayTags(matchingTags.flat(), displayIngredientTag); // Afficher les tags correspondants
    } else {
      // Si aucun tag correspondant n'est trouvé
      ingredientList.innerHTML = "<li>Aucun résultat trouvé</li>"; // Afficher un message d'erreur
    }
    
  };
  //   //**************search appliance tag*/
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
        // applianceList.innerHTML = "<li>Aucun résultat trouvé</li>";
        // Création d'un nouvel élément li
        const listItem = document.createElement("li");
        // Création d'un nœud texte pour contenir le texte
        const textNode = document.createTextNode("Aucun résultat trouvé");
        // Ajout du nœud texte à l'élément li
        listItem.appendChild(textNode);
        // Nettoyage de tout contenu existant dans applianceList
        applianceList.innerHTML = "";
        // Ajout de l'élément li avec le texte brut à applianceList en toute sécurité
        applianceList.appendChild(listItem);
        // Encréant dynamiquement un nouvel élément  Cela garantit que le texte est inséré en toute sécurité dans le DOM sans risque d'exécution de code JavaScript indésirable.
      }
    } else {
      applianceList.innerHTML = "";
      displayTags(appliancesArray, displayApplianceTag);
    }
  };
  //   //**************search ustensile tag*/
  const searchUstensilTag = () => {
    const inputValue = ustensilInput.value
      .toLowerCase()
      .trim()
      .replace(/\s/g, "");
    // console.log(inputValue);
    // console.log(typeof filteredUstensilTags);
    // Obtenir les valeurs de l'objet filteredUstensilTags
    const tagsArray = Object.values(filteredUstensilTags);
    //  console.log(tagsArray[0])
    // Filtrer les tags correspondants
    const matchingTags = tagsArray.reduce((acc, tagArray) => {
      // Vérifier chaque élément du tableau tagArray
      const matchingSubTags = tagArray.filter((tag) =>
        tag.toLowerCase().includes(inputValue)
      );
      if (matchingSubTags.length > 0) {
        acc.push(matchingSubTags);
      }
      return acc;
    }, []);

    // Si des tags correspondants sont trouvés
    if (matchingTags.length > 0) {
      ustensilList.innerHTML = ""; // Vider la liste pour afficher les nouveaux tags
      displayTags(matchingTags.flat(), displayUstensilTag); // Afficher les tags correspondants
    } else {
      // Si aucun tag correspondant n'est trouvé
      ustensilList.innerHTML = "<li>Aucun résultat trouvé</li>"; // Afficher un message d'erreur
    }
  };
  // Affichage initial des données
  displayData(recipes);

  // Gestionnaire d'événements pour la recherche principale
  searchbar.addEventListener("input", () => {
    const searchValue = searchbar.value.toLowerCase().trim().replace(/\s/g, "");
    // console.log(searchValue)

    if (searchValue.length >= 3) {
      const recipesSearch = searchRecipe(recipes, searchValue, {
        selectedIngredientTagsArray,
        selectedApplianceTagsArray,
        selectedUstensilTagsArray,
      });
      // console.log(recipesSearch )
      displayData(recipesSearch);
      updateSelectBox(recipesSearch, "ustensil", displayUstensilTag);
      updateSelectBox(recipesSearch, "appliance", displayApplianceTag);
      updateSelectBox(recipesSearch, "ingredient", displayIngredientTag);
    } else {
      displayData(recipes);
    }
  });

  // Ajouter un gestionnaire d'événements pour la recherche par tag d'ingrédients
  ingredientInput.addEventListener("keyup", searchIngredientTag);
  appareilInput.addEventListener("keyup", searchApplianceTag);
  ustensilInput.addEventListener("keyup", searchUstensilTag);
};

init();
