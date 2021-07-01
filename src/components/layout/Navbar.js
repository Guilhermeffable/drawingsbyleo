import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { showHome } from '../../actions/galleryActions';

const Navbar = ({ showHome }) => {
    const onClick = () => {
        showHome();
    };

    return (
        <div className='navbar-fixed'>
            <nav className='white'>
                <div className='nav-wrapper'>
                    <div className='container'>
                        <span
                            className='black-text home-title hide-on-med-and-down'
                            style={{ fontSize: '2rem' }}
                        >
                            Drawings by Leo
                        </span>

                        <ul
                            id='nav-mobile'
                            className='right hide-on-med-and-down'
                        >
                            <li>
                                <Link
                                    to='/'
                                    onClick={onClick}
                                    className='black-text'
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to='/gallery' className='black-text'>
                                    Gallery
                                </Link>
                            </li>
                            <li>
                                <Link to='/about' className='black-text'>
                                    About
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default connect(null, { showHome })(Navbar);
