import React from 'react';
import {Link} from 'react-router-dom';
import './navbar.css';
 
const Navbar = (props) => {
    return (
        <nav className="navigation">
          <ul className="navigationlist">
              <li className="navigationItem">
                <Link className="navigation__link" to="/">Home</Link>
             </li>
              <li className="navigationItem">
              <Link className="navigation__link" to="/Cart">Cart</Link>
              </li>
          </ul>
        </nav>
    )
}

export default Navbar