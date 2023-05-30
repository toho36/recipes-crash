const recipes = [
  {
    id: 1,
    name: 'Spaghetti Carbonara',
    author: 'John Smith',
    tags: ['pasta', 'Italian', 'bacon', 'eggs', 'cheese'],
    description:
      'A classic Italian pasta dish made with spaghetti, eggs, cheese, and bacon.',
  },
  {
    id: 2,
    name: 'Chicken Parmesan',
    author: 'Jane Doe',
    tags: ['chicken', 'Italian', 'tomato sauce', 'cheese', 'baked'],
    description:
      'Breaded chicken topped with tomato sauce and cheese, then baked until golden and bubbly.',
  },
  {
    id: 3,
    name: 'Beef Tacos',
    author: 'Michael Johnson',
    tags: ['beef', 'Mexican', 'tacos', 'spicy', 'guacamole'],
    description:
      'Delicious beef tacos with a spicy kick, topped with fresh guacamole.',
  },
  {
    id: 4,
    name: 'Caprese Salad',
    author: 'Sarah Thompson',
    tags: ['salad', 'Italian', 'tomatoes', 'mozzarella', 'basil'],
    description:
      'A refreshing salad made with fresh tomatoes, mozzarella cheese, and basil leaves.',
  },
  {
    id: 5,
    name: 'Teriyaki Salmon',
    author: 'David Miller',
    tags: ['salmon', 'Asian', 'teriyaki', 'grilled', 'healthy'],
    description:
      'Grilled salmon glazed with a delicious teriyaki sauce, perfect for a healthy meal.',
  },
  {
    id: 6,
    name: 'Pumpkin Soup',
    author: 'Emily Brown',
    tags: ['soup', 'pumpkin', 'fall', 'comfort food', 'vegetarian'],
    description:
      'A creamy and comforting soup made with fresh pumpkin, perfect for chilly evenings.',
  },
  {
    id: 7,
    name: 'Margarita Pizza',
    author: 'Robert Wilson',
    tags: ['pizza', 'Italian', 'tomato sauce', 'mozzarella', 'basil'],
    description:
      'Classic pizza topped with tomato sauce, mozzarella cheese, and fresh basil leaves.',
  },
  {
    id: 8,
    name: 'Beef Stir-Fry',
    author: 'Amy Davis',
    tags: ['beef', 'Asian', 'stir-fry', 'vegetables', 'soy sauce'],
    description:
      'Tender beef strips stir-fried with an assortment of vegetables and soy sauce.',
  },
  {
    id: 9,
    name: 'Cauliflower Fried Rice',
    author: 'Kevin Johnson',
    tags: ['cauliflower', 'rice', 'Asian', 'healthy', 'low carb'],
    description:
      'A healthier alternative to traditional fried rice, made with cauliflower instead of rice.',
  },
  {
    id: 10,
    name: 'Chicken Caesar Salad',
    author: 'Jennifer Smith',
    tags: ['salad', 'chicken', 'Caesar dressing', 'croutons', 'Parmesan'],
    description:
      'A classic Caesar salad with grilled chicken, homemade dressing, and crispy croutons.',
  },
  {
    id: 11,
    name: 'Lasagna',
    author: 'Daniel Johnson',
    tags: ['pasta', 'Italian', 'lasagna noodles', 'meat sauce', 'cheese'],
    description:
      'Layers of pasta, meat sauce, and cheese baked to perfection, creating a comforting dish.',
  },
  {
    id: 12,
    name: 'Sushi Rolls',
    author: 'Jessica Lee',
    tags: ['sushi', 'Japanese', 'rice', 'fish', 'nori'],
    description:
      'Homemade sushi rolls with a variety of fillings, perfect for sushi lovers.',
  },
  {
    id: 13,
    name: 'Greek Salad',
    author: 'Andrew Thompson',
    tags: ['salad', 'Greek', 'cucumber', 'feta cheese', 'olives'],
    description:
      'A refreshing salad with crisp cucumber, tangy feta cheese, and briny olives.',
  },
  {
    id: 14,
    name: 'Honey Mustard Chicken',
    author: 'Michelle Brown',
    tags: ['chicken', 'honey mustard', 'baked', 'easy', 'weeknight dinner'],
    description:
      'Tender chicken breasts marinated in a sweet and tangy honey mustard sauce, then baked to perfection.',
  },
  {
    id: 15,
    name: 'Ratatouille',
    author: 'Thomas Wilson',
    tags: ['vegetables', 'French', 'stew', 'healthy', 'vegan'],
    description:
      'A hearty vegetable stew made with an assortment of fresh seasonal vegetables.',
  },
  {
    id: 16,
    name: 'Pancakes',
    author: 'Natalie Davis',
    tags: ['breakfast', 'pancakes', 'maple syrup', 'fluffy', 'brunch'],
    description:
      'Fluffy and delicious pancakes served with warm maple syrup, a perfect breakfast treat.',
  },
  {
    id: 17,
    name: 'Beef Chili',
    author: 'Jacob Lee',
    tags: ['beef', 'chili', 'spicy', 'beans', 'comfort food'],
    description:
      'A hearty and spicy beef chili loaded with beans and flavorful spices.',
  },
  {
    id: 18,
    name: 'Lemon Garlic Shrimp',
    author: 'Sophia Smith',
    tags: ['shrimp', 'seafood', 'lemon', 'garlic', 'quick'],
    description:
      'Tender shrimp sautéed with garlic and lemon juice, creating a zesty and flavorful dish.',
  },
  {
    id: 19,
    name: 'Mushroom Risotto',
    author: 'Oliver Thompson',
    tags: ['risotto', 'Italian', 'mushrooms', 'creamy', 'arborio rice'],
    description:
      'A creamy and comforting risotto made with arborio rice and sautéed mushrooms.',
  },
  {
    id: 20,
    name: 'Chocolate Chip Cookies',
    author: 'Emily Johnson',
    tags: ['cookies', 'chocolate', 'baking', 'dessert', 'sweets'],
    description:
      'Classic homemade chocolate chip cookies that are soft, chewy, and loaded with chocolate chips.',
  },
];
export default recipes;

// // Render the recipes
// function RecipeList() {
//   return (
//     <div>
//       {recipes.map((recipe) => (
//         <div key={recipe.id}>
//           <h2>{recipe.name}</h2>
//           <p>Author: {recipe.author}</p>
//           <p>Tags: {recipe.tags.join(', ')}</p>
//           <p>{recipe.description}</p>
//         </div>
//       ))}
//     </div>
//   );
// }
