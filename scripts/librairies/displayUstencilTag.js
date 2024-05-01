// export const displayUstensilTag = (ustensil)=>{
//     // Récupère la liste ul où les ingrédients seront ajoutés
//     const ustensilList = document.getElementById("ustensilList");
//     // console.log(ustensilList);
//     const li = document.createElement("li");
//     li.classList.add("li-ustensil");
//     li.setAttribute("id", "li-ustensil");

//     // Crée un nouvel élément a
//     const link = document.createElement("a");
//     link.textContent = `${ustensil}`;
    
//     // link.textContent = ustensil; // Utilise directement la valeur de l'ustensile
//     link.setAttribute("href", "#");
//     link.classList.add("link-ustensil");

//     //  Ajoute un gestionnaire d'événements au lien
//   link.addEventListener("click", (e) => {
//     e.preventDefault();
//     // filterRecipesByUstensilTag(ustensil); // Utilise directement la valeur de l'ustensile
//   });

 

//     li.appendChild(link);
//     ustensilList.appendChild(li);
// }
// let ustensilTags = [];
// export const selectUstensilTag = (clickedElementContent, clickedElement) => {
//     // event.preventDefault();
//     // console.log(event.target);
//     // Récupère l'élément qui a déclenché l'événement
//     // const clickedElement = event.target; 
//     // console.log(clickedElement.textContent);
//     // const clickedElementContent = clickedElement.textContent;
//     console.log(clickedElement)
//     console.log(clickedElementContent)
//     // Vérifier si l'élément a déjà été sélectionné
// if (!ustensilTags.includes(clickedElementContent)) {
//     ustensilTags.push(clickedElementContent);
   
// const tagContainer = document.querySelector('.tag-container');

// // // Effacer le contenu précédent pour éviter les doublons
// // tagContainer.innerHTML = '';


// // Ajoute chaque tag sélectionné au conteneur de tags

// const tag = document.createElement("div");
// tag.classList.add('tag');
// tagContainer.appendChild(tag);
// // console.log(tag,'tag')

// tag.addEventListener('click', ()=>{
//     tag.style.display ='none';
//     clickedElement.classList.remove('disabled-link');
//   })

// const newTag = document.createElement("span");
// newTag.textContent = clickedElementContent;
// newTag.classList.add("tag-element");
// tag.appendChild(newTag);
// // console.log('object',newTag)

// const closeTag = document.createElement("i");
// closeTag.classList.add("fa-solid", "fa-circle-xmark");
// tag.appendChild(closeTag);

// clickedElement.classList.add('disabled-link');

//   }; 
// }




import {filterRecipesByUstensilTag} from '../page/index.js'


//afficher les ustensil dans le dropdown menu
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
  // console.log(e.target)
  
  selectUstensilTag(ustensil, li); // Appel de la fonction pour sélectionner le tag
  filterRecipesByUstensilTag(ustensil); // Utilise directement la valeur de l'ustensile
});



  li.appendChild(link);
  ustensilList.appendChild(li);
}



// afficher le tag apres clique
let ustensilTags = [];
export const selectUstensilTag = (clickedElementContent, clickedElement) => {

  // console.log(clickedElement)
  // console.log(clickedElementContent)
  // Vérifier si l'élément a déjà été sélectionné
if (!ustensilTags.includes(clickedElementContent)) {
  ustensilTags.push(clickedElementContent);
 
const tagContainer = document.querySelector('.tag-container');
// Crée le tag
// Ajoute chaque tag sélectionné au conteneur de tags
const tag = document.createElement("div");
tag.classList.add('tag');
tagContainer.appendChild(tag);
// console.log(tag,'tag')

// tag.addEventListener('click', ()=>{
//   tag.style.display ='none';
//   clickedElement.classList.remove('disabled-link');
// })
   // Ajoute le contenu du tag
const newTag = document.createElement("span");
newTag.textContent = clickedElementContent;
newTag.classList.add("tag-element");
tag.appendChild(newTag);
// console.log('object',newTag)

// Ajoute l'icône de fermeture du tag
const closeTag = document.createElement("i");
closeTag.classList.add("fa-solid", "fa-circle-xmark");
tag.appendChild(closeTag);

// Gestionnaire d'événements pour supprimer le tag
tag.addEventListener('click', () => {
  tag.style.display = 'none'; // Cache le tag
  clickedElement.classList.remove('disabled-link'); // Réactive le lien
  const index = ustensilTags.indexOf(clickedElementContent);
  if (index !== -1) {
    ustensilTags.splice(index, 1); // Supprime le tag du tableau
  }
});

clickedElement.classList.add('disabled-link');

}; 
}


// function addClickListenersToUstensilLinks() {
//   const links = document.querySelectorAll(".link-ustensil");
//   // console.log(links);
//   console.log("ee")
//   // links.forEach((link) => {
//   //   //  console.log(link)
//   //   // link.addEventListener("click", selectUstensilTag);
//   //   link.addEventListener("click", (event) => {
//   //     event.preventDefault();
//   //     const clickedElementContent = link.textContent.trim();
//   //     selectUstensilTag(clickedElementContent, link);
//   //     // filterRecipesByUstensilTag(clickedElementContent);
//   //     // console.log(clickedElementContent)
//   //   });
//   // });
// }
// addClickListenersToUstensilLinks()















