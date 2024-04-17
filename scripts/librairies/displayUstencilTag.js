// import { updateTags } from '../page/index.js';

export const displayUstensilTag = (ustensil)=>{
    // Récupère la liste ul où les ingrédients seront ajoutés
    const ustensilList = document.getElementById("ustensilList");
    // console.log(ustensilList);
    const li = document.createElement("li");
    li.classList.add("li-ustensil");
    li.setAttribute("id", "li-ustensil");

    // Crée un nouvel élément a
    const link = document.createElement("a");
    link.textContent = `${ustensil}`;
    link.setAttribute("href", "#");
    link.classList.add("link-ustensil");
    li.appendChild(link);
    ustensilList.appendChild(li);
}
let ustensilTags = [];
export const selectUstensilTag = (event) => {
    event.preventDefault();
    // console.log(event.target);
    // Récupère l'élément qui a déclenché l'événement
    const clickedElement = event.target; 
    // console.log(clickedElement.textContent);
    const clickedElementContent = clickedElement.textContent;
    // console.log(clickedElementContent)
    // Vérifier si l'élément a déjà été sélectionné
if (!ustensilTags.includes(clickedElementContent)) {
    ustensilTags.push(clickedElementContent);
   
const tagContainer = document.querySelector('.tag-container');

// // Effacer le contenu précédent pour éviter les doublons
// tagContainer.innerHTML = '';


// Ajoute chaque tag sélectionné au conteneur de tags

    const newTag = document.createElement('span');
    newTag.textContent = clickedElementContent;
    newTag.classList.add('tag-element');
    tagContainer.appendChild(newTag);

clickedElement.classList.add('disabled-link');

  }; 
}