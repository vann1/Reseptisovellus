import React, { useEffect, useState } from 'react';

function SinglePhoto() {
  const description = "A chocolate cake is a delicious dessert made with rich chocolate, flour, sugar, eggs, and other ingredients. It's often layered with chocolate icing or frosting and can be decorated with additional toppings like chocolate shavings or berries.";

  const ingredients = [
    { name: 'all-purpose flour', quantity: '2 cups' },
    { name: 'granulated sugar', quantity: '1 3/4 cups' },
    { name: 'unsweetened cocoa powder', quantity: '3/4 cup' },
    { name: 'baking powder', quantity: '1 1/2 teaspoons' },
    { name: 'baking soda', quantity: '1 1/2 teaspoons' },
    { name: 'salt', quantity: '1 teaspoon' },
    { name: 'large eggs', quantity: '2' },
    { name: 'milk', quantity: '1 cup' },
    { name: 'vegetable oil', quantity: '1/2 cup' },
    { name: 'vanilla extract', quantity: '2 teaspoons' },
    { name: 'boiling water', quantity: '1 cup' },
  ];

  const instructions = `
    Instructions:
    1. Preheat oven to 350°F (175°C). Grease and flour two 9-inch round baking pans.
    2. In a large bowl, sift together flour, sugar, cocoa powder, baking powder, baking soda, and salt.
    3. Add eggs, milk, oil, and vanilla extract to the dry ingredients and beat on medium speed for 2 minutes.
    4. Stir in boiling water until the batter is well combined. The batter will be thin.
    5. Pour the batter evenly into the prepared pans.
    6. Bake for 30 to 35 minutes, or until a toothpick inserted into the center comes out clean.
    7. Remove cakes from oven and let cool in pans for 10 minutes. Then transfer to wire racks to cool completely.
    8. Once cooled, frost with your favorite chocolate frosting and enjoy!
  `;

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



