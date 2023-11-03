import './index.scss';
import { NavLink } from 'react-router-dom';

const Nav = () => {

    return (
        <div className="App">
            <div className="navbar">
                <ul>
                    <li><NavLink exact to="/experience">Experience</NavLink></li>
                    <li><NavLink exact to="/about">About</NavLink></li>
                    <li><NavLink exact to="/hobbies">Hobbies</NavLink></li>
                    <li><NavLink exact to="/contact">Contact</NavLink></li>
                </ul>
            </div>
        </div>
    );
}

export default Nav;