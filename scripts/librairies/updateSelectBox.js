export function updateSelectBox(filteredRecipes, listType, displayFunction) {
  const listElement = document.getElementById(`${listType}List`);
  // console.log(listElement )
  listElement.innerHTML = '';

  const itemSet = new Set();

  filteredRecipes.forEach((recipe) => {
    switch (listType) {
      case 'ustensil':
        recipe.ustensils.forEach((ustensil) => itemSet.add(ustensil.toLowerCase()));
        break;
      case 'appliance':
        itemSet.add(recipe.appliance.toLowerCase());
        break;
      case 'ingredient':
        recipe.ingredients
          .forEach((ingredient) => itemSet.add(ingredient.ingredient.toLowerCase()));
        break;
      default:
        break;
    }
  });

  const sortedItems = Array.from(itemSet).sort((a, b) => a.localeCompare(b, 'fr'));

  sortedItems.forEach((item) => { displayFunction(item); });

   // Ajout de la classe "disabled" lors du clic
  //  listElement.addEventListener('click', (event) => {
  //   console.log(event.target)
  //   if (event.target.tagName === 'LI') {
  //     event.target.classList.add('disabled-link');
  //   }
  // });

  return {
    [listType]: sortedItems,
  };
}

// Fonction générique pour afficher les tags
export function displayTags(tagsArray, displayFunction) {
  tagsArray
    .sort((a, b) => a.localeCompare(b, 'fr'))
    .forEach((tag) => {
      displayFunction(tag);
    });
}
