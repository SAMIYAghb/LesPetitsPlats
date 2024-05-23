import searchRecipe from '../librairies/search.js';
import { getRecipes, filterUniqueData } from '../utils/api.js';
import { displayData } from '../librairies/view.js';
import { updateSelectBox, displayTags } from '../librairies/updateSelectBox.js';

const ingredientList = document.getElementById('ingredientList');
const ingredientInput = document.getElementById('ingredientInput');

const applianceList = document.getElementById('applianceList');
const appareilInput = document.getElementById('appareilInput');

const ustensilList = document.getElementById('ustensilList');
const ustensilInput = document.getElementById('ustensilInput');

const searchbar = document.getElementById('searchInput');

let filteredRecipes;

let selectedIngredientTagsArray = [];
let selectedApplianceTagsArray = [];
let selectedUstensilTagsArray = [];

export const getAppliances = (recipes) => filterUniqueData(recipes, 'appliance');

export const getIngredients = (recipes) => {
  const ingredients = filterUniqueData(recipes, 'ingredients');
  return ingredients;
};

export const getUstensil = (recipes) => filterUniqueData(recipes, 'ustensils');

const recipes = await getRecipes();

const filterRecipesByUstensilTag = (
  selectedUstensilTag,
  searchValue,
) => {
  // const recipesSearch = recipes;
  selectedUstensilTagsArray = selectedUstensilTag.split(',');
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

  updateSelectBox(filteredRecipes, 'ustensil',  manageUstensilTag);
  updateSelectBox(filteredRecipes, 'appliance', displayApplianceTag);
  updateSelectBox(filteredRecipes, 'ingredient', managIngredientTag);

  const ustensilTags = updateSelectBox(
    filteredRecipes,
    'ustensil',
    manageUstensilTag,
  );
  const filteredUstensil = ustensilTags.ustensil;
  ustensilInput.addEventListener('keyup', () => searchUstensilTag(filteredUstensil));
};

const filterRecipesByApplianceTag = (
  selectedAapplianceTag,
  searchValue,
) => {
  // const recipesSearch = recipes;
  // ajouter le tag selectionne dans selectedApplianceTagsArray
  selectedApplianceTagsArray = selectedAapplianceTag.split(',');
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
  updateSelectBox(filteredRecipes, 'ustensil', manageUstensilTag);
  updateSelectBox(filteredRecipes, 'appliance', displayApplianceTag);
  updateSelectBox(filteredRecipes, 'ingredient', managIngredientTag);

  const applianceTags = updateSelectBox(filteredRecipes, 'appliance', displayApplianceTag);
  const filteredAppliance = applianceTags.appliance;

  appareilInput.addEventListener('keyup', () => searchApplianceTag(filteredAppliance));
};

const filterRecipesByIgredientTag = (
  selectedIngredientTag,
  searchValue,
) => {
  // const recipesSearch = recipes;
  selectedIngredientTagsArray = selectedIngredientTag.split(',');
  filteredRecipes = searchRecipe(recipes, searchValue, {
    selectedIngredientTagsArray,
    selectedApplianceTagsArray,
    selectedUstensilTagsArray,
  });
  displayData(filteredRecipes);
  // Vérifier si aucun tag n'est sélectionné
  if (!selectedIngredientTag) {
    // Retourner toutes les recettes si aucun tag n'est sélectionné
    displayData(filteredRecipes);
    return;
  }

  managIngredientTag
  updateSelectBox(filteredRecipes, 'ustensil', manageUstensilTag);
  updateSelectBox(filteredRecipes, 'appliance', displayApplianceTag);
  updateSelectBox(filteredRecipes, 'ingredient', managIngredientTag);

  const ingredientTags = updateSelectBox(
    filteredRecipes,
    'ingredient',
    managIngredientTag,
  );
  const filteredIngredient = ingredientTags.ingredient;
  ingredientInput.addEventListener('keyup', () => searchIngredientTag(filteredIngredient));
};


const disabledUstensilTags = new Set();
const ustensilTags = [];

const updateTagStatus = (link, isDisabled) => {
  if (isDisabled) {
    link.classList.add('disabled-link');
  } else {
    link.classList.remove('disabled-link');
  }
};

const manageUstensilTag = (ustensil) => {
  const li = document.createElement('li');
  li.classList.add('li-ustensil');
  li.setAttribute('id', 'li-ustensil');

  const link = document.createElement('a');
  link.textContent = ustensil;
  link.setAttribute('href', '#');
  link.classList.add('link-ustensil');

  const tagContainer = document.querySelector('.tag-container');

  if (disabledUstensilTags.has(ustensil)) {
    updateTagStatus(link, true);
  }

  link.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    const searchValue = document.getElementById('searchInput').value.trim();
    const clickedElementContent = ustensil;

    if (!ustensilTags.includes(clickedElementContent)) {
      ustensilTags.push(clickedElementContent);
      disabledUstensilTags.add(clickedElementContent);
      updateTagStatus(link, true);

      const tag = document.createElement('div');
      tag.classList.add('tag', 'tag-element');
      tag.textContent = clickedElementContent;

      const closeTag = document.createElement('i');
      closeTag.classList.add('fa-solid', 'fa-circle-xmark');
      tag.appendChild(closeTag);
      tagContainer.appendChild(tag);

      tag.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        tagContainer.removeChild(tag);

        const index = ustensilTags.indexOf(clickedElementContent);
        if (index !== -1) {
          ustensilTags.splice(index, 1);
          disabledUstensilTags.delete(clickedElementContent);
          updateTagStatus(link, false);

          if (disabledUstensilTags.size === 0) {
            document.querySelectorAll('.link-ustensil').forEach(el => {
              el.classList.remove('disabled-link');
            });
          }
        }
// console.log(disabledUstensilTags)
        filterRecipesByUstensilTag(ustensilTags.join(','), searchValue);
      }, { once: true });

      filterRecipesByUstensilTag(ustensilTags.join(','), searchValue);
    }
  }, { once: true });

  ustensilList.appendChild(li);
  li.appendChild(link);
};




// Définir un ensemble pour stocker les tags désactivés
const disabledIngredientTags = new Set();
// afficher le tag selectionner tag jaune
const ingredientTags = [];


const managIngredientTag = (ingredient) => {
  const li = document.createElement('li');
  li.classList.add('li-ingredient');
  li.setAttribute('id', 'li-ingredient');

  const link = document.createElement('a');
  link.textContent = ingredient;
  link.setAttribute('href', '#');
  link.classList.add('link-ingredient');

  const tagContainer = document.querySelector('.tag-container');

  if (disabledIngredientTags.has(ingredient)) {
    updateTagStatus(link, true);
  }

  link.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    const searchValue = document.getElementById('searchInput').value.trim();
    const clickedElementContent = ingredient;

    if (!ingredientTags.includes(clickedElementContent)) {
      ingredientTags.push(clickedElementContent);
      disabledIngredientTags.add(clickedElementContent);
      updateTagStatus(link, true);

      const tag = document.createElement('div');
      tag.classList.add('tag', 'tag-element');
      tag.textContent = clickedElementContent;

      const closeTag = document.createElement('i');
      closeTag.classList.add('fa-solid', 'fa-circle-xmark');
      tag.appendChild(closeTag);
      tagContainer.appendChild(tag);

      tag.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        tagContainer.removeChild(tag);

        const index = ingredientTags.indexOf(clickedElementContent);
        if (index !== -1) {
          ingredientTags.splice(index, 1);
          disabledIngredientTags.delete(clickedElementContent);
          updateTagStatus(link, false);

          if (disabledIngredientTags.size === 0) {
            document.querySelectorAll('.link-ingredient').forEach(el => {
              el.classList.remove('disabled-link');
            });
          }
        }
        filterRecipesByIgredientTag(ingredientTags.join(','), searchValue);
      }, { once: true });

      filterRecipesByIgredientTag(ingredientTags.join(','), searchValue);
    }
  }, { once: true });

  ingredientList.appendChild(li);
  li.appendChild(link);
};



// const selectIngredientTag = (clickedElementContent, clickedElement, searchValue) => {
//   // console.log(clickedElementContent)
//   // console.log(clickedElement)
//   clickedElement.classList.add('disabled-link');
//   // Vérifier si l'élément a déjà été sélectionné
//   if (!ingredientTags.includes(clickedElementContent)) {
//     // console.log(clickedElementContent)
//     // Ajouter l'élément cliqué à la liste des ingrédients sélectionnés
//     ingredientTags.push(clickedElementContent);
//     // console.log(ingredientTags);
//     disabledIngredientTags.add(clickedElementContent);
//     const tagContainer = document.querySelector('.tag-container');

//     // Ajoute chaque ingrédient sélectionné au conteneur de tags

//     const tag = document.createElement('div');
//     tag.classList.add('tag');
//     tagContainer.appendChild(tag);

//     const newTag = document.createElement('span');
//     newTag.textContent = clickedElementContent;
//     newTag.classList.add('tag-element');
//     tag.appendChild(newTag);

//     const closeTag = document.createElement('i');
//     closeTag.classList.add('fa-solid', 'fa-circle-xmark');
//     tag.appendChild(closeTag);
//     // Désactiver l'élément cliqué
//     // Gestionnaire d'événements pour supprimer le tag
//     tag.addEventListener('click', () => {
//       tag.style.display = 'none'; // Cache le tag
//       clickedElement.classList.remove('disabled-link'); // Réactive le lien
//       // clickedElement.removeEventListener("click", ingredientClickHandler);

//       const index = ingredientTags.indexOf(clickedElementContent);
//       if (index !== -1) {
//         ingredientTags.splice(index, 1); // Supprime le tag du tableau
//         // console.log(ingredientTags)
//         // console.log(typeof(ingredientTags))
//       }
//       // Met à jour la liste des recettes en fonction des tags restants
//       const remainingTags = ingredientTags.join(',');
//       // console.log(remainingTags)
//       // console.log(typeof(remainingTags),'typeof remainingTags')
//       filterRecipesByIgredientTag(remainingTags, searchValue);
//     });

//     // filterRecipesByIgredientTag(clickedElementContent, searchValue);
//     filterRecipesByIgredientTag(ingredientTags.join(','), searchValue);
//     // console.log(clickedElementContent,'clickedElementContent')
//   }
// };
// // Affichage les ingrédients triés dans le dropdown menu
// const displayIngredientTag = (ingredient) => {
//   // console.log(ingredientList);
//   const li = document.createElement('li');
//   li.classList.add('li-ingredient');
//   // li.setAttribute("id", "li-ingredient");

//   // Crée un nouvel élément a
//   const link = document.createElement('a');
//   link.textContent = ingredient;
//   link.setAttribute('href', '#');
//   link.classList.add('link-ingredient');
//   // Vérifier si le tag est désactivé et ajouter la classe en conséquence
//   if (disabledIngredientTags.has(ingredient)) {
//     link.classList.add('disabled-link');
//   }

//   //  Ajoute un gestionnaire d'événements au lien

//   link.addEventListener('click', (e) => {
//     e.preventDefault();
//     // Récupère la valeur actuelle de la recherche
//     const searchValue = document.getElementById('searchInput').value.trim();
//     // Appel de la fonction pour sélectionner le tag et filtrer les recettes
//     selectIngredientTag(ingredient, li, searchValue);
//   });
//   li.appendChild(link);
//   ingredientList.appendChild(li);
// };

// Définir un ensemble pour stocker les tags désactivés
const disabledApplianceTags = new Set();
const applianceTags = [];
const selectApplianceTag = (clickedElementContent, clickedElement, searchValue) => {
  // Vérifier si l'élément a déjà été sélectionné
  if (!applianceTags.includes(clickedElementContent)) {
    applianceTags.push(clickedElementContent);
    disabledApplianceTags.add(clickedElementContent);
    const tagContainer = document.querySelector('.tag-container');

    // Ajoute chaque tag sélectionné au conteneur de tags
    const tag = document.createElement('div');
    tag.classList.add('tag');
    tagContainer.appendChild(tag);

    const newTag = document.createElement('span');
    newTag.textContent = clickedElementContent;
    newTag.classList.add('tag-element');
    tag.appendChild(newTag);

    const closeTag = document.createElement('i');
    closeTag.classList.add('fa-solid', 'fa-circle-xmark');
    tag.appendChild(closeTag);
    // / Gestionnaire d'événements pour supprimer le tag
    tag.addEventListener('click', () => {
      tag.style.display = 'none'; // Cache le tag
      clickedElement.classList.remove('disabled-link'); // Réactive le lien
      const index = applianceTags.indexOf(clickedElementContent);
      if (index !== -1) {
        applianceTags.splice(index, 1); // Supprime le tag du tableau
      }
      const remainingTags = applianceTags.join(',');
      filterRecipesByApplianceTag(remainingTags, searchValue);
    });
    // Désactive le lien <a> après le clic
    // clickedElement.classList.add("disabled-link");
    filterRecipesByApplianceTag(clickedElementContent, searchValue);
  }
};

const displayApplianceTag = (appliance) => {
  const li = document.createElement('li');
  li.classList.add('li-appliance');
  // li.setAttribute("id", "li-appliance");

  // Crée un nouvel élément a
  const link = document.createElement('a');
  link.textContent = `${appliance}`;
  link.setAttribute('href', '#');
  // Vérifier si le tag est désactivé et ajouter la classe en conséquence
  if (disabledApplianceTags.has(appliance)) {
    link.classList.add('disabled-link');
  }
  link.classList.add('link-appliance');
  //  Ajoute un gestionnaire d'événements au lien
  link.addEventListener('click', (e) => {
    e.preventDefault();
    e.target.classList.add('disabled-link');
    // Récupère la valeur actuelle de la recherche
    const searchValue = document.getElementById('searchInput').value.trim();
    // Appel de la fonction pour sélectionner le tag et filtrer les recettes
    selectApplianceTag(appliance, li, searchValue);
  });

  li.appendChild(link);
  applianceList.appendChild(li);
};

//   //**************search ingredient tag*/
const searchIngredientTag = (filteredIngredient) => {
  const inputIngredientValue = ingredientInput.value
    .toLowerCase()
    .trim()
    .replace(/\s/g, '');
  if (inputIngredientValue.length > 0) {
    const matchingTags = filteredIngredient.filter((tag) => tag.includes(inputIngredientValue));
    // console.log(matchingTags);
    if (matchingTags.length > 0) {
      ingredientList.innerHTML = '';
      displayTags(matchingTags, managIngredientTag
      );
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
    .replace(/\s/g, '');
  if (inputUstensilValue.length > 0) {
    const matchingTags = filteredUstensil.filter((tag) => tag.includes(inputUstensilValue));
    if (matchingTags.length > 0) {
      ustensilList.innerHTML = '';
      displayTags(matchingTags, manageUstensilTag);
    } else {
      ustensilList.innerHTML = '<li>Aucun résultat trouvé</li>';
    }
  }
};
//   //**************search appliance tag*/
const searchApplianceTag = (filteredAppliance) => {
  const inputAppValue = appareilInput.value
    .toLowerCase()
    .trim()
    .replace(/\s/g, '');
  if (inputAppValue.length > 0) {
    const matchingTags = filteredAppliance.filter((tag) => tag.includes(inputAppValue));
    if (matchingTags.length > 0) {
      applianceList.innerHTML = '';
      displayTags(matchingTags, displayApplianceTag);
    } else {
      applianceList.innerHTML = '<li>Aucun résultat trouvé</li>';
    }
  }
};

const init = async () => {
  // Définir les valeurs par défaut pour l'état de l'input de recherche et
  // les résultats de la recherche
  const defaultSearchValue = '';
  const defaultFilteredRecipes = [];
  // Lorsque vous chargez la page, utilisez les valeurs par défaut pour afficher les résultats
  searchbar.value = defaultSearchValue;
  displayData(defaultFilteredRecipes);

  // const recipes = await getRecipes();

  // Afficher les ingrédients
  const ingredientsArray = getIngredients(recipes);
  displayTags(ingredientsArray, managIngredientTag);
  // Afficher les appareils
  const appliancesArray = getAppliances(recipes);
  displayTags(appliancesArray, displayApplianceTag);
  // Afficher les ustensiles
  const ustensilsArray = getUstensil(recipes);
  displayTags(ustensilsArray, manageUstensilTag);

  // Affichage initial des données
  displayData(recipes);

  ingredientInput.addEventListener('keyup', () => searchIngredientTag(ingredientsArray));

  appareilInput.addEventListener('keyup', () => searchApplianceTag(appliancesArray));

  ustensilInput.addEventListener('keyup', () => searchUstensilTag(ustensilsArray));

  // Gestionnaire d'événements pour la recherche principale
  searchbar.addEventListener('input', () => {
    const searchValue = searchbar.value.toLowerCase().trim().replace(/\s/g, '');

    if (searchValue.length >= 3) {
      const recipesSearch = searchRecipe(recipes, searchValue, {
        selectedIngredientTagsArray,
        selectedApplianceTagsArray,
        selectedUstensilTagsArray,
      });
      displayData(recipesSearch);
      updateSelectBox(recipesSearch, 'ustensil', manageUstensilTag);
      updateSelectBox(recipesSearch, 'appliance', displayApplianceTag);
      updateSelectBox(recipesSearch, 'ingredient', managIngredientTag);

      const ingredientTag = updateSelectBox(recipesSearch, 'ingredient', managIngredientTag);
      const filteredIngredient = ingredientTag.ingredient;

      const applianceTag = updateSelectBox(recipesSearch, 'appliance', displayApplianceTag);
      const filteredAppliance = applianceTag.appliance;

      const ustensilTag = updateSelectBox(recipesSearch, 'ustensil', manageUstensilTag);
      const filteredUstensil = ustensilTag.ustensil;
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
