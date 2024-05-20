import {
  // filterRecipesByTag,
  filterRecipesByUstensilTag,
} from "../page/index.js";
// Définir un ensemble pour stocker les tags désactivés
// Un ensemble est une collection d'éléments uniques, ce qui signifie qu'il ne peut pas contenir de doublons d'éléments.
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
// console.log(disabledUstensilTags)
  link.addEventListener("click", (e) => {
    e.preventDefault();
    // Récupère la valeur actuelle de la recherche

    const searchValue = document.getElementById("searchInput").value.trim();
    // Appel de la fonction pour sélectionner le tag et filtrer les recettes
    e.target.classList.add("disabled-link");
    // console.log(e.target) //<a>
    selectUstensilTag(ustensil, e.target, searchValue);
  });

  li.appendChild(link);
  ustensilList.appendChild(li);
};

// afficher le tag apres clique
let ustensilTags = [];
export const selectUstensilTag = (
  clickedElementContent,
  clickedElement,
  searchValue
) => {
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

    // Ajoute l'élément à disabledUstensilTags
  // disabledUstensilTags.add(clickedElementContent);
    // Gestionnaire d'événements pour supprimer le tag
    tag.addEventListener("click", () => {
      // Supprimer le tag de la liste des tags
      const index = ustensilTags.indexOf(clickedElementContent);
      if (index !== -1) {
          ustensilTags.splice(index, 1);
          // console.log("ustensilTags après suppression :", ustensilTags);
      }
//       // // Cacher le tag
      tag.style.display = "none";
      // tag.remove();
//       // // Réactiver le lien
// console.log(tag)
// disabledUstensilTags.delete(tag)
// Supprimer l'élément de disabledUstensilTags
// disabledUstensilTags.delete(clickedElementContent);
// console.log(disabledUstensilTags)

      clickedElement.classList.remove("disabled-link");
      console.log(clickedElement)


//       // console.log(typeof(ustensilTags),'typeof')
//  // Filtrer les recettes avec les tags restants
      let remainingTags = ustensilTags.join(',');
//       // console.log(objString)
//       // console.log(typeof(remainingTags),'typeof')
      filterRecipesByUstensilTag(remainingTags, searchValue);
      // removeTag(clickedElementContent, tag, clickedElement, searchValue);
      
    });

    filterRecipesByUstensilTag(ustensilTags.join(','), searchValue);
    // console.log(typeof(clickedElementContent), 'apres filter')
  }
};

// const removeTag = (tagContent, tagElement, clickedElement, searchValue) => {
//   const index = ustensilTags.indexOf(tagContent);
// //   // console.log(index)
//   if (index !== -1) {
//     ustensilTags.splice(index, 1);
//     // console.log(index)
//     // console.log(ustensilTags.splice(index, 1))
//     console.log(ustensilTags)
//     console.log(typeof(ustensilTags), "typeof(ustensilTags")//object typeof(ustensilTags
//   }

//   tagElement.style.display = "none";
//   // clickedElement.classList.remove("disabled-link");
//   // Réactive le lien correspondant dans la liste des ingrédients
//   const ingredientListItem = document.querySelector(`.li-ingredient:contains("${clickedElement}")`);
//   if (ingredientListItem) {
//     ingredientListItem.classList.remove("disabled-link");
//   }
// // console.log(clickedElement)
//   let remainingTags = ustensilTags.join(',');
//   console.log(remainingTags)
//       // console.log(objString)
//       console.log(typeof(remainingTags),'typeof remainingTags')//string
//       filterRecipesByUstensilTag(remainingTags, searchValue);
// };


