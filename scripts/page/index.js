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

const selectedIngredientTagsArray = [];
const selectedApplianceTagsArray = [];
const selectedUstensilTagsArray = [];

export const getAppliances = (recipes) => filterUniqueData(recipes, 'appliance');

export const getIngredients = (recipes) => {
  const ingredients = filterUniqueData(recipes, 'ingredients');
  return ingredients;
};

export const getUstensil = (recipes) => filterUniqueData(recipes, 'ustensils');

const recipes = await getRecipes();

// function general pour filtrer les recettes on bason sur tags et search value
const filterRecipes = (searchValue) => {
  filteredRecipes = searchRecipe(recipes, searchValue, {
    selectedIngredientTagsArray,
    selectedApplianceTagsArray,
    selectedUstensilTagsArray,
  });
  displayData(filteredRecipes);
};

// Function pour mise a jour des select boxes et ajouter event listeners pour tag searches
const updateAndAddListeners = (recipesList) => {
  const ingredientTags = updateSelectBox(recipesList, 'ingredient', managIngredientTag);
  const applianceTags = updateSelectBox(recipesList, 'appliance', managApplianceTag);
  const ustensilTags = updateSelectBox(recipesList, 'ustensil', manageUstensilTag);

  ingredientInput.addEventListener('keyup', () => searchIngredientTag(ingredientTags.ingredient));
  appareilInput.addEventListener('keyup', () => searchApplianceTag(applianceTags.appliance));
  ustensilInput.addEventListener('keyup', () => searchUstensilTag(ustensilTags.ustensil));
};

// Function pou handle filter par tags
const handleTagFiltering = (selectedTagArray, selectedTag, tagType, searchValue) => {
  // eslint-disable-next-line no-param-reassign
  selectedTagArray.length = 0;
  if (selectedTag) selectedTagArray.push(...selectedTag.split(','));
  filterRecipes(searchValue);
  if (!selectedTag) return;

  updateAndAddListeners(filteredRecipes);
};

// filtrer les recette par par ingredient tag
const filterRecipesByIgredientTag = (selectedIngredientTag, searchValue) => {
  handleTagFiltering(selectedIngredientTagsArray, selectedIngredientTag, 'ingredient', searchValue);
};

// filtrer les recette par appliance tag
const filterRecipesByApplianceTag = (selectedApplianceTag, searchValue) => {
  handleTagFiltering(selectedApplianceTagsArray, selectedApplianceTag, 'appliance', searchValue);
};

// filtrer les recette par ustensil tag
const filterRecipesByUstensilTag = (selectedUstensilTag, searchValue) => {
  handleTagFiltering(selectedUstensilTagsArray, selectedUstensilTag, 'ustensil', searchValue);
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

      tag.addEventListener('click', (event) => {
        event.preventDefault();
        event.stopPropagation();
        tagContainer.removeChild(tag);

        const index = ustensilTags.indexOf(clickedElementContent);
        if (index !== -1) {
          ustensilTags.splice(index, 1);
          disabledUstensilTags.delete(clickedElementContent);
          updateTagStatus(link, false);

          if (disabledUstensilTags.size === 0) {
            document.querySelectorAll('.link-ustensil').forEach((element) => {
              element.classList.remove('disabled-link');
            });
          }
        }

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

      tag.addEventListener('click', (event) => {
        event.preventDefault();
        event.stopPropagation();
        tagContainer.removeChild(tag);

        const index = ingredientTags.indexOf(clickedElementContent);
        if (index !== -1) {
          ingredientTags.splice(index, 1);
          disabledIngredientTags.delete(clickedElementContent);
          updateTagStatus(link, false);

          if (disabledIngredientTags.size === 0) {
            document.querySelectorAll('.link-ingredient').forEach((element) => {
              element.classList.remove('disabled-link');
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

// Définir un ensemble pour stocker les tags désactivés
const disabledApplianceTags = new Set();
const applianceTags = [];

const managApplianceTag = (appliance) => {
  const li = document.createElement('li');
  li.classList.add('li-appliance');
  li.setAttribute('id', 'li-appliance');

  const link = document.createElement('a');
  link.textContent = appliance;
  link.setAttribute('href', '#');
  link.classList.add('link-appliance');

  const tagContainer = document.querySelector('.tag-container');

  if (disabledApplianceTags.has(appliance)) {
    updateTagStatus(link, true);
  }

  link.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    const searchValue = document.getElementById('searchInput').value.trim();
    const clickedElementContent = appliance;

    if (!applianceTags.includes(clickedElementContent)) {
      applianceTags.push(clickedElementContent);
      disabledApplianceTags.add(clickedElementContent);
      updateTagStatus(link, true);

      const tag = document.createElement('div');
      tag.classList.add('tag', 'tag-element');
      tag.textContent = clickedElementContent;

      const closeTag = document.createElement('i');
      closeTag.classList.add('fa-solid', 'fa-circle-xmark');
      tag.appendChild(closeTag);
      tagContainer.appendChild(tag);

      tag.addEventListener('click', (event) => {
        event.preventDefault();
        event.stopPropagation();
        tagContainer.removeChild(tag);

        const index = applianceTags.indexOf(clickedElementContent);
        if (index !== -1) {
          applianceTags.splice(index, 1);
          disabledApplianceTags.delete(clickedElementContent);
          updateTagStatus(link, false);

          if (disabledApplianceTags.size === 0) {
            document.querySelectorAll('.link-appliance').forEach((element) => {
              element.classList.remove('disabled-link');
            });
          }
        }
        filterRecipesByApplianceTag(applianceTags.join(','), searchValue);
      }, { once: true });

      filterRecipesByApplianceTag(applianceTags.join(','), searchValue);
    }
  }, { once: true });

  applianceList.appendChild(li);
  li.appendChild(link);
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
      displayTags(matchingTags, managIngredientTag);
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
      displayTags(matchingTags, managApplianceTag);
    } else {
      applianceList.innerHTML = '<li>Aucun résultat trouvé</li>';
    }
  }
};

const init = async () => {
  const defaultSearchValue = '';
  searchbar.value = defaultSearchValue;

  // const recipes = await getRecipes();

  // Display initial data
  displayData(recipes);

  // Display tags
  displayTags(getIngredients(recipes), managIngredientTag);
  displayTags(getAppliances(recipes), managApplianceTag);
  displayTags(getUstensil(recipes), manageUstensilTag);

  // Ajouter un event listeners pour tag inputs
  ingredientInput.addEventListener('keyup', () => searchIngredientTag(getIngredients(recipes)));
  appareilInput.addEventListener('keyup', () => searchApplianceTag(getAppliances(recipes)));
  ustensilInput.addEventListener('keyup', () => searchUstensilTag(getUstensil(recipes)));

  // Main search bar event listener
  searchbar.addEventListener('input', () => {
    const searchValue = searchbar.value.toLowerCase().trim().replace(/\s/g, '');

    if (searchValue.length >= 3) {
      filterRecipes(searchValue);
      updateAndAddListeners(filteredRecipes);
    } else {
      displayData(recipes);
    }
  });
};

init();
