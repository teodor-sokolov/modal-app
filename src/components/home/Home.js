import React from 'react';
import {Link} from 'react-router-dom';
import './Home.css';

export const Home = () => (
  <div className="home">
    <h1 className="welcome">Welcome!</h1>
    <Link to={'/modal'} style={{textDecoration: 'none'}}>
      <button id="modal-button" className="nav-button">Open Modal</button>
    </Link>
  </div>
);
