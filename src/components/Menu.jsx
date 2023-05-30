import { useEffect } from 'react';

function Menu() {
  useEffect(() => {
    getRecipes();
  }, []);
  const getRecipes = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=16c7d208496b43848357dc23931ea10c&number=9`
    );
    const data = await api.json();
    console.log(data);
  };

  return <div>Menu</div>;
}

export default Menu;
