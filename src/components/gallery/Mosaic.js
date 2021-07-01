import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getImages } from '../../actions/galleryActions';
import Image from './Image';
import PropTypes from 'prop-types';
import _ from 'lodash';

const Mosaic = ({ gallery: { urls }, getImages }) => {
    useEffect(() => {
        getImages();

        // eslint-disable-next-line
    }, []);

    const images = [];

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

    console.log(_.chunk(images, 3));

    const imgArray = _.chunk(images, 4);

    return (
        <section id='mosaic-section'>
            <div className='row-mosaic'>
                {imgArray !== null &&
                    imgArray.map((img) => (
                        <div className='column-mosaic'>
                            {img.map((item) => (
                                <img
                                    className='drawing'
                                    src={item.src}
                                    alt=''
                                />
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
