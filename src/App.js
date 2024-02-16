import './App.css';
import {Route, Routes, Link} from "react-router-dom"
import { RegisterPage } from './RegisterPage';
import { LoginPage } from './LoginPage';
import {Navigation} from './navigationComponent';
import RuokaKategoria from './UusiResepti';
function App() {
  //Navigatio komponentti on vaan testausta varten, voi poistaa
  return (
    <div>
      <Navigation/>
      <Routes>
        <Route path='/NewRecipe' element={<RuokaKategoria></RuokaKategoria>}></Route>
        <Route path="/RegisterPage" element={<RegisterPage></RegisterPage>}></Route>
        <Route path="/LoginPage" element={<LoginPage></LoginPage>}></Route>
      </Routes>
    </div>
  );
}

export default App;
