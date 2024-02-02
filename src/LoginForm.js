import { useState , useContext} from "react";
const LoginForm = ({onLogin}) => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [currentUser, setCurrentUser] = useState()
  const usersList = JSON.parse(localStorage.getItem('usersList'));
  const handleLogin = () => {
      if(validateLogin(usersList) == true){
      onLogin(currentUser)
      }
      else {
        console.log("Käyttäjän salasana tai sähköposti väärä")
      }
    }

    function validateLogin(usersList) {
      for(let i = 0; i < usersList.length; i++) {
        if(password === usersList[i].password) {
            if(email === usersList[i].email)  {
              setCurrentUser(usersList[i])
              return true;
            }
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