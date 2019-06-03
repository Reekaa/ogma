import React from "react";
import { Link } from "react-router-dom";
import './NavBar.css';

const NavBar = () => (
  <header>
  <div className='container'>
  <nav>


    <h4 className='title'>
      <Link to="/home"><span id='ogma'>Ogma</span><i id='book-icon' className="fab fa-leanpub"></i></Link>

    </h4>
    <ul>
    <li>
      <Link to="/flash-cards">Flash Cards</Link>
    </li>

    <li>
      <Link to="/pairs">Pairs</Link>
    </li>

    <li>
      <Link to="/study-notes">Study Notes</Link>
    </li>

  </ul>
  </nav>
  </div>
  </header>

);

export default NavBar;
