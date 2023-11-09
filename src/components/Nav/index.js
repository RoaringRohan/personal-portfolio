import './index.scss';
import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';

const Nav = () => {
    const [isNavVisible, setIsNavVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsNavVisible(false);
            } else {
                setIsNavVisible(true);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`navbar ${isNavVisible ? '' : 'hidden'}`}>
            <ul>
                <li><NavLink exact to="/experience">Experience</NavLink></li>
                <li><NavLink exact to="/about">About</NavLink></li>
                <li><NavLink exact to="/hobbies">Hobbies</NavLink></li>
                <li><NavLink exact to="/contact">Contact</NavLink></li>
            </ul>
            <div className="logo-container">
                <Link to="/">
                    <img src={Logo} alt="Logo" className="logo" />
                </Link>
            </div>
        </div>
    );
}

export default Nav;