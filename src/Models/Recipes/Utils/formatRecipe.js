const formatRecipe = (data) => {
  const { insertedId, id, name, ingredients, preparation, userId, image } = data;
  return { 
    name,
    ingredients,
    preparation,
    userId,
    _id: insertedId || id,
    image: image || undefined,
    };
  };

module.exports = formatRecipe;