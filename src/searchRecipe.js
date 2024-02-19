import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function SearchResults({ recipes }) {
  return (
    <div>
      <h2>Search Results</h2>
      <ul>
        {recipes.map(recipe => (
          <li key={recipe.id}>
            <strong>{recipe.name}</strong>
            <p>Description: {recipe.description}</p>
            <p>Ingredients: {recipe.ingredients.join(", ")}</p>
            <p>Instructions: {recipe.instructions}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

function RecipeSearch() {
  const [nameTerm, setNameTerm] = useState('');
  const [ingredientTerm, setIngredientTerm] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = () => {
    setLoading(true);
    let query = '';
    if (nameTerm) {
      query += `name_like=${nameTerm}`;
    }
    if (ingredientTerm) {
      query += `${nameTerm ? '&' : ''}ingredients_like=${ingredientTerm}`;
    }

    fetch(`http://localhost:3000/recipes?${query}`)
      .then(response => response.json())
      .then(data => {
        setRecipes(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching recipe data:', error);
        setLoading(false);
      });
  };

  return (
    <div>
      <h1>Recipe Search</h1>
      <div>
        <input
          type="text"
          placeholder="Search by recipe name"
          value={nameTerm}
          onChange={(e) => setNameTerm(e.target.value)}
        />
        <input
          type="text"
          placeholder="Search by ingredient"
          value={ingredientTerm}
          onChange={(e) => setIngredientTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {loading ? <div>Loading...</div> : <SearchResults recipes={recipes} />}
    </div>
  );
}

export default RecipeSearch;















