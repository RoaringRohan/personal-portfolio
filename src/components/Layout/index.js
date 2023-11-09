import './index.scss';
import React from 'react';
import Nav from '../Nav';

const Layout = ({ children }) => {
    return (
        <div>
            <Nav />
            <div className="content">
                {children}
            </div>
        </div>
    );
};

export default Layout;