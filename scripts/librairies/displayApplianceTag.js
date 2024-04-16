

export const displayApplianceTag = (appliance)=>{
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
    // link.addEventListener('click', selectIngredientTag);
    li.appendChild(link);
    applianceList.appendChild(li);
}
let applianceTags = [];
export const selectApplianceTag = (event) => {
    event.preventDefault();
    // console.log(event.target);
    // Récupère l'élément qui a déclenché l'événement
    const clickedElement = event.target; 
    // console.log(clickedElement.textContent);
    const clickedElementContent = clickedElement.textContent;
    // console.log(clickedElementContent)
    applianceTags.push(clickedElementContent);
    // console.log(ingredientTags)


//     const tag = document.querySelector('.tag')
//     const htmlTag = document.querySelector('.tag-element')
    
//     for(const appliance of applianceTags) {
//       // console.log(ingredient);
//       tag.style.display = 'block';
//       htmlTag.textContent = appliance;
//   }
const tagContainer = document.querySelector('.tag-container');

// // Effacer le contenu précédent pour éviter les doublons
tagContainer.innerHTML = '';
// Ajoute chaque tag sélectionné au conteneur de tags
applianceTags.forEach(appliance => {
    const tagElement = document.createElement('div');
    tagElement.classList.add('tag', 'appliance');
    tagElement.textContent = appliance;
    tagContainer.appendChild(tagElement);
});
  

  };
