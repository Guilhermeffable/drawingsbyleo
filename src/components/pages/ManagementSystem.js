import React, { useEffect } from 'react';
import UploadForm from '../cms/UploadForm';
import ImageItem from '../cms/ImageItem';
import { connect } from 'react-redux';
import { getImages, clearAll } from '../../actions/galleryActions';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const Cms = ({ gallery: { urls, loading }, getImages, clearAll }) => {
    useEffect(() => {
        getImages();

        //eslint-disable-next-line
    }, []);

    const onClearAll = () => {
        clearAll();
    };

    return <></>;
};

const mapStateToProps = (state) => ({
    gallery: state.gallery
});

Cms.propTypes = {
    urls: PropTypes.array,
    loading: PropTypes.bool,
    getImages: PropTypes.func.isRequired
};

export default connect(mapStateToProps, { getImages, clearAll })(Cms);
