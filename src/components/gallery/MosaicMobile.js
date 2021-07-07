import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { getImages } from '../../actions/galleryActions';
import ImageModal from './ImageModal';
import PropTypes from 'prop-types';
import M from 'materialize-css/dist/js/materialize.min.js';
import _ from 'lodash';

const MosaicMobile = ({ gallery: { urls }, getImages }) => {
    useEffect(() => {
        getImages();
    }, []);

    const images = [];

    //iterate through the array of images and push an Image object to the images array
    if (urls !== null && urls.length !== 0) {
        urls.map((url, index) => {
            images.push({
                src: url.image,
                thumbnail: url.image,
                width: '1024',
                height: '768'
            });
        });
    }

    //split the main array into an array of 4 images arrays
    const imgArray = _.chunk(images, 4);

    return (
        <section id='mosaic-section' className='hide-on-med-and-up'>
            {imgArray !== null &&
                imgArray.map((img) => (
                    <div className='img-mobile'>
                        {img.map((item) => (
                            <ImageModal url={item.src} />
                        ))}
                    </div>
                ))}
        </section>
    );
};

const mapStateToProps = (state) => ({
    gallery: state.gallery
});

MosaicMobile.propTypes = {
    getImages: PropTypes.func.isRequired
};

export default connect(mapStateToProps, { getImages })(MosaicMobile);
