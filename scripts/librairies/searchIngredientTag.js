

// const ingredientInput = document.getElementById("ingredientInput");
// export const searchIngredientTag = (ingredientTag) => {
//   // clearDropdown();
//   const inputValue = deleteAccents(ingredientInput.value)
//     .toLowerCase()
//     .trim()
//     .replace(/\s/g, "");
//   // console.log(inputValue)

//   // Recherche à partir du premier caractère
//   if (inputValue.length > 0) {
//     //Vérifie si un tag correspond à l'entrée de l'utilisateur

//     const matchingTags = transformedArray.filter((tag) =>
//       tag.includes(inputValue)
//     );
//     console.log(matchingTags)
//     // console.log(matchingTags.sort((a, b) => a.localeCompare(b, "fr")));
//     if (matchingTags.length > 0) {
//       clearDropdown();
//       matchingTags.forEach((tag) => displayIngredientTag(tag));
//     // } else if (matchingTags.length = 0){
//     //   filteredIngredientsArray
//     //     .sort((a, b) => a.localeCompare(b, "fr"))
//     //     .forEach((ingredient) => {
//     //       displayIngredientTag(ingredient);
//     //     });
//     // }
//   }else if (inputValue.length = 0){
//       filteredIngredientsArray
//         .sort((a, b) => a.localeCompare(b, "fr"))
//         .forEach((ingredient) => {
//           displayIngredientTag(ingredient);
//         });
//     }
//     }
// };

// //le tableau
// //   // Appliquer les transformations à chaque élément du tableau
// // console.log(ingredientTag)
// const transformedArray = ingredientTag.map((ingredient) => {
//   const trimmedIngredient = deleteAccents(ingredient).toLowerCase().trim();
//   // .replace(/\s/g, "");
//   // console.log(trimmedIngredient);

//   return trimmedIngredient;
// });
// // console.log(transformedArray)

// // Fonction pour effacer tous les éléments du dropdown
// const clearDropdown = () => {
//   const ingredientList = document.getElementById("ingredientList");
//   ingredientList.innerHTML = ""; // Supprime tous les éléments enfants
// };
