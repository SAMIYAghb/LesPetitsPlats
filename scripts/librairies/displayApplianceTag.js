
import {filterRecipesByApplianceTag, filterRecipes} from '../page/index.js'

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
  link.classList.add("link-appliance");
  //  Ajoute un gestionnaire d'événements au lien
link.addEventListener("click", (e) => {
  e.preventDefault();
  // console.log(e.target)
  
  selectApplianceTag(appliance, li); // Appel de la fonction pour sélectionner le tag
  filterRecipesByApplianceTag(appliance); // Utilise directement la valeur de l'appliance
  filterRecipes()
});
  li.appendChild(link);
  applianceList.appendChild(li);
};

let applianceTags = [];
export const selectApplianceTag = (clickedElementContent, clickedElement) => {
  // Vérifier si l'élément a déjà été sélectionné
  if (!applianceTags.includes(clickedElementContent)) {
    applianceTags.push(clickedElementContent);
    const tagContainer = document.querySelector(".tag-container");

    // Ajoute chaque tag sélectionné au conteneur de tags
    const tag = document.createElement("div");
    tag.classList.add('tag');
    tagContainer.appendChild(tag);
    // tag.addEventListener('click', () => {
    //   tag.style.display ='none';
    //   clickedElement.classList.remove('disabled-link');
    // });

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
    });
    // Désactive le lien <a> après le clic
    clickedElement.classList.add("disabled-link");
  }
};











