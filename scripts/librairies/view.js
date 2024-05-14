
export const displayCard =(recipe)=>{
    
  const column = document.createElement('div');
  column.classList.add('col-sm-6', 'col-md-4');
  
  const card = document.createElement('div');
  card.classList.add('card', 'rounded-5', 'border-0');
  
  const img = document.createElement('img');
  img.classList.add('img-card', 'rounded-top-5');
  img.src = `../../assets/recette/${recipe.image}`;
  img.alt = recipe.name;
  
  const minutes = document.createElement('div');
  minutes.classList.add('minutes');
  minutes.textContent = `${recipe.time} min`;
  
  const cardContent = document.createElement('div');
  cardContent.classList.add('card-content', 'py-5', 'px-4');
  
  const title = document.createElement('h3');
  title.classList.add('pb-2');
  title.textContent = recipe.name;
  
  const recipeLabel = document.createElement('p');
  recipeLabel.classList.add('text-uppercase', 'second-color');
  recipeLabel.textContent = 'Recette';
  
//   const descriptionWordsCount = 31; // Nombre de mots dans la description fournie

// // Calcul du nombre de mots dans la description
// const descriptionContent = this.description.split(' ');
// const truncatedDescriptionContent = descriptionContent.slice(0, descriptionWordsCount).join(' ');

//   const description = document.createElement('p');
//   // description.textContent = this.description;
//   description.textContent = truncatedDescriptionContent;
const maxCharsPerLine = 45; // Nombre maximal de caractères par ligne
const maxLines = 4; // Nombre maximal de lignes dans la description

// Diviser la description en lignes en fonction du nombre maximal de caractères par ligne
const descriptionLines = recipe.description.match(new RegExp(`.{1,${maxCharsPerLine}}`, 'g'));

// Limiter le nombre de lignes à la valeur maximale
const truncatedDescriptionLines = descriptionLines.slice(0, maxLines);

// Concaténer les lignes pour former la description tronquée
const truncatedDescriptionContent = truncatedDescriptionLines.join('<br>');

const description = document.createElement('p');
description.innerHTML = truncatedDescriptionContent;

  
  const ingredientsLabel = document.createElement('p');
  ingredientsLabel.classList.add('text-uppercase', 'second-color');
  ingredientsLabel.textContent = 'Ingrédients';
  
  const ingredientsDiv = document.createElement('div');
  ingredientsDiv.classList.add('row');
  
  const ingredientsCol1 = document.createElement('div');
  ingredientsCol1.classList.add('col-md-6'); // Première colonne
  
  const ingredientsCol2 = document.createElement('div');
  ingredientsCol2.classList.add('col-md-6'); // Deuxième colonne
  
  // Création de la liste des ingrédients en utilisant ul et li
  const ingredientsList = document.createElement('ul');
  
  
  // Ajout des ingrédients à la liste
  recipe.ingredients.forEach((ingredient, index) => {
    const ingredientItem = document.createElement('li');
    ingredientItem.classList.add('list-unstyled');
    const unit = ingredient.unit === "grammes" ? "g" : ingredient.unit;
    const quantity = ingredient.quantity !== undefined ? ingredient.quantity : '-';
    const quantityHTML = `<span class="ingredient-quantity">${quantity}</span>`;
    const unitHTML = unit ? `<span class="ingredient-unit">${unit}</span> `: "";
    ingredientItem.innerHTML = `${ingredient.ingredient}:<br> ${quantityHTML}${unitHTML}`;
    
    // Alternance des colonnes pour chaque ingrédient
    if (index % 2 === 0) {
        ingredientsCol2.appendChild(ingredientItem); // Colonne de gauche
    } else {
        ingredientsCol1.appendChild(ingredientItem); // Colonne de droite
    }
});
  
  // Ajout de la liste d'ingrédients à chaque colonne
  ingredientsCol1.appendChild(ingredientsList.cloneNode(true));
  ingredientsCol2.appendChild(ingredientsList.cloneNode(true));
  
  // Ajout des colonnes à la ligne d'ingrédients (inversement de l'ordre)
  ingredientsDiv.appendChild(ingredientsCol2); // Ajout de la colonne de droite en premier
  ingredientsDiv.appendChild(ingredientsCol1); // Ajout de la colonne de gauche en deuxième
  
  cardContent.appendChild(title);
  cardContent.appendChild(recipeLabel);
  cardContent.appendChild(description);
  cardContent.appendChild(ingredientsLabel);
  cardContent.appendChild(ingredientsDiv);
  
  card.appendChild(img);
  card.appendChild(minutes);
  card.appendChild(cardContent);
  
  column.appendChild(card);
  
  return column;

}

const pluralizeRecipe = (count) => {
  // console.log(count)
  if (count === 0) {
    return "recette";
  } else {
    return count === 1 ? "recette" : "recettes";
  }
};

export function displayData(recipes) {
  // console.log(recipes)
  const recipeSection = document.querySelector(".cards-container");
  // Nettoyez le conteneur avant d'ajouter de nouvelles cartes (si nécessaire)
  recipeSection.innerHTML = "";
  recipes.forEach((recipe) => {
    const card = displayCard(recipe); // Appelez displayCard pour obtenir la carte HTML de la recette
    // console.log(card)
    recipeSection.appendChild(card); // Ajoutez la carte au conteneu
  });


  let totalRecipesCount = recipes.length;
    // console.log(totalRecipesCount)
    const totalRecipeElement = document.querySelector(".total-recipe");
    totalRecipeElement.innerText = `${totalRecipesCount} ${pluralizeRecipe(
      totalRecipesCount
    )}`;
  // Si aucune recette n'est trouvée, afficher "not found"
  const notFoundElement = document.querySelector(".not-found");
  // console.log(notFoundElement)
  if (totalRecipesCount === 0) {
    notFoundElement.innerText = "Aucune recette corresond à cette recherche ";
  } else {
    notFoundElement.innerText = "";
  }

}
