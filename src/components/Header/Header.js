import React from 'react';
import logo from '../../logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt=""/>
            <nav>
                <a href="/player">Players</a>
                <a href="/club">Club</a>
                <a href="/fixtures">Fixtures</a>  
            </nav>
        </div>
    );
};

export default Header;