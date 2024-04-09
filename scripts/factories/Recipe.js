// class Recipe {
//   constructor({ id, image, name, ingredients, time, description }) {
//     // console.log(id, image, name, ingredients, time, description)
//       this.id = id;
//       this.image = image;
//       this.name = name;
//       // this.servings = servings;
//       this.ingredients = ingredients;
//       this.time = time;
//       this.description = description;
//       // this.appliance = appliance;
//       // this.ustensils = ustensils;

//       // console.log('ID:', this.id);
//       // console.log('Image:', this.image);
//       // console.log('Nom:', this.name);
//       // // console.log('Portions:', this.servings);
//       // console.log('Ingrédients:', this.ingredients);
//       // console.log('Temps:', this.time);
//       // console.log('Description:', this.description);
//       // console.log('Appareil:', this.appliance);
//       // console.log('Ustensiles:', this.ustensils);
//   }

//   getName(){
//       return `${this.name}`;
//   }

//   getIngredients(){
//       // Itérer à travers le tableau des ingrédients et retourner une chaîne de caractères formatée
//       return this.ingredients.map(ingredient => {
//           const { ingredient: name, quantity, unit } = ingredient;
//           return `${name}: ${quantity}${unit ? ' ' + unit : ''}`;
//       }).join(', ');
//   }

//   getTime(){
//       return `${this.time} min`;
//   }

//   getDescription(){
//       return `${this.description}`;
//   }

//   getRecipePath() {
//     return `assets/recette/${this.image}`;
//   }

  // getRecipeCardDom() {
  //     const article = document.createElement('div');
  //     article.classList.add('row');
  //     article.innerHTML =`
  //     <div class=" col-sm-6 col-md-4">
  //         <div class="card rounded-5 border-0">
  //           <img class="img-card rounded-top-5" src="${this.getRecipePath()}" alt="${this.image}">
  //           <div class="minutes">${this.time} min</div>
  //           <div class="card-content py-5 px-4">
  //             <h3 class="pb-2">${this.name}</h3>
  //             <p class="text-uppercase second-color">Recette</p>
  //             <p>${this.description}</p>
  //             <p class="text-uppercase second-color">Ingrédients</p>
  //             <div class="row">
  //               <div class="col-md-6">
  //                 ${this.getIngredients()}
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     `;
  //     return article;
  // }
//   getRecipeCardDom() {
//     const column = document.createElement('div');
//     column.classList.add('col-sm-6', 'col-md-4');
    
//     const card = document.createElement('div');
//     card.classList.add('card', 'rounded-5', 'border-0');
    
//     const img = document.createElement('img');
//     img.classList.add('img-card', 'rounded-top-5');
//     img.src = this.getRecipePath();
//     img.alt = this.image;
    
//     const minutes = document.createElement('div');
//     minutes.classList.add('minutes');
//     minutes.textContent = `${this.time} min`;
    
//     const cardContent = document.createElement('div');
//     cardContent.classList.add('card-content', 'py-5', 'px-4');
    
//     const title = document.createElement('h3');
//     title.classList.add('pb-2');
//     title.textContent = this.name;
    
//     const recipeLabel = document.createElement('p');
//     recipeLabel.classList.add('text-uppercase', 'second-color');
//     recipeLabel.textContent = 'Recette';
    
//     const description = document.createElement('p');
//     description.textContent = this.description;
    
//     const ingredientsLabel = document.createElement('p');
//     ingredientsLabel.classList.add('text-uppercase', 'second-color');
//     ingredientsLabel.textContent = 'Ingrédients';
    
//     const ingredientsDiv = document.createElement('div');
//     ingredientsDiv.classList.add('row');
    
//     const ingredientsCol = document.createElement('div');
//     ingredientsCol.classList.add('col-md-6');
//     ingredientsCol.innerHTML = this.getIngredients();
    
//     ingredientsDiv.appendChild(ingredientsCol);
    
//     cardContent.appendChild(title);
//     cardContent.appendChild(recipeLabel);
//     cardContent.appendChild(description);
//     cardContent.appendChild(ingredientsLabel);
//     cardContent.appendChild(ingredientsDiv);
    
//     card.appendChild(img);
//     card.appendChild(minutes);
//     card.appendChild(cardContent);
    
//     column.appendChild(card);
    
//     return column;
// }


// getRecipeCardDom() {
//   const column = document.createElement('div');
//   column.classList.add('col-sm-6', 'col-md-4');
  
//   const card = document.createElement('div');
//   card.classList.add('card', 'rounded-5', 'border-0');
  
//   const img = document.createElement('img');
//   img.classList.add('img-card', 'rounded-top-5');
//   img.src = this.getRecipePath();
//   img.alt = this.image;
  
//   const minutes = document.createElement('div');
//   minutes.classList.add('minutes');
//   minutes.textContent = `${this.time} min`;
  
//   const cardContent = document.createElement('div');
//   cardContent.classList.add('card-content', 'py-5', 'px-4');
  
//   const title = document.createElement('h3');
//   title.classList.add('pb-2');
//   title.textContent = this.name;
  
//   const recipeLabel = document.createElement('p');
//   recipeLabel.classList.add('text-uppercase', 'second-color');
//   recipeLabel.textContent = 'Recette';
  
// //   const descriptionWordsCount = 31; // Nombre de mots dans la description fournie

// // // Calcul du nombre de mots dans la description
// // const descriptionContent = this.description.split(' ');
// // const truncatedDescriptionContent = descriptionContent.slice(0, descriptionWordsCount).join(' ');

// //   const description = document.createElement('p');
// //   // description.textContent = this.description;
// //   description.textContent = truncatedDescriptionContent;
// const maxCharsPerLine = 45; // Nombre maximal de caractères par ligne
// const maxLines = 4; // Nombre maximal de lignes dans la description

// // Diviser la description en lignes en fonction du nombre maximal de caractères par ligne
// const descriptionLines = this.description.match(new RegExp(`.{1,${maxCharsPerLine}}`, 'g'));

// // Limiter le nombre de lignes à la valeur maximale
// const truncatedDescriptionLines = descriptionLines.slice(0, maxLines);

// // Concaténer les lignes pour former la description tronquée
// const truncatedDescriptionContent = truncatedDescriptionLines.join('<br>');

// const description = document.createElement('p');
// description.innerHTML = truncatedDescriptionContent;

  
//   const ingredientsLabel = document.createElement('p');
//   ingredientsLabel.classList.add('text-uppercase', 'second-color');
//   ingredientsLabel.textContent = 'Ingrédients';
  
//   const ingredientsDiv = document.createElement('div');
//   ingredientsDiv.classList.add('row');
  
//   const ingredientsCol1 = document.createElement('div');
//   ingredientsCol1.classList.add('col-md-6'); // Première colonne
  
//   const ingredientsCol2 = document.createElement('div');
//   ingredientsCol2.classList.add('col-md-6'); // Deuxième colonne
  
//   // Création de la liste des ingrédients en utilisant ul et li
//   const ingredientsList = document.createElement('ul');
  
  
//   // Ajout des ingrédients à la liste
//   this.ingredients.forEach((ingredient, index) => {
//     const ingredientItem = document.createElement('li');
//     ingredientItem.classList.add('list-unstyled');
//     const unit = ingredient.unit === "grammes" ? "g" : ingredient.unit;
//     const quantity = ingredient.quantity !== undefined ? ingredient.quantity : '-';
//     const quantityHTML = `<span class="ingredient-quantity">${quantity}</span>`;
//     const unitHTML = unit ? `<span class="ingredient-unit">${unit}</span> `: "";
//     ingredientItem.innerHTML = `${ingredient.ingredient}:<br> ${quantityHTML}${unitHTML}`;
    
//     // Alternance des colonnes pour chaque ingrédient
//     if (index % 2 === 0) {
//         ingredientsCol2.appendChild(ingredientItem); // Colonne de gauche
//     } else {
//         ingredientsCol1.appendChild(ingredientItem); // Colonne de droite
//     }
// });
  
//   // Ajout de la liste d'ingrédients à chaque colonne
//   ingredientsCol1.appendChild(ingredientsList.cloneNode(true));
//   ingredientsCol2.appendChild(ingredientsList.cloneNode(true));
  
//   // Ajout des colonnes à la ligne d'ingrédients (inversement de l'ordre)
//   ingredientsDiv.appendChild(ingredientsCol2); // Ajout de la colonne de droite en premier
//   ingredientsDiv.appendChild(ingredientsCol1); // Ajout de la colonne de gauche en deuxième
  
//   cardContent.appendChild(title);
//   cardContent.appendChild(recipeLabel);
//   cardContent.appendChild(description);
//   cardContent.appendChild(ingredientsLabel);
//   cardContent.appendChild(ingredientsDiv);
  
//   card.appendChild(img);
//   card.appendChild(minutes);
//   card.appendChild(cardContent);
  
//   column.appendChild(card);
  
//   return column;
// }







// }
// export default Recipe;
