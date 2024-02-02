import React, { useState } from 'react';
import RegisterForm from './RegisterForm';

const RegisterPage = () => {
  const [usersList, setUsersList] = useState([]);
  const handleRegister = (username, password, email, nick) => {
      setUsersList(...usersList,{username: username, password: password, email: email, nick:nick})
      console.log(usersList)
  };
  
  return (
    <div>
      <h1>Rekisteröidy</h1>
      <RegisterForm onRegister={handleRegister} usersList={usersList} />
    </div>
  );
};

export {RegisterPage} ;