
import {filterRecipesByIgredientTag, 
  // filterRecipes
} from '../page/index.js'

// Récupère la liste ul où les ingrédients seront ajoutés
const ingredientList = document.getElementById("ingredientList");
// Affichage les ingrédients triés dans le dropdown menu
export const displayIngredientTag = (ingredient) => {
  
  // console.log(ingredientList);
  const li = document.createElement("li");
  li.classList.add("li-ingredient");
  // li.setAttribute("id", "li-ingredient");

  // Crée un nouvel élément a
  const link = document.createElement("a");
  // link.textContent = `${ingredient}`;
  link.textContent = ingredient;
  link.setAttribute("href", "#");
  link.classList.add("link-ingredient");

  //  Ajoute un gestionnaire d'événements au lien
  // link.addEventListener("click", (e) => {
  //   e.preventDefault();
    
  //   selectIngredientTag(ingredient, li);
  //   filterRecipesByIgredientTag(ingredient); // Utilise directement la valeur de l'ustensile
  //   // filterRecipes();
  // });

  link.addEventListener("click", (e) => {
    e.preventDefault();
    // Récupère la valeur actuelle de la recherche
    const searchValue = document.getElementById("searchInput").value.trim();
    // Appel de la fonction pour sélectionner le tag et filtrer les recettes
    selectIngredientTag(ingredient, li, searchValue);
  });
  li.appendChild(link);
  ingredientList.appendChild(li);
};

//afficher le tag selectionner tag jaune
let ingredientTags = [];
export const selectIngredientTag = (clickedElementContent, clickedElement, searchValue) => {
  // console.log(clickedElementContent)
  // console.log(clickedElement)

  // Vérifier si l'élément a déjà été sélectionné
  if (!ingredientTags.includes(clickedElementContent)) {
    // console.log(clickedElementContent)
    // Ajouter l'élément cliqué à la liste des ingrédients sélectionnés
    ingredientTags.push(clickedElementContent);
    // console.log(ingredientTags);
 
    const tagContainer = document.querySelector(".tag-container");

    // Ajoute chaque ingrédient sélectionné au conteneur de tags

    const tag = document.createElement("div");
    tag.classList.add("tag");
    tagContainer.appendChild(tag);
    // tag.addEventListener('click', ()=>{
    //   tag.style.display ='none';
    //   clickedElement.disabled = false;
    //   clickedElement.classList.remove('disabled-link');
    // })

    const newTag = document.createElement("span");
    newTag.textContent = clickedElementContent;
    newTag.classList.add("tag-element");
    tag.appendChild(newTag);

    const closeTag = document.createElement("i");
    closeTag.classList.add("fa-solid", "fa-circle-xmark");
    tag.appendChild(closeTag);
    // Désactiver l'élément cliqué
    // Gestionnaire d'événements pour supprimer le tag
    tag.addEventListener("click", () => {
      tag.style.display = "none"; // Cache le tag
      clickedElement.classList.remove("disabled-link"); // Réactive le lien
      clickedElement.removeEventListener("click", ingredientClickHandler);

      const index = ingredientTags.indexOf(clickedElementContent);
      if (index !== -1) {
        ingredientTags.splice(index, 1); // Supprime le tag du tableau
      }
    });
    clickedElement.classList.add("disabled-link");
        // console.log("Ce tag a déjà été sélectionné.");

        filterRecipesByIgredientTag(clickedElementContent, searchValue);
  }


};


// Fonction pour filtrer les recettes en fonction des tags sélectionnés
// const searchInput = document.getElementById("searchInput");
// const filterRecipes = () => {
  
//   const searchValue = searchInput.value.toLowerCase().trim().replace(/\s/g, "");
// // console.log(searchValue)
//   const recipesSearch = searchRecipe(recipes, searchValue, {
//     filteredIngredientsArray: ingredientTags,
//     filteredAppliancesArray: [],
//     filteredUstensilsArray: []
//   });
//   // console.log(ingredientTags)
// // console.log(recipesSearch)
//   // Affichage des recettes filtrées
//   displayData(recipesSearch);
// };

// Gestionnaire d'événements pour la recherche principale
// const searchInput = document.getElementById("searchInput");
// searchInput.addEventListener("input", filterRecipes);


// // Ajouter un gestionnaire d'événements pour le clic sur un tag d'ingrédient
// // const ingredientList = document.getElementById("ingredientList");
// ingredientList.addEventListener("click", (event) => {
//   if (event.target.classList.contains("link-ingredient")) {
//     const clickedIngredient = event.target.textContent;
//     selectIngredientTag(clickedIngredient);
//   }
// });

