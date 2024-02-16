const express = require('express');
const sql = require('mssql');
const cors = require('cors'); // Import cors module
const bodyParser = require('body-parser'); // Import body-parser

const app = express();

app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json());

const config = {
  user: 'reseptiadmin',
  password: 'P2ssw0rd',
  server: 'reseptidb.database.windows.net',
  database: 'reseptidb',
  options: {
    encrypt: true, // For security reasons
  },
};

// Connect to the database
sql.connect(config, (err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
  } else {
    console.log('Connected to the database');
  }
});

app.post('/api/addRecipe', async (req, res) => {
    const { UserID, RecipeName, RecipeCategory, RecipeGuide, RecipeDesc, Tags } = req.body;
  
    try {
      await sql.connect(config);
      const request = new sql.Request();
      
      const query = `
        INSERT INTO [dbo].[recipes] (userid, recipename, category, instructions, description, tags)
        VALUES (@Userid, @RecipeName, @RecipeCategory, @RecipeGuide, @RecipeDesc, @Tags)
      `;
  
      await request
        .input('Userid', sql.NVarChar, UserID)
        .input('RecipeName', sql.NVarChar, RecipeName)
        .input('RecipeCategory', sql.NVarChar, RecipeCategory)
        .input('RecipeGuide', sql.NVarChar, RecipeGuide)
        .input('RecipeDesc', sql.NVarChar, RecipeDesc)
        .input('Tags', sql.NVarChar, Tags)
        .query(query);
  
      res.status(201).send('Recipe added successfully');
    } catch (error) {
      console.error('Error adding recipe to the database:', error);
      res.status(500).send('Internal Server Error');
    } finally {
      sql.close();
    }
  });
  
  const port = process.env.PORT || 3001;
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });