import { useEffect, useState } from 'react';
import styled from 'styled-components';

function Menu() {
  const [list, setList] = useState([]);
  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const check = localStorage.getItem('recipes');
    if (check) {
      setList(JSON.parse(check));
      console.log(check);
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=16c7d208496b43848357dc23931ea10c&number=9`
      );
      const data = await api.json();
      setList(data.recipes);
      localStorage.setItem('recipes', JSON.stringify(data.recipes));
    }
  };

  return (
    <Grid>
      {list.map((recipe) => {
        return (
          <Card key={recipe.id}>
            <h4>{recipe.title}</h4>
            <img src={recipe.image} alt={recipe.title} />
            {/* <p>{recipe.tags}</p> */}
          </Card>
        );
      })}
    </Grid>
  );
}

export default Menu;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
`;
const Card = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
  }
  p {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 1rem;
  }
`;
