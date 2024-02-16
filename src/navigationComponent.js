import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './styles.css'

const Navigation = () => (
    <nav className="navigation">
      <ul className="navigation-list">
        <li className="navigation-item">
          <Link to="/" className="navigation-link">Home</Link>
        </li>
        <li className="navigation-item">
          <Link to="/RegisterPage" className="navigation-link">Registration</Link>
        </li>
        <li className="navigation-item">
          <Link to="/LoginPage" className="navigation-link">Log in</Link>
        </li>
        <li className="navigation-item">
          <Link to="/NewRecipe" className="navigation-link">New recipe</Link>
        </li>
      </ul>
    </nav>
  );
  

export  {Navigation};