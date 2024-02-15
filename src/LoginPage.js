import React, { useState,  } from 'react';
import LoginForm from './LoginForm';
//testi
const LoginPage = () => {

  const handleLogin = (currentUser) => {
    console.log("Kirjautuminen onnistui käyttäjällä: "+ currentUser.username + " " + currentUser.nick + " " + currentUser.email + " " + currentUser.password)
};
  return(
    <div>
      <h1>Kirjaudu</h1>
      <LoginForm onLogin={handleLogin}></LoginForm >
    </div>
  )
}

export {LoginPage};
