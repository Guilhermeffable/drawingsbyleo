import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getImages } from '../../actions/galleryActions';
import ImageModal from './ImageModal';
import PropTypes from 'prop-types';
import _ from 'lodash';

const Mosaic = ({ gallery: { urls }, getImages }) => {
    useEffect(() => {
        getImages();

        //eslint-disable-next-line
    }, []);

    const images = [];

    if (urls !== null && urls.length !== 0) {
        urls.map((url, index) => {
            images.push({
                src: url.image,
                thumbnail: url.image,
                width: '1024',
                height: '768',
                id: url.id
            });
        });
    }

    //split the main array into an array of 4 images arrays
    const imgArray = _.chunk(images, 4);

    return (
        <section id='mosaic-section' className='hide-on-small-only'>
            <div className='row-mosaic'>
                {imgArray !== null &&
                    imgArray.map((img, index) => (
                        <div className='column-mosaic' key={index}>
                            {img.map((item) => (
                                <ImageModal url={item.src} key={item.id} />
                            ))}
                        </div>
                    ))}
            </div>
        </section>
    );
};

const mapStateToProps = (state) => ({
    gallery: state.gallery
});

Mosaic.propTypes = {
    getImages: PropTypes.func.isRequired
};

export default connect(mapStateToProps, { getImages })(Mosaic);
