// import { updateTags } from '../page/index.js';
export const displayIngredientTag = (ingredient) => {
  // Récupère la liste ul où les ingrédients seront ajoutés
  const ingredientList = document.getElementById("ingredientList");
  // console.log(ingredientList);
  const li = document.createElement("li");
  li.classList.add("li-ingredient");
  // li.setAttribute("id", "li-ingredient");

  // Crée un nouvel élément a
  const link = document.createElement("a");
  link.textContent = `${ingredient}`;
  link.setAttribute("href", "#");
  link.classList.add("link-ingredient");
  // link.addEventListener('click', selectIngredientTag);
  li.appendChild(link);
  ingredientList.appendChild(li);
};
let ingredientTags = [];
export const selectIngredientTag = (event) => {
  event.preventDefault();
  // console.log(event.target);
  // Récupère l'élément qui a déclenché l'événement
  const clickedElement = event.target;
  // console.log(clickedElement.textContent);
  const clickedElementContent = clickedElement.textContent;
  // console.log(clickedElementContent)
//   ingredientTags.push(clickedElementContent);
// //   console.log(ingredientTags);

  
//   const tagContainer = document.querySelector(".tag-container");
//   // Effacer le contenu précédent du conteneur de tags
//   tagContainer.innerHTML = "";
//   for (const ingredient of ingredientTags) {
//     const newTag = document.createElement("span");
//     newTag.textContent = ingredient;
//     newTag.classList.add("tag-element");

//     // Ajouter cet élément au conteneur de tag
//     tagContainer.appendChild(newTag);
//   }

    // Vérifier si l'élément a déjà été sélectionné
    if (!ingredientTags.includes(clickedElementContent)) {
        // Ajouter l'élément cliqué à la liste des ingrédients sélectionnés
        ingredientTags.push(clickedElementContent);
        console.log(ingredientTags);

        const tagContainer = document.querySelector('.tag-container');
        
        // Effacer le contenu précédent du conteneur de tags
        tagContainer.innerHTML = '';

        // Ajouter chaque ingrédient sélectionné au conteneur de tags
        for(const ingredient of ingredientTags) {
            const newTag = document.createElement('span');
            newTag.textContent = ingredient;
            newTag.classList.add('tag-element');
            tagContainer.appendChild(newTag);
        }

        // Désactiver l'élément cliqué
        clickedElement.disabled = true;
    } else {
        console.log("Ce tag a déjà été sélectionné.");
    }

};
