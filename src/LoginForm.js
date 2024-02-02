import { useState } from "react";
import { RegisterPage } from './RegisterPage';
const LoginForm = ({ usersList }) => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const handleLogin = (email, username) => {
      console.log(usersList)
    }
  return (
    <div>
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
      <button onClick={handleLogin}>Kirjaudu</button>
    </div>
  );
};

export default LoginForm;