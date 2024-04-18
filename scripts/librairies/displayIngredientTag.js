
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
  li.appendChild(link);
  ingredientList.appendChild(li);
  // Ajoute chaque nouvel élément au début de la liste
  // ingredientList.insertBefore(li, ingredientList.firstChild);
  // li.appendChild(link);
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


    // Vérifier si l'élément a déjà été sélectionné
    if (!ingredientTags.includes(clickedElementContent)) {
        // Ajouter l'élément cliqué à la liste des ingrédients sélectionnés
        ingredientTags.push(clickedElementContent);
        // console.log(ingredientTags);
      
        const tagContainer = document.querySelector('.tag-container');
        
        // Effacer le contenu précédent du conteneur de tags
        // tagContainer.inne-rHTML = '';
        
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
    //     clickedElement.disabled = true;
        clickedElement.classList.add('disabled-link');
    // } else {
    //     console.log("Ce tag a déjà été sélectionné.");
    }

};
