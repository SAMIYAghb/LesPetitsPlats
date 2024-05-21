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
  // Vérifier si aucun tag n'est sélectionné
  if (!selectedUstensilTag) {
    // Retourner toutes les recettes si aucun tag n'est sélectionné
    displayData(recipesSearch);
    return;
  }

  // selectedUstensilTagsArray.push(selectedUstensilTag);
  selectedUstensilTagsArray = selectedUstensilTag.split(",");
  // console.log(selectedUstensilTagsArray)
  const filteredRecipes = searchRecipe(recipes, searchValue, {
    selectedIngredientTagsArray,
    selectedApplianceTagsArray,
    selectedUstensilTagsArray,
  });
  //  console.log(filteredRecipes)
  displayData(filteredRecipes);

  updateSelectBox(filteredRecipes, "ustensil", displayUstensilTag);
  updateSelectBox(filteredRecipes, "appliance", displayApplianceTag);
  updateSelectBox(filteredRecipes, "ingredient", displayIngredientTag);

  const ustensilTags = updateSelectBox(
    filteredRecipes,
    'ustensil',
    displayUstensilTag,
  );
  // console.log(ustensilTags)
  const filteredUstensil = ustensilTags.ustensil;
  // console.log(filteredUstensil);
  
  ustensilInput.addEventListener("keyup",() => searchUstensilTag(filteredUstensil));


  return {
    selectedUstensilTagsArray,
  };
}


export function filterRecipesByApplianceTag(
  selectedAapplianceTag,
  searchValue
) {
  const recipesSearch = recipes;
  // Vérifier si aucun tag n'est sélectionné
  if (!selectedAapplianceTag) {
    // Retourner toutes les recettes si aucun tag n'est sélectionné
    displayData(recipesSearch);
    return;
  }
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

  updateSelectBox(filteredRecipes, "ustensil", displayUstensilTag);
  updateSelectBox(filteredRecipes, "appliance", displayApplianceTag);
  updateSelectBox(filteredRecipes, "ingredient", displayIngredientTag);

  return selectedApplianceTagsArray;
}
export function filterRecipesByIgredientTag(
  selectedIngredientTag,
  searchValue
) {
  // console.log(selectedIngredientTag, 'selectedIngredientTag')
  const recipesSearch = recipes;
  // Vérifier si aucun tag n'est sélectionné
  if (!selectedIngredientTag) {
    // Retourner toutes les recettes si aucun tag n'est sélectionné
    displayData(recipesSearch);
    return;
  }
  // Ajoutez le tag actuel à selectedIngredientTagsArray
  // selectedIngredientTagsArray.push(selectedIngredientTag);
  // console.log(selectedIngredientTagsArray)
  selectedIngredientTagsArray = selectedIngredientTag.split(",");
  // console.log(selectedIngredientTagsArray)
  filteredRecipes = searchRecipe(recipes, searchValue, {
    selectedIngredientTagsArray,
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
    selectedIngredientTagsArray,
    filteredIngredientTags,
  };
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


const init = async () => {
  // console.log(filteredUstensilTags,'init')

  // Définir les valeurs par défaut pour l'état de l'input de recherche et
  // les résultats de la recherche
  const defaultSearchValue = "";
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
  // // Afficher les ustensiles
  // const ustensilsArray = getUstensil(recipes);
  // displayTags(ustensilsArray, displayUstensilTag);
  // ingredientInput.addEventListener(
  //   "keyup",
  //   searchIngredientTag(ustensilsArray)
  // );
  // // console.log(ustensilsArray);

  //   //**************search ingredient tag*/
  const searchIngredientTag = () => {
    const inputValue = ingredientInput.value
      .toLowerCase()
      .trim()
      .replace(/\s/g, "");
    // console.log(inputValue);
    // Recherche à partir du premier caractère

    const tagsArray = Object.values(filteredIngredientTags);

    if (inputValue.length > 0) {
      let originalMatchingTags;
      if (ingredientsArray) {
        // console.log(ustensilsArray);
        originalMatchingTags = ingredientsArray.filter((tag) =>
          tag.toLowerCase().includes(inputValue)
        );
        // console.log(originalMatchingTags);
        // console.log(originalMatchingTags.length);
        if (originalMatchingTags.length > 0) {
          ingredientList.innerHTML = ""; // Vider la liste pour afficher les nouveaux tags
          displayTags(originalMatchingTags, displayIngredientTag); // Afficher les tags correspondants
        } else {
          ingredientList.innerHTML = "";
          displayTags(ustensilsArray, displayIngredientTag);
          // Si aucun tag correspondant n'est trouvé
          ingredientList.innerHTML = "<li>Aucun résultat trouvé</li>"; // Afficher un message d'erreur
        }
      }

      if (tagsArray) {
        // console.log(tagsArray)
        // Filtrer les tags correspondants
        const matchingTags = tagsArray.reduce((acc, tagArray) => {
          // Vérifier chaque élément du tableau tagArray
          const matchingSubTags = tagArray.filter((tag) =>
            tag.toLowerCase().includes(inputValue)
          );
          if (matchingSubTags.length > 0) {
            acc.push(...matchingSubTags);
          }
          return acc;
        }, []);
        // console.log(matchingTags )
        // console.log(matchingTags.flat())
        // console.log(matchingTags.length)
        // Si des tags correspondants sont trouvés
        if (matchingTags.length > 0) {
          ingredientList.innerHTML = ""; // Vider la liste pour afficher les nouveaux tags
          displayTags(matchingTags.flat(), displayIngredientTag); // Afficher les tags correspondants
        } else if (originalMatchingTags.length == 0) {
          ingredientList.innerHTML = "";
          displayTags(tagsArray, displayIngredientTag);
          // Si aucun tag correspondant n'est trouvé
          ingredientList.innerHTML = "<li>Aucun résultat trouvé</li>"; // Afficher un message d'erreur
        }
      }

      // console.log(filteredIngredientTags);
      // console.log(tagsArray);
      // // Filtrer les tags correspondants
      // const matchingTags = tagsArray.reduce((acc, tagArray) => {
      //   // Vérifier chaque élément du tableau tagArray
      //   const matchingSubTags = tagArray.filter((tag) =>
      //     tag.toLowerCase().includes(inputValue)
      //   );
      //   if (matchingSubTags.length > 0) {
      //     acc.push(matchingSubTags);
      //   }
      //   return acc;
      // }, []);

      // // Si des tags correspondants sont trouvés
      // if (matchingTags.length > 0) {
      //   ingredientList.innerHTML = ''; // Vider la liste pour afficher les nouveaux tags
      //   displayTags(matchingTags.flat(), displayIngredientTag); // Afficher les tags correspondants
      // } else {
      //   // Si aucun tag correspondant n'est trouvé
      //   ingredientList.innerHTML = '<li>Aucun résultat trouvé</li>'; // Afficher un message d'erreur
      // }
    }
  };
  //   //**************search appliance tag*/
  const searchApplianceTag = () => {
    const inputValue = appareilInput.value
      .toLowerCase()
      .trim()
      .replace(/\s/g, "");
    // console.log(inputValue);
    if (inputValue.length > 0) {
      let originalMatchingTags;
      const matchingTags = appliancesArray.filter((tag) =>
        tag.includes(inputValue)
      );
      if (matchingTags.length > 0) {
        applianceList.innerHTML = "";
        displayTags(matchingTags, displayApplianceTag);
      } else {
        // applianceList.innerHTML = '<li>Aucun résultat trouvé</li>';
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
  
  // Affichage initial des données
  displayData(recipes);
 

  // Afficher les ustensiles
  const ustensilsArray = getUstensil(recipes);
  displayTags(ustensilsArray, displayUstensilTag);
  // console.log(ustensilsArray);

  ustensilInput.addEventListener("keyup",() => searchUstensilTag(ustensilsArray));

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
      displayData(recipesSearch);
      updateSelectBox(recipesSearch, "ustensil", displayUstensilTag);
      updateSelectBox(recipesSearch, "appliance", displayApplianceTag);
      updateSelectBox(recipesSearch, "ingredient", displayIngredientTag);

      const ustensilTags = updateSelectBox(
        recipesSearch,
        "ustensil",
        displayUstensilTag
      );
      // console.log(ustensilTags);
      const filteredUstensil = ustensilTags.ustensil;
      console.log(filteredUstensil);
  // Ajouter un gestionnaire d'événements pour la recherche par tag 
      ingredientInput.addEventListener(
        "keyup",
        searchIngredientTag
      );
      appareilInput.addEventListener("keyup", searchApplianceTag);
      ustensilInput.addEventListener("keyup",() => searchUstensilTag(filteredUstensil));
    } else {
      displayData(recipes);
    }
  });

};

init();
