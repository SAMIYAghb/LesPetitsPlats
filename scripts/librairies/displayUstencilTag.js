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
    ustensilTags.push(clickedElementContent);
   

//     const tag = document.querySelector('.tag')
//     const htmlTag = document.querySelector('.tag-element')
    
//     for(const ustensil of ustensilTags) {
//       tag.style.display = 'block';
//       htmlTag.textContent = ustensil;
//   }

const tagContainer = document.querySelector('.tag-container');

// // Effacer le contenu précédent pour éviter les doublons
tagContainer.innerHTML = '';
// Ajoute chaque tag sélectionné au conteneur de tags
ustensilTags.forEach(ustensil => {
    const tagElement = document.createElement('div');
    tagElement.classList.add('tag', 'ustensil');
    tagElement.textContent = ustensil;
    tagContainer.appendChild(tagElement);
});


  };