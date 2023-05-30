import { useEffect, useState } from 'react';

function Menu() {
  const [list, setList] = useState([]);
  useEffect(() => {
    getRecipes();
  }, []);
  const getRecipes = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=16c7d208496b43848357dc23931ea10c&number=9`
    );
    const data = await api.json();
    // console.log(data);
    setList(data.recipes);
  };

  return (
    <div>
      {list.map((recipe) => {
        return (
          <div>
            <p>{recipe.title}</p>
            <img src={recipe.image} alt={recipe.title} />
          </div>
        );
      })}
    </div>
  );
}

export default Menu;
