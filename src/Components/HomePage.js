import React from 'react'
import {Link} from 'react-router-dom';
import NavBar from "./NavBar";
import "./homepage.css";

function HomePage() {
    return (
        <div className="Home-Page">
            <NavBar />
            <div className="home-background">
                <div className="slogan">Your Favorite Food Delivered while Coding</div>
               <Link to = {`/pizza`}>
                    <button>Order Now!</button>
                </Link>
            </div>
            
        </div>
    )
}

export default HomePage
