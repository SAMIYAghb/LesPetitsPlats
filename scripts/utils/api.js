export const getRecipes = async () => {
  const response = await fetch('../../data/recipes.json');
  const data = await response.json();
  return data;
};

// export const recipes = await getRecipes();

export const filterUniqueData = (recipes, property) => {
  const uniqueData = new Set();

  recipes.forEach((recipe) => {
    const data = recipe[property];

    if (Array.isArray(data)) {
      data.forEach((item) => {
        if (typeof item === 'object' && Object.prototype.hasOwnProperty.call(item, 'ingredient')) {
          uniqueData.add(item.ingredient.toLowerCase());
        } else if (typeof item === 'string') {
          uniqueData.add(item.toLowerCase());
        }
      });
    } else if (typeof data === 'string') {
      uniqueData.add(data.toLowerCase());
    }
  });

  return Array.from(uniqueData);
};
