import './App.css';
import {Route, Routes, Link} from "react-router-dom"
import { RegisterPage } from './RegisterPage';
import { LoginPage } from './LoginPage';
import {Navigation} from './navigationComponent';
function App() {
  return (
    <div>
      <Navigation/>
      <Routes>
        <Route path="/RegisterPage" element={<RegisterPage></RegisterPage>}></Route>
        <Route path="/LoginPage" element={<LoginPage></LoginPage>}></Route>
      </Routes>
    </div>
  );
}

export default App;
