import React, { useState } from 'react';

const RegisterForm = ({ onRegister }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [nick, setNick] = useState('');
  const [email, setEmail] = useState('');

  const handleRegister = () => {
    console.clear()
    if(validateAll(username, password, email, nick)){
    onRegister(username, password, nick, email);
    }
    else {
      return false;
    };
  };

  function validatePassword(password) {
    // Check for at least 8 characters
    if (password.length < 8) {
      console.log("Salasanan täytyy olla vähintää 8 merkkiä")
      return false;
    }
  
    // Check for at least one uppercase letter
    let uppercaseRegex = /[A-Z]/;
    if (!uppercaseRegex.test(password)) {
      console.log("Salasanassa täytyy olla vähintään yksi isokirjain")
      return false;
    }
  
    // Check for at least one number
    var numberRegex = /\d/;
    if (!numberRegex.test(password)) {
      console.log("Salasanassa täytyy olla vähintään yksi numero")
      return false;
    }
    
    // All conditions met
    return true;
  }

  function validateUsername(username) {
    if(username === '') {
      console.log("Käyttäjänimi kenttä tyhjä")
      return false;
    }
    return true;
  }
  function validateNick(nick) {
    if(nick === '') {
      console.log("Nimimerkki kenttä tyhjä")
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
  
  return (
    <div>
      <input
        type="text"
        placeholder="Käyttäjänimi"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
       <input
        type="password"
        placeholder="Salasana"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="text"
        placeholder="Sähköposti"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Nimimerkki"
        value={nick}
        onChange={(e) => setNick(e.target.value)}
      />
      <button onClick={handleRegister}>Kirjaudu</button>
    </div>
  );
};

export default RegisterForm;