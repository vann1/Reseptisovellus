import React, { useState, useEffect } from 'react';
import RegisterForm from './RegisterForm';

const RegisterPage = () => {
  const initialUsersList = JSON.parse(localStorage.getItem('usersList')) || []; // for testing login
  const [usersList, setUsersList] = useState(initialUsersList);

  useEffect(() => {
    // Tallenna usersList localStorageen aina kun se muuttuu
    localStorage.setItem('usersList', JSON.stringify(usersList));
  }, [usersList]);


  const handleRegister = (username, password, email, nick) => {
      setUsersList(prevUsersList => [
        ...prevUsersList,
        { username, password, email, nick }
      ]);
      console.log(usersList)
  };
  
  return (
    <div>
      <h1>Rekisteröidy</h1>
      <RegisterForm onRegister={handleRegister} />
    </div>
  );
};

export {RegisterPage} ;