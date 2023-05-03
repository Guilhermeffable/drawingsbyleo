import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getImages } from '../../actions/galleryActions';
import ImageModal from './ImageModal';
import PropTypes from 'prop-types';
import _, { get } from 'lodash';

const Mosaic = ({ imgArray }) => {
    return (
        <section id='mosaic-section' className='hide-on-small-only'>
            <div className='row-mosaic'>
                {imgArray !== null &&
                    imgArray.map((img, index) => (
                        <div className='column-mosaic' key={index}>
                            {img.map((item, index) => (
                                <ImageModal url={item} key={index} />
                            ))}
                        </div>
                    ))}
            </div>
        </section>
    );
};

export default Mosaic;
