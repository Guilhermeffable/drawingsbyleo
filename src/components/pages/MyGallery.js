import React, { useEffect, Fragment, useState } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import Mosaic from '../gallery/Mosaic';
import MosaicMobile from '../gallery/MosaicMobile';
import Footer from '../layout/Footer';
import { useWindowSize } from '../../hooks/useWindowSize';
import { connect } from 'react-redux';
import { getImages } from '../../actions/galleryActions';
import PropTypes from 'prop-types';
import _ from 'lodash';

const MyGallery = ({ gallery: { urls }, getImages }) => {
    useEffect(() => {
        //initialize parallax
        const parallax = document.querySelectorAll('.parallax');
        M.Parallax.init(parallax);
        // eslint-disable-next-line
    }, []);

    const [images, setImages] = useState([]);

    useEffect(() => {
        getImages();

        if (urls !== null && urls.length !== 0) {
            setImages(urls);
        }
    }, [getImages, images]);

    //split the main array into an array of 4 images arrays
    const imgArray = _.chunk(images, images.length / 8);

    const { width } = useWindowSize();

    const isMobile = width < 600;

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
                            alt='Not found'
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
                            alt='Not found'
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
                <hr className='section-break-5' />
                {isMobile ? (
                    <MosaicMobile imgArray={imgArray} />
                ) : (
                    <Mosaic imgArray={imgArray} />
                )}
                <hr className='section-break-5' />
                <Footer />
            </div>
        </Fragment>
    );
};

const mapStateToProps = (state) => ({
    gallery: state.gallery
});

MyGallery.propTypes = {
    getImages: PropTypes.func.isRequired
};

export default connect(mapStateToProps, { getImages })(MyGallery);
