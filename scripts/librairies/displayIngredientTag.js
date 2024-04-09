
//   let ingredientTags = [];
//   const selectIngredientTag = (event) => {
//     event.preventDefault();
//     const clickedElement = event.target;
//     const clickedElementContent = clickedElement.textContent;
//     ingredientTags.push(clickedElementContent);
//     console.log(ingredientTags)
//     const tag = document.querySelector('.tag');
//     const htmlTag = document.querySelector('.tag-element');
    
//     for(const ingredient of ingredientTags) {
//         console.log(ingredient, ingredientTags)
//       tag.style.display = 'block';
//       htmlTag.textContent = ingredient;
//     }
//   };

//   function addClickListenersToIngredients() {
//     const links = document.querySelectorAll(".link-ingredient");
//     links.forEach((link) => {
//       link.addEventListener("click", selectIngredientTag);
//     });
//   }
  
//   export default addClickListenersToIngredients ;
  

export const displayIngredientTag = (ingredient)=>{
    // Récupère la liste ul où les ingrédients seront ajoutés
    const ingredientList = document.getElementById("ingredientList");
    // console.log(ingredientList);
    const li = document.createElement("li");
    li.classList.add("li-ingredient");
    // li.setAttribute("id", "li-ingredient");

    // Crée un nouvel élément a
    const link = document.createElement("a");
    link.textContent = `${ingredient}`;
    link.setAttribute("href", "#");
    link.classList.add("link-ingredient");
    // link.addEventListener('click', selectIngredientTag);
    li.appendChild(link);
    ingredientList.appendChild(li);
}
let ingredientTags = [];
export const selectIngredientTag = (event) => {
    event.preventDefault();
    // console.log(event.target);
    // Récupère l'élément qui a déclenché l'événement
    const clickedElement = event.target; 
    // console.log(clickedElement.textContent);
    const clickedElementContent = clickedElement.textContent;
    // console.log(clickedElementContent)
    ingredientTags.push(clickedElementContent);
    // console.log(ingredientTags)

    // const tagContainer = document.querySelector('.tag-container');

    // Effacer le contenu précédent pour éviter les doublons
    // tagContainer.innerHTML = '';

    const tag = document.querySelector('.tag')
    const htmlTag = document.querySelector('.tag-element')
    
    for(const ingredient of ingredientTags) {
      // console.log(ingredient);
      tag.style.display = 'block';
      htmlTag.textContent = ingredient;
  }

  

  };
// export default displayIngredientTag;