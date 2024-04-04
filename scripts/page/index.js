import RecipeFactory from '../factories/RecipeFactory.js';

const getRecipes = async () => {
    const response = await fetch('../../data/recipes.json');
    const data  = await response.json();
    return data;
}
async function displayData(recipes){
    console.log('ggg')
    const recipePromises = recipes.map((data) => {
        const recipe = RecipeFactory.createRecipe(data);
        // console.log(recipe)
        // displayRecipe(recipe); // Afficher chaque recette
        return recipe;
    });
    // console.log(recipes)
    console.log(recipePromises)
    const recipeSection = document.querySelector('.cards-container');
    recipePromises.forEach(element => {
        // const recipe = RecipeFactory.createRecipe(recipes);
        const recipeCardDOM = element.getRecipeCardDom();
        console.log(recipeCardDOM);
        recipeSection.appendChild(recipeCardDOM);
});
    return recipePromises; 
}

// console.log(recipeSection)

// const displayRecipe = (recipe) => {
//     console.log(`Recette: ${recipe.name}`);
//     console.log(`Ingrédients:`);
//     recipe.ingredients.forEach(ingredient => {
//         console.log(`- ${ingredient.quantity} ${ingredient.unit || ''} ${ingredient.ingredient}`);
//     });
//     console.log(`Temps de préparation: ${recipe.time} minutes`);
//     console.log(`Description: ${recipe.description}`);
//     console.log('-----------------------------');
// }
const init = async () => {
    const recipes = await getRecipes();
    // console.log(recipes)
    
    const recipe = await displayData(recipes); // Attendre que displayRecipes termine
    // console.log(recipe, 'from init');
}
 init();