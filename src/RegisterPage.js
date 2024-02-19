import React, { useState, useEffect } from 'react';
import RegisterForm from './RegisterForm';

const RegisterPage = () => {
  // let initialUsersList = [];
  // if(localStorage.getItem('usersList') !== null) {
  //    initialUsersList = JSON.parse(localStorage.getItem('usersList')) || []; // for testing login
  // } 
  // const [usersList, setUsersList] = useState(initialUsersList);
  // useEffect(() => {
  //   // Tallenna usersList localStorageen aina kun se muuttuu
  //   localStorage.setItem('usersList', JSON.stringify(usersList));
  // }, [usersList]);
  const handleRegister = async (name, password, email, username) => {
      // setUsersList(prevUsersList => [
      //   ...prevUsersList,
      //   { name, password, email, username }
      // ]);
      
      try {
        const response = await fetch('http://localhost:3001/api/createUser', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({username, email, password ,name}),
        });
  
        if (response.ok) {
          console.log('User created successfully');
        } else {
          console.error('Failed to create user: ', response.statusText);
        }
      } catch (error) {
        console.error('Error:', error.message);
      }

  };

  return (
    <div>
      <h1>Rekisteröidy</h1>
      <RegisterForm onRegister={handleRegister} />
    </div>
  );
};

export {RegisterPage} ;