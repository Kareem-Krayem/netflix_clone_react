import React, { useEffect, useState } from 'react';
import './Navbar.css';

function Navbar() {

    const logo = require('../assets/Netflix_Logo.png');
    const avatar = require('../assets/avatar.png');
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, []);

    return (
        <div className={`navbar ${show && "navbarShow"} `}>
            <img
                className="navbar__logo"
                src={logo}
                alt="Netflix Logo"
            />
            <img
                className="navbar__avatar"
                src={avatar}
                alt="Netflix Avatar"
            />
        </div>
    )
}

export default Navbar;

