
import React, { useState } from 'react';

const RuokaKategoria = () => {
  //Constit fieldeille
  const [selectedOption, setSelectedOption] = useState(null);
  const [AOMaara, setAOMaara] = useState('');
  const [AOMitta, setAOMitta] = useState('option1');
  const [AONimi, setAONimi] = useState('');
  //Reseptille kategoriat.
  const Kategoria = ['Alkupala','Juoma','Välipala','Pääruoka','Jälkiruoka','Leivonnaiset','Muu'];

  //Reseptin ainesosan määrän luokitus
  const options = ['mm','tl', 'rkl', 'dl','l','g','kg','kpl'];

  //Kategorian valinta checkbox change
  const KategoriaChange = (option) => {
    setSelectedOption(option);
  };

  //Ainesosan määrä numero
  const AOMaaraChange = (event) => {
    const input = event.target.value.replace(/[^0-9]/g, ''); // Allow only numbers
    setAOMaara(input);
  };

  //Ainesosan määrä tl, rkl, dl, kkp, mm, l, g, kg, kpl jne
  const AOMittaChange = (event) => {
    setAOMitta(event.target.value);
  };

  //Aineasosan nimi
  const AONimiChange = (event) => {
    setAONimi(event.target.value);
  };

  //Nappi tällä hetkellä laittaa fieldejen tiedot console.log toiminnallisuus myöhemmin
  const TallennaBtnClick = () => {
    console.log('Reseptin kategoria: ',selectedOption);
    console.log('Reseptin ainesosan määrä: ',AOMaara);
    console.log('Reseptin ainesosan määrän kuvaus: ', AOMitta);
    console.log('Reseptin ainesosan nimi', AONimi);
  };

  return (
    <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
      {Kategoria.map((option, index) => (
        <div id='RuokaKategoria'key={index}>
          <input
            type="checkbox"
            id={`checkbox-${index}`}
            value={option}
            checked={selectedOption === option}
            onChange={() => KategoriaChange(option)}
          />
          <label htmlFor={`checkbox-${index}`}>{option}</label>
        </div>
      ))}
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
      <div>
        <label>Määrä:</label>
        <input
          type="text"
          value={AOMaara}
          onChange={AOMaaraChange}
        />
      </div>
      <div>
        <select value={AOMitta} onChange={AOMittaChange}>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label>Ainesosa:</label>
        <input
          type="text"
          value={AONimi}
          onChange={AONimiChange}
        />
      </div>
      </div>
      <button type="button" onClick={TallennaBtnClick}>
        Tallenna
      </button>
    </form>
  );
};

export default RuokaKategoria;
