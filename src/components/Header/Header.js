import React from 'react';
import logo from '../../images/udemylogo.png';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
const Header = () => {
    return (
        <div className="header">
        <nav>
                <img className="navImg" href="/logo" src={logo} alt=""/>    
                <a href="/Categories">Categories</a>
                <input type="text" id="input" placeholder="Searching for anything" title="Searching for anything"></input>
                <a href="/Udemy for business">Udemy for business</a>
                <a href="/Teach on Udemy">Teach on Udemy </a>
    <a href="/Shoping Chart"> <FontAwesomeIcon icon={faShoppingCart} /></a>
                <a href="/My Courses">My Courses</a>
                <a className="IdName" href="/Id Name">ID</a>
        </nav>

        </div>
    );
};

export default Header;