import React, { useEffect } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { hideHome, showHome } from '../../actions/galleryActions';

const Home = ({ hideHome, showHome }) => {
    useEffect(() => {
        showHome();

        const slider = document.querySelectorAll('.slider');
        M.Slider.init(slider, {
            indicators: false,
            duration: 2000,
            interval: 4000
        });
        // eslint-disable-next-line
    }, []);

    //makes isHome boolean false do the Home component can be hidden
    const onClick = () => {
        hideHome();
    };

    //makes isHome boolean true so the Home component can be shown

    return (
        <div id='home_div'>
            <div id='slider' className='slider fullscreen'>
                <ul className='slides'>
                    {/* fazer cada li com um componente para cada imagem gerar um slide */}
                    <li>
                        <img
                            src={
                                process.env.PUBLIC_URL +
                                '/images/desenho_2.jpeg'
                            }
                            alt='Not found'
                        />
                    </li>
                    <li>
                        <img
                            src={
                                process.env.PUBLIC_URL +
                                '/images/desenho_11.jpeg'
                            }
                            alt='Not found'
                        />
                    </li>
                    <li>
                        <img
                            src={
                                process.env.PUBLIC_URL +
                                '/images/desenho_8.jpeg'
                            }
                            alt='Not found'
                        />
                    </li>
                    <li>
                        <img
                            src={
                                process.env.PUBLIC_URL +
                                '/images/desenho_9.jpeg'
                            }
                            alt='Not found'
                        />
                    </li>
                </ul>
            </div>
            <div
                className='valign-wrapper center-align'
                style={{ width: '100%', height: '100%', position: 'absolute' }}
            >
                <div className='home-container container'>
                    <div className='row'>
                        <div className='col s12 m6 offset-m3'>
                            <h1 className='home-title'>Drawings by Leo</h1>
                        </div>
                    </div>
                    <div className='row links-container'>
                        <div className='col m2 offset-m4'>
                            <Link to='/gallery'>
                                <p onClick={onClick} className='box home-links'>
                                    Gallery
                                </p>
                            </Link>
                        </div>
                        <div className='col m2'>
                            <Link to='/about'>
                                <p onClick={onClick} className='box home-links'>
                                    About
                                </p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default connect(null, { hideHome, showHome })(Home);
