import {filterRecipesByUstensilTag} from '../page/ustensils.js'
// const selectedUstensilTags = [];
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
    
    // link.textContent = ustensil; // Utilise directement la valeur de l'ustensile
    link.setAttribute("href", "#");
    link.classList.add("link-ustensil");

    //  Ajoute un gestionnaire d'événements au lien
  link.addEventListener("click", (e) => {
    e.preventDefault();
    filterRecipesByUstensilTag(ustensil); // Utilise directement la valeur de l'ustensile
  });

 

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




















// // Déclarez un tableau en dehors des fonctions pour stocker les tags sélectionnés
// const selectedUstensilTags = [];

// // Fonction pour afficher un tag d'ustensile
// export const displayUstensilTag = (ustensil) => {
//     const ustensilList = document.getElementById("ustensilList");
//     const li = document.createElement("li");
//     li.classList.add("li-ustensil");
//     li.setAttribute("id", "li-ustensil");

//     const link = document.createElement("a");
//     link.textContent = `${ustensil}`;
//     link.setAttribute("href", "#");
//     link.classList.add("link-ustensil");

//     link.addEventListener("click", () => {
//         // Ajoutez le tag sélectionné au tableau
//         if (!selectedUstensilTags.includes(ustensil)) {
//             selectedUstensilTags.push(ustensil);
//         }
//         // Filtrer les recettes en fonction des tags sélectionnés
//         filterRecipesBySelectedUstensilTags();
//         // Afficher les tags sélectionnés
//         displaySelectedUstensilTags();
//     });

//     li.appendChild(link);
//     ustensilList.appendChild(li);
// };

// // Fonction pour filtrer les recettes en fonction des tags sélectionnés
// function filterRecipesBySelectedUstensilTags() {
//     // Votre logique de filtrage des recettes en fonction des tags sélectionnés
// }

// // Fonction pour afficher les tags sélectionnés dans l'interface utilisateur
// function displaySelectedUstensilTags() {
//     const selectedUstensilTagsElement = document.getElementById("selectedUstensilTags");
//     selectedUstensilTagsElement.innerHTML = "";

//     selectedUstensilTags.forEach((tag) => {
//         const tagElement = document.createElement("span");
//         tagElement.textContent = tag;
//         selectedUstensilTagsElement.appendChild(tagElement);
//     });
// }
