import React, { useEffect, Fragment } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import Mosaic from '../gallery/Mosaic';
import MosaicMobile from '../gallery/MosaicMobile';
import Footer from '../layout/Footer';

const MyGallery = () => {
    useEffect(() => {
        const parallax = document.querySelectorAll('.parallax');
        M.Parallax.init(parallax);
        // eslint-disable-next-line
    }, []);

    return (
        <Fragment>
            <div>
                <div className='parallax-container'>
                    <div className='parallax'>
                        <img
                            src={
                                process.env.PUBLIC_URL +
                                '/images/background-text-wrapper.jpg'
                            }
                        />
                    </div>
                </div>
                <div className='section'>
                    <div className='container' id='text-wrapper'>
                        <h1>Gallery</h1>
                    </div>
                </div>
                <div className='parallax-container'>
                    <div className='parallax'>
                        <img
                            src={
                                process.env.PUBLIC_URL +
                                '/images/background-text-wrapper.jpg'
                            }
                        />
                    </div>
                </div>

                <div className='fixed-action-btn '>
                    <a
                        href='#mosaic-section'
                        className='waves-effect waves-circle waves-light btn-floating black btn-large '
                    >
                        <i className='material-icons'>expand_more</i>
                    </a>
                </div>

                <section id='gallery-title'>
                    <div id='text-wrapper-2'>
                        <h1>My drawings</h1>
                    </div>
                </section>
                <hr class='section-break-5' />
                <Mosaic />
                <MosaicMobile />
                <hr class='section-break-5' />
                <Footer />
            </div>
        </Fragment>
    );
};

export default MyGallery;
