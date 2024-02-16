import React, { useState } from 'react';
import './styles.css'
const RegisterForm = ({ onRegister }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [nick, setNick] = useState('');
  const [email, setEmail] = useState('');
  const [errorMessages, setErrorMessages] = useState({});

  const handleRegister = () => {
    console.clear()
    setErrorMessages({});
    if(validateAll(username, password, email, nick)){
    onRegister(username, password, email, nick);
    }
    else {
      return false;
    };
  };

  function validatePassword(password) {
    // Check for at least 8 characters
    if (password.length < 8) {
      setErrorMessages((prevState) => ({
        ...prevState,
        password: "Salasanan täytyy olla vähintään 8 merkkiä",
      }));
      console.log("Salasanan täytyy olla vähintää 8 merkkiä")
      return false;
    }
  
    // Check for at least one uppercase letter
    let uppercaseRegex = /[A-Z]/;
    if (!uppercaseRegex.test(password)) {
      setErrorMessages((prevState) => ({
        ...prevState,
        password: "Salasanassa täytyy olla vähintään yksi isokirjain",
      }));
      console.log("Salasanassa täytyy olla vähintään yksi isokirjain")
      return false;
    }
  
    // Check for at least one number
    var numberRegex = /\d/;
    if (!numberRegex.test(password)) {
      setErrorMessages((prevState) => ({
        ...prevState,
        password: "Salasanassa täytyy olla vähintään yksi numero",
      }));
      console.log("Salasanassa täytyy olla vähintään yksi numero")
      return false;
    }
    
    // All conditions met
    return true;
  }

  function validateUsername(username) {
    if(username === '') {
      console.log("Käyttäjänimi kenttä tyhjä")
      setErrorMessages((prevState) => ({
        ...prevState,
        username: "Käyttäjänimi kenttä tyhjä",
      }));
      return false;
    }
    return true;
  }
  function validateNick(nick) {
    if(nick === '') {
      console.log("Nimimerkki kenttä tyhjä")
      setErrorMessages((prevState) => ({
        ...prevState,
        nick: "Nimimerkki kenttä tyhjä",
      }));
      return false;
    }
    return true;
  }
  function validateEmail(email) {
    // Regular expression pattern for a basic email validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    // Test if the provided email matches the pattern
    var isValid = emailRegex.test(email);
    if(!isValid) {
      console.log("Sähköposti ei ole oikein kirjoitettu")
      setErrorMessages((prevState) => ({
        ...prevState,
        email: "Sähköposti ei ole oikein kirjoitettu",
      }));
      return false;
    }
    return isValid;
  } 

  function validateAll(username, password, email, nick) {
    const isUsernameValid = validateUsername(username);
    const isPasswordValid = validatePassword(password);
    const isEmailValid = validateEmail(email);
    const isNickValid = validateNick(nick);
  
    // Check if all validations are true
    if (isPasswordValid && isUsernameValid && isNickValid && isEmailValid) {
      return true;
    } else {
      return false;
    }
  }

  //tyhjentää localstoragen
  function tyhjennaTestiKayttajat() {
    localStorage.clear();
  }
  
  return (
    <div>
      <input
        type="text"
        placeholder="Käyttäjänimi"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="regInput"
      />
      {errorMessages.username && (
        <p className="pError">{errorMessages.username}</p>
      )}
            <br></br>
       <input
        type="password"
        placeholder="Salasana"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="regInput"
      />
      {errorMessages.password && (
        <p className="pError">{errorMessages.password}</p>
      )}
            <br></br>
      <input
        type="text"
        placeholder="Sähköposti"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="regInput"
      />
      {errorMessages.email && <span className="infoText">?</span>}
    {errorMessages.email && <p className="pError">{errorMessages.email}</p>}
    <br></br>
      <input
        type="text"
        placeholder="Nimimerkki"
        value={nick}
        onChange={(e) => setNick(e.target.value)}
        className="regInput"
      />
      {errorMessages.nick && <p className="pError">{errorMessages.nick}</p>}
      <br></br>
      <button onClick={handleRegister}>Luo käyttäjä</button>
      <br></br>
      <br></br>
      <br></br>
      <button onClick={tyhjennaTestiKayttajat}>Tyhjennä localstorage testi käyttäjät</button>
    </div>
  );
};

export default RegisterForm;