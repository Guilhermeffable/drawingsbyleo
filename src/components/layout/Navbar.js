import React, { Fragment, useEffect } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import '../../App.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { showHome } from '../../actions/galleryActions';

const Navbar = ({ showHome }) => {
    useEffect(() => {
        //initialize sidenanv
        const sidenav = document.querySelector('.sidenav');
        M.Sidenav.init(sidenav);
    }, []);

    const onClick = () => {
        //show the Home component only
        showHome();
    };

    return (
        <Fragment>
            <div className='navbar-fixed'>
                <nav className='white'>
                    <div className='nav-wrapper'>
                        <div className='container navbar-container'>
                            <span className='black-text navbar-title'>
                                Drawings by Leo
                            </span>
                            <a
                                href='#'
                                data-target='mobile-demo'
                                className='sidenav-trigger'
                            >
                                <i className='material-icons black-text'>
                                    menu
                                </i>
                            </a>
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

            <ul className='sidenav' id='mobile-demo'>
                <li>
                    <Link to='/' onClick={onClick} className='black-text'>
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
        </Fragment>
    );
};

export default connect(null, { showHome })(Navbar);
