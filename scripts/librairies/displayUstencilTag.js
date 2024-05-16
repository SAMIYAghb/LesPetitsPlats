import { 
  // filterRecipesByTag, 
  filterRecipesByUstensilTag } from "../page/index.js";
// Définir un ensemble pour stocker les tags désactivés
const disabledUstensilTags = new Set();
//afficher les ustensil dans le dropdown menu
export const displayUstensilTag = (ustensil) => {
  // Récupère la liste ul où les ingrédients seront ajoutés
  const ustensilList = document.getElementById("ustensilList");
  // console.log(ustensilList);
  const li = document.createElement("li");
  li.classList.add("li-ustensil");
  li.setAttribute("id", "li-ustensil");

  // Crée un nouvel élément a
  const link = document.createElement("a");
  link.textContent = ustensil;

  // link.textContent = ustensil; // Utilise directement la valeur de l'ustensile
  link.setAttribute("href", "#");
  link.classList.add("link-ustensil");

  // Vérifier si le tag est désactivé et ajouter la classe en conséquence
  if (disabledUstensilTags.has(ustensil)) {
    link.classList.add("disabled-link");
  }

  link.addEventListener("click", (e) => {
    e.preventDefault();
    // Récupère la valeur actuelle de la recherche

    const searchValue = document.getElementById("searchInput").value.trim();
    // Appel de la fonction pour sélectionner le tag et filtrer les recettes
    e.target.classList.add("disabled-link");
    selectUstensilTag(ustensil, li, searchValue);
  });

  li.appendChild(link);
  ustensilList.appendChild(li);
};

// afficher le tag apres clique
let ustensilTags = [];
export const selectUstensilTag = (clickedElementContent,clickedElement,searchValue) => {
  // console.log(clickedElement)
  // console.log(clickedElementContent)

  // Vérifier si l'élément a déjà été sélectionné
  if (!ustensilTags.includes(clickedElementContent)) {
    ustensilTags.push(clickedElementContent);
    disabledUstensilTags.add(clickedElementContent);
    const tagContainer = document.querySelector(".tag-container");
    // Crée le tag
    // Ajoute chaque tag sélectionné au conteneur de tags
    const tag = document.createElement("div");
    tag.classList.add("tag");
    tagContainer.appendChild(tag);

    // Ajoute le contenu du tag
    const newTag = document.createElement("span");
    newTag.textContent = clickedElementContent;
    newTag.classList.add("tag-element");
    tag.appendChild(newTag);
    // Ajoute l'icône de fermeture du tag
    const closeTag = document.createElement("i");
    closeTag.classList.add("fa-solid", "fa-circle-xmark");
    tag.appendChild(closeTag);

    // Gestionnaire d'événements pour supprimer le tag
    tag.addEventListener("click", () => {
    // Supprimer le tag de la liste des tags
    const index = ustensilTags.indexOf(clickedElementContent);
    if (index !== -1) {
        ustensilTags.splice(index, 1);
        // console.log("ustensilTags après suppression :", ustensilTags);

    }

    // Mise à jour de la liste des tags désactivés
//     disabledUstensilTags.delete(clickedElementContent);
// console.log(disabledUstensilTags.delete(clickedElementContent))
    // Cacher le tag
    tag.style.display = "none";

    // Réactiver le lien
    clickedElement.classList.remove("disabled-link");

    // Appeler la fonction removeTag
    // removeTag("ustensil", clickedElementContent, searchValue);

    console.log(ustensilTags,'ustensilTags')
    ustensilTags.forEach(ustensil => {
      // console.log(ustensil);
      filterRecipesByUstensilTag(ustensil, searchValue);
  });
});

    
    filterRecipesByUstensilTag(clickedElementContent, searchValue);
    // console.log(clickedElementContent)
  }
};


// Fonction pour supprimer un tag
const removeTag = (tagType, tagName, searchValue) => {
  // Convertir ustensilTags en chaîne de caractères
  const ustensilTagsString = ustensilTags.length > 0 ? ustensilTags.join(',') : "all";
  
  console.log("ustensilTags après suppression :", ustensilTags);
  console.log("ustensilTagsString :", ustensilTagsString);

  // Relancer la recherche en utilisant la fonction filterRecipesByTag
  filterRecipesByUstensilTag( ustensilTagsString, searchValue);
};














// import { filterRecipesByTag } from "../page/index.js";
// // Définir un ensemble pour stocker les tags désactivés
// const disabledUstensilTags = new Set();
// //afficher les ustensil dans le dropdown menu
// export const displayUstensilTag = (ustensil) => {
//   // Récupère la liste ul où les ingrédients seront ajoutés
//   const ustensilList = document.getElementById("ustensilList");
//   // console.log(ustensilList);
//   const li = document.createElement("li");
//   li.classList.add("li-ustensil");
//   li.setAttribute("id", "li-ustensil");

//   // Crée un nouvel élément a
//   const link = document.createElement("a");
//   link.textContent = ustensil;

//   // link.textContent = ustensil; // Utilise directement la valeur de l'ustensile
//   link.setAttribute("href", "#");
//   link.classList.add("link-ustensil");

//   // Vérifier si le tag est désactivé et ajouter la classe en conséquence
//   if (disabledUstensilTags.has(ustensil)) {
//     link.classList.add("disabled-link");
//   }

//   link.addEventListener("click", (e) => {
//     e.preventDefault();
//     // Récupère la valeur actuelle de la recherche

//     const searchValue = document.getElementById("searchInput").value.trim();
//     // Appel de la fonction pour sélectionner le tag et filtrer les recettes
//     e.target.classList.add("disabled-link");
//     selectUstensilTag(ustensil, li, searchValue);
//   });

//   li.appendChild(link);
//   ustensilList.appendChild(li);
// };

// // afficher le tag apres clique
// let ustensilTags = [];
// export const selectUstensilTag = (clickedElementContent,clickedElement,searchValue) => {
//   // console.log(clickedElement)
//   // console.log(clickedElementContent)

//   // Vérifier si l'élément a déjà été sélectionné
//   if (!ustensilTags.includes(clickedElementContent)) {
//     ustensilTags.push(clickedElementContent);
//     disabledUstensilTags.add(clickedElementContent);
//     const tagContainer = document.querySelector(".tag-container");
//     // Crée le tag
//     // Ajoute chaque tag sélectionné au conteneur de tags
//     const tag = document.createElement("div");
//     tag.classList.add("tag");
//     tagContainer.appendChild(tag);

//     // Ajoute le contenu du tag
//     const newTag = document.createElement("span");
//     newTag.textContent = clickedElementContent;
//     newTag.classList.add("tag-element");
//     tag.appendChild(newTag);
//     // Ajoute l'icône de fermeture du tag
//     const closeTag = document.createElement("i");
//     closeTag.classList.add("fa-solid", "fa-circle-xmark");
//     tag.appendChild(closeTag);

//     // Gestionnaire d'événements pour supprimer le tag
//     tag.addEventListener("click", () => {
//     // Supprimer le tag de la liste des tags
//     const index = ustensilTags.indexOf(clickedElementContent);
//     if (index !== -1) {
//         ustensilTags.splice(index, 1);
//         console.log("ustensilTags après suppression :", ustensilTags);

//     }

//     // Mise à jour de la liste des tags désactivés
//     disabledUstensilTags.delete(clickedElementContent);

//     // Cacher le tag
//     tag.style.display = "none";

//     // Réactiver le lien
//     clickedElement.classList.remove("disabled-link");

//     // Appeler la fonction removeTag
//     removeTag("ustensil", clickedElementContent, searchValue);
// });

//     // console.log(clickedElementContent)
//     filterRecipesByTag("ustensil", clickedElementContent, searchValue);
//     // console.log(clickedElementContent)
//   }
// };
// // Fonction pour supprimer un tag
// const removeTag = (tagType, tagName, searchValue) => {
//   // Convertir ustensilTags en chaîne de caractères
//   const ustensilTagsString = ustensilTags.length > 0 ? ustensilTags.join(',') : "all";
  
//   console.log("ustensilTags après suppression :", ustensilTags);
//   console.log("ustensilTagsString :", ustensilTagsString);

//   // Relancer la recherche en utilisant la fonction filterRecipesByTag
//   filterRecipesByTag(tagType, ustensilTagsString, searchValue);
// };