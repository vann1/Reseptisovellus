import { useState , useContext} from "react";
const LoginForm = ({onLogin}) => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const usersList = JSON.parse(localStorage.getItem('usersList'));
  const handleLogin = () => {
    //Loops usersList and checks if theres such a user that matches 
    for(let i = 0; i < usersList.length; i++) {
      if(password === usersList[i].password && email === usersList[i].email) {
        onLogin(usersList[i])
        }
      else {
        console.log("Käyttäjän salasana tai sähköposti väärä")
      } 
    }
}
  return (
    <div>
      <input
        type="text"
        placeholder="Sähköposti"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
       <input
        type="password"
        placeholder="Salasana"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>Kirjaudu</button>
    </div>
  );
};

export default LoginForm;