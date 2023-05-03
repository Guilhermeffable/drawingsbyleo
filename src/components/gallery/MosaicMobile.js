import React, { useEffect, useState } from 'react';

import ImageModal from './ImageModal';
import PropTypes from 'prop-types';

const MosaicMobile = ({ imgArray }) => {
    return (
        <section id='mosaic-section' className='hide-on-med-and-up'>
            {imgArray !== null &&
                imgArray.map((img, index) => (
                    <div className='img-mobile' key={index}>
                        {img.map((item, index) => (
                            <ImageModal url={item} key={index} />
                        ))}
                    </div>
                ))}
        </section>
    );
};

export default MosaicMobile;
