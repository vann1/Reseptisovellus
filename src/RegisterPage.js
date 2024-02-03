import React, { useState, useEffect } from 'react';
import RegisterForm from './RegisterForm';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const navigate = useNavigate();
  let initialUsersList = [];
  if(localStorage.getItem('usersList') !== null) {
     initialUsersList = JSON.parse(localStorage.getItem('usersList')) || []; // for testing login
  } 
  const [usersList, setUsersList] = useState(initialUsersList);
  console.log(usersList)
  useEffect(() => {
    // Tallenna usersList localStorageen aina kun se muuttuu
    localStorage.setItem('usersList', JSON.stringify(usersList));
  }, [usersList]);
  const handleRegister = (username, password, email, nick) => {
      setUsersList(prevUsersList => [
        ...prevUsersList,
        { username, password, email, nick }
      ]);
      setTimeout(()=> navigate('/LoginPage'), 0)
  };

  return (
    <div>
      <h1>Rekisteröidy</h1>
      <RegisterForm onRegister={handleRegister} />
    </div>
  );
};

export {RegisterPage} ;