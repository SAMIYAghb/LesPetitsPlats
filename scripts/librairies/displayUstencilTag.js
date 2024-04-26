// import {filterRecipesByUstensilTag} from '../page/filterRecipes.js'

export const displayUstensilTag = (ustensil)=>{
    // Récupère la liste ul où les ingrédients seront ajoutés
    const ustensilList = document.getElementById("ustensilList");
    // console.log(ustensilList);
    const li = document.createElement("li");
    li.classList.add("li-ustensil");
    li.setAttribute("id", "li-ustensil");

    // Crée un nouvel élément a
    const link = document.createElement("a");
    // link.textContent = `${ustensil}`;
    
    link.textContent = ustensil; // Utilise directement la valeur de l'ustensile
    link.setAttribute("href", "#");
    link.classList.add("link-ustensil");

    //  Ajoute un gestionnaire d'événements au lien
  // link.addEventListener("click", () => {
  //   filterRecipesByUstensilTag([ustensil]); // Utilise directement la valeur de l'ustensile
  // });


    li.appendChild(link);
    ustensilList.appendChild(li);
}
let ustensilTags = [];
export const selectUstensilTag = (clickedElementContent, clickedElement) => {
    // event.preventDefault();
    // console.log(event.target);
    // Récupère l'élément qui a déclenché l'événement
    // const clickedElement = event.target; 
    // console.log(clickedElement.textContent);
    // const clickedElementContent = clickedElement.textContent;
    // console.log(clickedElementContent)
    // Vérifier si l'élément a déjà été sélectionné
if (!ustensilTags.includes(clickedElementContent)) {
    ustensilTags.push(clickedElementContent);
   
const tagContainer = document.querySelector('.tag-container');

// // Effacer le contenu précédent pour éviter les doublons
// tagContainer.innerHTML = '';


// Ajoute chaque tag sélectionné au conteneur de tags

const tag = document.createElement("div");
tag.classList.add('tag');
tagContainer.appendChild(tag);
tag.addEventListener('click', ()=>{
    tag.style.display ='none';
    clickedElement.classList.remove('disabled-link');
  })

const newTag = document.createElement("span");
newTag.textContent = clickedElementContent;
newTag.classList.add("tag-element");
tag.appendChild(newTag);

const closeTag = document.createElement("i");
closeTag.classList.add("fa-solid", "fa-circle-xmark");
tag.appendChild(closeTag);

clickedElement.classList.add('disabled-link');

  }; 
}


// export function addClickListenersToUstensilLinks() {
//   const links = document.querySelectorAll(".link-ustensil");
//   // console.log(links);
//   links.forEach((link) => {
//     //  console.log(link)
//     // link.addEventListener("click", selectUstensilTag);
//     link.addEventListener("click", (event) => {
//       event.preventDefault();
//       const clickedElementContent = link.textContent.trim();
//       selectUstensilTag(clickedElementContent, link);
//       filterRecipesByUstensilTag(clickedElementContent);
//     });
//   });
// }
// addClickListenersToUstensilLinks();