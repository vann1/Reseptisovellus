import './App.css';
import React, { useState, useEffect } from 'react';
import {Route, Routes, Link, Navigate} from "react-router-dom"
import { RegisterPage } from './RegisterPage';
import { LoginPage } from './LoginPage';
import {Navigation} from './navigationComponent';
import RuokaKategoria from './UusiResepti';
import { HomePage } from './homepage';
function App() {
  //Navigatio komponentti on vaan testausta varten, voi poistaa
  //localStorage.clear()
  return (
    <div>
      <Navigation/>
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
        <Route path='/NewRecipe' element={<RuokaKategoria></RuokaKategoria>}></Route>
        <Route path="/RegisterPage" element={<RegisterPage></RegisterPage>}></Route>
        <Route path="/LoginPage" element={<LoginPage></LoginPage>}></Route>
      </Routes>
    </div>
  );
}

export default App;
