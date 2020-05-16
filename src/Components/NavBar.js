import React from 'react'
import "./navbar.css"
import {Link} from 'react-router-dom';

function NavBar() {
    return (
        <div className="nav-bar">
           <h1>Lambda Eats</h1>
            <nav>
                <Link to={`/`}>Home</Link>
                <Link to={`/about`}>About</Link>
                <Link to={`/pizza`}>Order Now</Link>
                <Link to={`/contact`}>Contact Us</Link>
            </nav>
        </div>
    )
}

export default NavBar
