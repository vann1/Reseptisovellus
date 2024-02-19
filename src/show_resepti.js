import React, { useEffect, useState } from 'react';

function SinglePhoto() {
  const [recipeData, setRecipeData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/recipes/3') // Change the URL as needed
      .then(response => response.json())
      .then(data => setRecipeData(data))
      .catch(error => console.error('Error fetching recipe data:', error));
  }, []);

  if (!recipeData) return <div>Loading...</div>;

  const { name, description, ingredients, instructions } = recipeData;

  return (
    <div>
      <div style={styles.container}>
        <div style={styles.photoContainer}>
          <h1>{name}</h1>
          <img 
            src="https://kotiliesi.fi/wp-content/uploads/reseptit/196692-suklaakakku.jpg" 
            alt="Single Photo" 
            style={{ maxWidth: '300px' }} // Restricting the width of the photo
          />
        </div>
        <div style={styles.descriptionContainer}>
          <h2>Description</h2>
          <p>{description}</p>
        </div>
      </div>
      <div style={styles.recipeContainer}>
        <h2>Recipe</h2>
        <ul>
        {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <pre>{instructions}</pre>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#FFA500',
  },
  photoContainer: {
    flex: 1,
    margin: '0 30px', // Adjust margin as needed
    maxWidth: '300px',
    backgroundColor: '#FFA500',
  },
  descriptionContainer: {
    flex: 1,
    margin: '0 30px', // Adjust margin as needed
    backgroundColor: '#D3B460',
    color: 'white',
  },
  recipeContainer: {
    marginTop: '20px', // Adjust margin as needed
    backgroundColor: '#1976D2',
  },
};

export { SinglePhoto };



