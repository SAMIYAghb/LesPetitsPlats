
import {
  // filterRecipesByTag
  filterRecipesByApplianceTag
  } from '../page/index.js'

  // Définir un ensemble pour stocker les tags désactivés
const disabledApplianceTags = new Set();
export const displayApplianceTag = (appliance) => {
  // Récupère la liste ul où les ingrédients seront ajoutés
  const applianceList = document.getElementById("applianceList");
  // console.log(applianceList);
  const li = document.createElement("li");
  li.classList.add("li-appliance");
  // li.setAttribute("id", "li-appliance");

  // Crée un nouvel élément a
  const link = document.createElement("a");
  link.textContent = `${appliance}`;
  link.setAttribute("href", "#");
   // Vérifier si le tag est désactivé et ajouter la classe en conséquence
   if (disabledApplianceTags.has(appliance)) {
    link.classList.add("disabled-link");

  }
  link.classList.add("link-appliance");
  //  Ajoute un gestionnaire d'événements au lien
link.addEventListener("click", (e) => {
  e.preventDefault();
  e.target.classList.add("disabled-link");
  // Récupère la valeur actuelle de la recherche
  const searchValue = document.getElementById("searchInput").value.trim();
  // Appel de la fonction pour sélectionner le tag et filtrer les recettes
  selectApplianceTag(appliance, li, searchValue);
});

  li.appendChild(link);
  applianceList.appendChild(li);
};

let applianceTags = [];
export const selectApplianceTag = (clickedElementContent, clickedElement, searchValue) => {
  // Vérifier si l'élément a déjà été sélectionné
  if (!applianceTags.includes(clickedElementContent)) {
    applianceTags.push(clickedElementContent);
    disabledApplianceTags.add(clickedElementContent);
    const tagContainer = document.querySelector(".tag-container");

    // Ajoute chaque tag sélectionné au conteneur de tags
    const tag = document.createElement("div");
    tag.classList.add('tag');
    tagContainer.appendChild(tag);


    const newTag = document.createElement("span");
    newTag.textContent = clickedElementContent;
    newTag.classList.add("tag-element");
    tag.appendChild(newTag);

    const closeTag = document.createElement("i");
    closeTag.classList.add("fa-solid", "fa-circle-xmark");
    tag.appendChild(closeTag);
    // / Gestionnaire d'événements pour supprimer le tag
    tag.addEventListener('click', () => {
      tag.style.display = 'none'; // Cache le tag
      clickedElement.classList.remove('disabled-link'); // Réactive le lien
      const index = applianceTags.indexOf(clickedElementContent);
      if (index !== -1) {
        applianceTags.splice(index, 1); // Supprime le tag du tableau
      }
      let remainingTags = applianceTags.join(',');
      filterRecipesByApplianceTag(remainingTags, searchValue )


    });
    // Désactive le lien <a> après le clic
    // clickedElement.classList.add("disabled-link");

    // filterRecipesByApplianceTag(clickedElementContent, searchValue); // Passe la valeur de recherche à la fonction de filtrage
    filterRecipesByApplianceTag(clickedElementContent, searchValue )
  }
};











