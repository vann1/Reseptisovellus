require('dotenv').config()

const express = require('express');
const sql = require('mssql');
const cors = require('cors'); // Import cors module
const bodyParser = require('body-parser'); // Import body-parser
const jwt = require('jsonwebtoken');

const app = express();
const bcrypt = require('bcrypt'); // for password encrypting

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


//NEW RECIPE API
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
  

//Create user api endpoint
  app.post('/api/createUser', async (req, res) => {
    const { username, email, password , name } = req.body;
  
    try {
      //Encrpyting the password
      const hashedPassword = await bcrypt.hash(password, 10);
      //create sql connection
      await sql.connect(config);
      const request = new sql.Request();
      //query for database
      const query = `
        INSERT INTO [dbo].[users] (username, email, password, name)
        VALUES (@username, @email, @password, @name)
      `;
  
      await request
        .input('username', sql.NVarChar, username)
        .input('email', sql.NVarChar, email)
        .input('password', sql.NVarChar, hashedPassword)
        .input('name', sql.NVarChar, name)
        .query(query);
  
      res.status(201).send('User created successfully');
    } catch (error) {
      console.error('Error creating user to the database:', error);
      res.status(500).send('Internal Server Error');
    } finally {
      sql.close();
    }
  });


  //login user api end point
  app.post('/api/login', async  (req, res) => {
    //email and password from frontend http request body
    const { email, password } = req.body;

    try {
      //create sql connection
      await sql.connect(config);
      const request = new sql.Request();
      //query for database
      const query = `SELECT * FROM users WHERE email = @email`;
      //make database request for email
      const result = await request
      .input('email', sql.NVarChar, email)
      .query(query);
      //save user from database
      const user = result.recordset[0];
      //checks if user was actually found from the database
      if (!user) {
        return res.status(400).json({ message: 'Käyttäjää ei löytynyt' });
      }
      if (await bcrypt.compare(password, user.password)) {
        // make jwt for user and return it secret
        console.log(process.env.ACCESS_TOKEN_SECRET)
        const token = jwt.sign({ userId: user.id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' });
        res.json({ message: 'Kirjautuminen onnistui', token });
      }
      else {
        res.status(400).json({ message: 'Virheellinen salasana' });
      }
    } catch (error) {
      console.error('Kirjautumisvirhe:', error);
      res.status(500).json({ message: 'Kirjautumisvirhe' });
    }
  });

  const port = process.env.PORT || 3001;
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });