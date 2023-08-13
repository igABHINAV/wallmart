import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../Context.js/ContexT';

const NavBar = () => {
    // ----------------------------------------------------------------------------------------------------

    const navStyles = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#333',
        color: 'white',
        padding: '10px 20px',
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 1000,
    };

    const headingStyles = {
        fontSize: '24px',
        fontWeight: 'bold',
        textDecoration: 'none',
        color: 'white',
    };

    const linkContainerStyles = {
        display: 'flex',
        alignItems: 'center',
    };

    const linkStyles = {
        textDecoration: 'none',
        color: 'white',
        padding: '10px',
        position: 'relative',
        transition: 'color 0.3s',
    };

    const underlineStyles = {
        content: '',
        position: 'absolute',
        width: '100%',
        height: '2px',
        bottom: 0,
        left: 0,
        backgroundColor: '#f0c14b',
        transform: 'scaleX(0)',
        transformOrigin: 'left',
        transition: 'transform 0.3s',
    };
    const pointsStyles = {
        // Add yellow color and additional styles for points
        color: '#f0c14b', // Yellow color
        marginLeft: '10px', // Adjust spacing
        fontSize: '16px', // Adjust font size
        fontWeight: 'bold', // Make it bold
    };
// ----------------------------------------------------------------------------------------------------
    let { points, setpoints } = useContext(AuthContext);
    const handleHover = (event) => {
        event.target.style.color = '#f0c14b';
        event.target.querySelector('.underline').style.transform = 'scaleX(1)';
    };

    const handleLeave = (event) => {
        event.target.style.color = 'white';
        event.target.querySelector('.underline').style.transform = 'scaleX(0)';
    };

    return (
        <nav style={navStyles}>
            <div style={linkContainerStyles}>
                <Link to="/" style={headingStyles}>
                    Walcart
                </Link>
                <div style={{ marginLeft: '20px', ...linkContainerStyles }}>
                    <Link
                        to="/"
                        style={linkStyles}
                        onMouseEnter={handleHover}
                        onMouseLeave={handleLeave}
                    >
                        Home
                        <span className="underline" style={underlineStyles}></span>
                    </Link>
                    <Link
                        to="/getinshop"
                        style={linkStyles}
                        onMouseEnter={handleHover}
                        onMouseLeave={handleLeave}
                    >
                        Buy in Shop
                        <span className="underline" style={underlineStyles}></span>
                    </Link>
                    <Link
                        to="/olx"
                        style={linkStyles}
                        onMouseEnter={handleHover}
                        onMouseLeave={handleLeave}
                    >
                        OLX
                        <span className="underline" style={underlineStyles}></span>
                    </Link>
                    <Link
                        to="/upload"
                        style={linkStyles}
                        onMouseEnter={handleHover}
                        onMouseLeave={handleLeave}
                    >
                        Upload
                        <span className="underline" style={underlineStyles}></span>
                    </Link>
                    <span style={pointsStyles}>{points} points</span>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
