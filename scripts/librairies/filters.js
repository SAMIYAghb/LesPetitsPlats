// import { searchRecipe } from "./search.js";
// import { displayData } from "./view.js";
// import { updateSelectBox } from "./updateSelectBox.js";
// import { getRecipes } from "../utils/api.js";

// let filteredRecipes;
// export let selectedIngredientTagsArray = [];
// export let selectedApplianceTagsArray = [];
// export let selectedUstensilTagsArray = [];

// // const recipes = await getRecipes();

// export function filterRecipesByUstensilTag(
//   selectedUstensilTag,
//   searchValue,
//   recipes
// ) {
//   if (!selectedUstensilTag) {
//     displayData(recipes);
//     return;
//   }

//   selectedUstensilTagsArray = selectedUstensilTag.split(",");

//   filteredRecipes = searchRecipe(recipes, searchValue, {
//     selectedIngredientTagsArray,
//     selectedApplianceTagsArray,
//     selectedUstensilTagsArray,
//   });

//   displayData(filteredRecipes);

//   return filteredRecipes;
// }

// export function filterRecipesByUstensilTag(selectedUstensilTag, searchValue) {
//   // console.log(selectedUstensilTag, 'selectedUstensilTag')
//   const recipesSearch = recipes;
//   // console.log(selectedUstensilTag)
//   // console.log(typeof(selectedUstensilTag))
//   // Vérifier si aucun tag n'est sélectionné
//   if (!selectedUstensilTag) {
//     // Retourner toutes les recettes si aucun tag n'est sélectionné
//     displayData(recipesSearch);
//     return;
//   }

//   // selectedUstensilTagsArray.push(selectedUstensilTag);
//   selectedUstensilTagsArray = selectedUstensilTag.split(',');
//   // console.log(selectedUstensilTagsArray)
//   filteredRecipes = searchRecipe(recipes, searchValue, {
//     selectedIngredientTagsArray,
//     selectedApplianceTagsArray,
//     selectedUstensilTagsArray,
//   });
//   //  console.log(filteredRecipes)
//   displayData(filteredRecipes);

// //   updateSelectBox(filteredRecipes, 'ustensil', displayUstensilTag);
// //   updateSelectBox(filteredRecipes, 'appliance', displayApplianceTag);
// //   updateSelectBox(filteredRecipes, 'ingredient', displayIngredientTag);

//   const ustensilTags = updateSelectBox(
//     filteredRecipes,
//     'ustensil',
//     // displayUstensilTag,
//   );
//   // console.log(ustensilTags)
//   const filteredUstensil = ustensilTags.ustensil;

//   filteredUstensilTags.push(filteredUstensil);
//    console.log(filteredUstensilTags,'filteredUstensilTags');
//   // console.log(selectedUstensilTagsArray)
//   // return selectedUstensilTagsArray;
//   // return {
//   //   selectedUstensilTagsArray,
//   //   filteredUstensilTags,
//   // };
// }






















// filter.js

// import { displayData } from './view.js';
// import { searchRecipe } from './search.js';
// import { updateSelectBox } from './updateSelectBox.js';
// import { displayApplianceTag } from './displayApplianceTag.js';
// import { displayIngredientTag } from './ldisplayIngredientTag.js';
// import { displayUstensilTag } from './displayUstensilTag.js';





// let filteredRecipes;

// let selectedIngredientTagsArray = [];
// let selectedApplianceTagsArray = [];
// let selectedUstensilTagsArray = [];
// let filteredIngredientTags = [];
// // let filteredApplianceTags = [];
// let filteredUstensilTags = [];



// export function filterRecipesByUstensilTag(selectedUstensilTag, searchValue, recipes) {
//   const recipesSearch = recipes;

//   if (!selectedUstensilTag) {
//     displayData(recipesSearch);
//     return;
//   }

//   selectedUstensilTagsArray = selectedUstensilTag.split(',');

//   filteredRecipes = searchRecipe(recipes, searchValue, {
//     selectedIngredientTagsArray,
//     selectedApplianceTagsArray,
//     selectedUstensilTagsArray,
//   });

//   displayData(filteredRecipes);
//   updateSelectBox(filteredRecipes, 'ustensil', displayUstensilTag);
//   updateSelectBox(filteredRecipes, 'appliance', displayApplianceTag);
//   updateSelectBox(filteredRecipes, 'ingredient', displayIngredientTag);

//   const ustensilTags = updateSelectBox(
//     filteredRecipes,
//     'ustensil',
//     displayUstensilTag,
//   );

//   const filteredUstensil = ustensilTags.ustensil;

//   filteredUstensilTags.push(filteredUstensil);
//   console.log(filteredUstensilTags, 'filteredUstensilTags');
// }

// export function filterRecipesByApplianceTag(selectedApplianceTag, searchValue, recipes) {
//   const recipesSearch = recipes;

//   if (!selectedApplianceTag) {
//     displayData(recipesSearch);
//     return;
//   }

//  selectedApplianceTagsArray = selectedApplianceTag.split(',');

//   filteredRecipes = searchRecipe(recipes, searchValue, {
//     selectedIngredientTagsArray,
//     selectedApplianceTagsArray,
//     selectedUstensilTagsArray,
//   });

//   displayData(filteredRecipes);
//   updateSelectBox(filteredRecipes, 'ustensil', displayUstensilTag);
//   updateSelectBox(filteredRecipes, 'appliance', displayApplianceTag);
//   updateSelectBox(filteredRecipes, 'ingredient', displayIngredientTag);

//   return selectedApplianceTagsArray;
// }

// export function filterRecipesByIngredientTag(selectedIngredientTag, searchValue, recipes) {
//   const recipesSearch = recipes;

//   if (!selectedIngredientTag) {
//     displayData(recipesSearch);
//     return;
//   }

//   selectedIngredientTagsArray = selectedIngredientTag.split(',');

//   filteredRecipes = searchRecipe(recipes, searchValue, {
//     selectedIngredientTagsArray,
//     selectedApplianceTagsArray,
//     selectedUstensilTagsArray,
//   });

//   displayData(filteredRecipes);
//   updateSelectBox(filteredRecipes, 'ustensil', displayUstensilTag);
//   updateSelectBox(filteredRecipes, 'appliance', displayApplianceTag);
//   updateSelectBox(filteredRecipes, 'ingredient', displayIngredientTag);

//   const ingredientTags = updateSelectBox(
//     filteredRecipes,
//     'ingredient',
//     displayIngredientTag,
//   );

//   const filteredIngredient = ingredientTags.ingredient;

//   filteredIngredientTags.push(filteredIngredient);
//   return {
//     selectedIngredientTagsArray,
//     filteredIngredientTags,
//   };
// }
