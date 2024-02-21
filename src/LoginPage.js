import React, { useState,  } from 'react';
import LoginForm from './LoginForm';
//testiwqeqw
const LoginPage = () => {
  const [virheViesti, setVirheViesti] = useState('');
  const handleLogin = async (email, password) => {
    console.log(localStorage)
    setVirheViesti('');
    try {
      const response = await fetch('http://localhost:3001/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({email, password}),
      });
      const data = await response.json();
      if (response.ok) {
        console.log(data.message)
        const token = data.token;
        console.log(token)
        localStorage.setItem('jwt', token);
      } else {
        setVirheViesti(data.message);
        console.error(data.message);
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
};
  return(
    <div>
      <h1>Kirjaudu</h1>
      <LoginForm virheViesti={virheViesti} onLogin={handleLogin}></LoginForm >
    </div>
  )
}

export {LoginPage};
