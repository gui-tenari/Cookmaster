const formatRecipe = (data) => {
  const { insertedId, id, name, ingredients, preparation, userId } = data;
  return { 
    name,
    ingredients,
    preparation,
    userId,
    _id: insertedId || id,
    };
  };

module.exports = formatRecipe;