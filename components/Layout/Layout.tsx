import React from 'react';
import Navbar from 'components/Navbar/Navbar';

const Layout: React.FC<Props> = ({ children }) => {
    return (
        <div>
            <Navbar />
            {children}
            <footer>This is the footer</footer>
        </div>
    )
}

export default Layout