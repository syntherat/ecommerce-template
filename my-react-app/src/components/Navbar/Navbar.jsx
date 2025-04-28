import React from "react";
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../assets/logoipsum-288.svg';
import cart from '../assets/icons8-shopping-bag-30.png';
import user from '../assets/icons8-user-30.png';

function Navbar() {
    return (
        <div className="navbar">
            <ul className="nav-menu">
                <li><Link to='/shop'>Shop</Link></li>
                <li><Link to='/categories'>Categories</Link></li>
                <li><Link to='/support'>Support</Link></li>
            </ul>
            <div className="nav-logo-wrapper">
                <Link to='/'><div className="nav-logo">
                    <img src={logo} alt="" />
                </div></Link>
            </div>

            <div className="nav-user-cart">
                <Link to='/profile'><img src={user} alt="" /></Link>
                <Link to='/cart'><img src={cart} alt="" /></Link>
                <div className="nav-cart-count">0</div>
            </div>
        </div>
    );
}

export default Navbar;