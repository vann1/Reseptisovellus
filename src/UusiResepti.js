import React, { useState } from 'react';

const RuokaKategoria = () => {
  //Consti setterit jne
  const [RecipeCategory, setRecipeCategory] = useState(null);
  const [IngAmount, setIngAmount] = useState('');
  const [IngMeasure, setIngMeasure] = useState('option1');
  const [IngName, setIngName] = useState('');
  const [RecipeName, setRecipeName] = useState('');
  const [Ingredients, setIngredients] = useState([]); 
  //Vaihtoehdot kategorialle ja optionsseille
  const Kategoria = ['Alkupala', 'Juoma', 'Välipala', 'Pääruoka', 'Jälkiruoka', 'Leivonnaiset', 'Muu'];
  const options = ['mm', 'tl', 'rkl', 'dl', 'l', 'g', 'kg', 'kpl'];

  //use state changerit
  const CategoryChange = (option) => {
    setRecipeCategory(option);
  };

  const IngAmountChange = (event) => {
    const input = event.target.value.replace(/[^0-9]/g, '');
    setIngAmount(input);
  };

  const IngMeasureChange = (event) => {
    setIngMeasure(event.target.value);
  };

  const IngNameChange = (event) => {
    setIngName(event.target.value);
  };

  const RecipeNameChange = (event) => {
    setRecipeName(event.target.value);
  };

  //Ainesosan lisääminen
  const addIngredient = () => {
    setIngredients([...Ingredients, { IngAmount, IngMeasure, IngName }]);
    setIngAmount('');
    setIngMeasure('option1');
    setIngName('');
  };


  //Heittää consoleen mitä tallentuu, tietokanta yhteys myöhemmin
  const TallennaBtnClick = () => {
    console.log('Reseptin nimi: ', RecipeName);
    console.log('Reseptin kategoria: ', RecipeCategory);
    console.log('Ainesosat: ', Ingredients);
  };

  return (
    <form>
      <label>Reseptin nimi:</label>
      <input type="text" value={RecipeName} onChange={RecipeNameChange} />

      {Kategoria.map((option, index) => (
        <div id="RuokaKategoria" key={index}>
          <input
            type="checkbox"
            id={`checkbox-${index}`}
            value={option}
            checked={RecipeCategory === option}
            onChange={() => CategoryChange(option)}
          />
          <label htmlFor={`checkbox-${index}`}>{option}</label>
        </div>
      ))}

      {Ingredients.map((ingredient, index) => (
        <div key={index} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <div>
            <label>Määrä:</label>
            <input type="text" value={ingredient.IngAmount} readOnly />
          </div>
          <div>
            <label>Mitta:</label>
            <input type="text" value={ingredient.IngMeasure} readOnly />
          </div>
          <div>
            <label>Ainesosa:</label>
            <input type="text" value={ingredient.IngName} readOnly />
          </div>
        </div>
      ))}

      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <div>
          <label>Määrä:</label>
          <input type="text" value={IngAmount} onChange={IngAmountChange} />
        </div>
        <div>
          <select value={IngMeasure} onChange={IngMeasureChange}>
            {options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label>Ainesosa:</label>
          <input type="text" value={IngName} onChange={IngNameChange} />
        </div>
      </div>
      <button type="button" onClick={addIngredient}>
        Lisää Ainesosa
      </button>
      <button type="button" onClick={TallennaBtnClick}>
        Tallenna
      </button>
    </form>
  );
};

export default RuokaKategoria;
