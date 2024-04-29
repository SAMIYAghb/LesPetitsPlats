  import {filterRecipesByIgredientTag} from '../page/ingredients.js'
  // Affichage des ingrédients triés dans le dropdown menu
export const displayIngredientTag = (ingredient) => {
  // Récupère la liste ul où les ingrédients seront ajoutés
  const ingredientList = document.getElementById("ingredientList");
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
  link.addEventListener("click", (e) => {
    e.preventDefault()
    filterRecipesByIgredientTag(ingredient); // Utilise directement la valeur de l'ustensile
  });
  li.appendChild(link);
  ingredientList.appendChild(li);
};

//afficher le tag selectionner tag jaune
let ingredientTags = [];
export const selectIngredientTag = (clickedElementContent, clickedElement) => {
  // event.preventDefault();
  // console.log(event.target);
  // Récupère l'élément qui a déclenché l'événement
  // const clickedElement = event.target;
  // console.log(clickedElement.textContent);
  // const clickedElementContent = clickedElement.textContent;
  // console.log(clickedElementContent)


    // Vérifier si l'élément a déjà été sélectionné
    if (!ingredientTags.includes(clickedElementContent)) {
        // Ajouter l'élément cliqué à la liste des ingrédients sélectionnés
        ingredientTags.push(clickedElementContent);
        // console.log(ingredientTags);
      
        const tagContainer = document.querySelector('.tag-container');
      
        
                // Ajoute chaque ingrédient sélectionné au conteneur de tags

                const tag = document.createElement("div");
                tag.classList.add('tag');
                tagContainer.appendChild(tag);
                tag.addEventListener('click', ()=>{
                  tag.style.display ='none';
                  clickedElement.disabled = false;
                  clickedElement.classList.remove('disabled-link');
                })
            
                const newTag = document.createElement("span");
                newTag.textContent = clickedElementContent;
                newTag.classList.add("tag-element");
                tag.appendChild(newTag);
                
                const closeTag = document.createElement("i");
                closeTag.classList.add("fa-solid", "fa-circle-xmark");
                tag.appendChild(closeTag);
        // Désactiver l'élément cliqué

        clickedElement.classList.add('disabled-link');
    //     console.log("Ce tag a déjà été sélectionné.");
    }

};


// Fonction pour afficher le nouveau tag sélectionné dans la liste des tags
export const displayNewlySelectedTag = (tag) => {
  // console.log(tag)
  // Ajoutez ici le code pour créer et afficher le tag sélectionné dans l'interface utilisateur
  const tagContainer = document.querySelector('.tag-container');

  const newTag = document.createElement("div");
  newTag.classList.add('tag');
  tagContainer.appendChild(newTag);

  const tagContent = document.createElement("span");
  tagContent.textContent = tag;
  tagContent.classList.add("tag-element");
  newTag.appendChild(tagContent);

  const closeTag = document.createElement("i");
  closeTag.classList.add("fa-solid", "fa-circle-xmark");
  newTag.addEventListener('click', () => {
    // console.log(newTag)
    newTag.remove(); // Supprime le tag lorsqu'on clique sur l'icône de fermeture
  });
  newTag.appendChild(closeTag);
   console.log(tag)
   
};

