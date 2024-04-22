import {searchRecipe} from  '../librairies/search.js'
import {displayData} from '../page/index.js'
import {recipes} from '../utils/api.js'
export const displayApplianceTag = (appliance) => {
  // Récupère la liste ul où les ingrédients seront ajoutés
  const applianceList = document.getElementById("applianceList");
  // console.log(applianceList);
  const li = document.createElement("li");
  li.classList.add("li-appliance");
  // li.setAttribute("id", "li-appliance");

  // Crée un nouvel élément a
  const link = document.createElement("a");
  link.textContent = `${appliance}`;
  link.setAttribute("href", "#");
  link.classList.add("link-appliance");
  // link.addEventListener('click', selectIngredientTag);
  li.appendChild(link);
  applianceList.appendChild(li);
};
let applianceTags = [];
// export const selectApplianceTag = (event) => {
//   event.preventDefault();
//   console.log(event.target.textContent);
//   // Récupère l'élément qui a déclenché l'événement
//   const clickedElement = event.target;
//   // console.log(clickedElement.textContent);
//   const clickedElementContent = clickedElement.textContent;
//   // console.log(clickedElementContent)
//   // Vérifier si l'élément a déjà été sélectionné
//   if (!applianceTags.includes(clickedElementContent)) {
//     applianceTags.push(clickedElementContent);
//     // console.log(ingredientTags)
//     const tagContainer = document.querySelector(".tag-container");

//     // // Effacer le contenu précédent pour éviter les doublons
//     // tagContainer.innerHTML = '';

//     // Ajoute chaque tag sélectionné au conteneur de tags

//     const tag = document.createElement("div");
//     tag.classList.add('tag');
//     tagContainer.appendChild(tag);
//     tag.addEventListener('click', ()=>{
//       tag.style.display ='none';
//       clickedElement.classList.remove('disabled-link');
//     })

//     const newTag = document.createElement("span");
//     newTag.textContent = clickedElementContent;
//     newTag.classList.add("tag-element");
//     tag.appendChild(newTag);
    
//     const closeTag = document.createElement("i");
//     closeTag.classList.add("fa-solid", "fa-circle-xmark");
//     tag.appendChild(closeTag);

//     //  // Désactive le lien <a> après le clic
//     //   clickedElement.removeEventListener('click', selectApplianceTag);
//     clickedElement.classList.add("disabled-link");



    
//   }
// };

export const selectApplianceTag = (clickedElementContent, clickedElement) => {
  // Vérifier si l'élément a déjà été sélectionné
  if (!applianceTags.includes(clickedElementContent)) {
    applianceTags.push(clickedElementContent);
    const tagContainer = document.querySelector(".tag-container");

    // Ajoute chaque tag sélectionné au conteneur de tags
    const tag = document.createElement("div");
    tag.classList.add('tag');
    tagContainer.appendChild(tag);
    tag.addEventListener('click', () => {
      tag.style.display ='none';
      clickedElement.classList.remove('disabled-link');
    });

    const newTag = document.createElement("span");
    newTag.textContent = clickedElementContent;
    newTag.classList.add("tag-element");
    tag.appendChild(newTag);

    const closeTag = document.createElement("i");
    closeTag.classList.add("fa-solid", "fa-circle-xmark");
    tag.appendChild(closeTag);

    // Désactive le lien <a> après le clic
    clickedElement.classList.add("disabled-link");

    // Filtrer les recettes en fonction du tag sélectionné
    // const filteredRecipes = searchRecipe(recipes, '', {
    //   ingredients: [],
    //   appliances: [clickedElementContent], // Utilisez le tag sélectionné pour filtrer les appareils
    //   ustensils: []
    // });
// console.log(filteredRecipes)
    // Afficher les recettes filtrées
    // displayData(filteredRecipes);
  }
};












// export const selectApplianceTag = (clickedElementContent, clickedElement) => {
//   // Vérifier si l'élément a déjà été sélectionné
//   if (!applianceTags.includes(clickedElementContent)) {
//     applianceTags.push(clickedElementContent);
//     const tagContainer = document.querySelector(".tag-container");

//     // Ajoute chaque tag sélectionné au conteneur de tags
//     const tag = document.createElement("div");
//     tag.classList.add('tag');
//     tagContainer.appendChild(tag);
//     tag.addEventListener('click', () => {
//       tag.style.display ='none';
//       clickedElement.classList.remove('disabled-link');
//     });

//     const newTag = document.createElement("span");
//     newTag.textContent = clickedElementContent;
//     newTag.classList.add("tag-element");
//     tag.appendChild(newTag);

//     const closeTag = document.createElement("i");
//     closeTag.classList.add("fa-solid", "fa-circle-xmark");
//     tag.appendChild(closeTag);

//     // Désactive le lien <a> après le clic
//     clickedElement.classList.add("disabled-link");

//     // Filtrer les recettes en fonction du tag sélectionné
//     const filteredRecipes = searchRecipe(recipes, '', {
//       ingredients: [],
//       appliances: [clickedElementContent], // Utilisez le tag sélectionné pour filtrer les appareils
//       ustensils: []
//     });

//     // Afficher les recettes filtrées
//     displayData(filteredRecipes);
//   }
// };

