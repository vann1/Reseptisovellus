import React, { useState } from 'react';
import LoginForm from './LoginForm';

const LoginPage = () => {
  return(
    <div>
      <h1>Kirjaudu</h1>
      <LoginForm></LoginForm>
    </div>
  )
}

export {LoginPage};