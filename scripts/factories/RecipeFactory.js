import Recipe from './Recipe.js';

class RecipeFactory {
    static createRecipe(data){
        const { id, image, name, ingredients, time, description} = data;
        // console.log(data)
        // console.log(id, image, name, ingredients, time, description)
        return new Recipe({ id, image, name, ingredients, time, description});
    }
}
export default RecipeFactory;