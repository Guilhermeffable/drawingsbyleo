import React, { useEffect } from 'react';
import UploadForm from '../cms/UploadForm';
import ImageItem from '../cms/ImageItem';
import { connect } from 'react-redux';
import { getImages, clearAll } from '../../actions/galleryActions';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import {
    AmplifySignIn,
    AmplifyAuthenticator,
    AmplifyGreetings
} from '@aws-amplify/ui-react';

const Cms = ({ gallery: { urls, loading }, getImages, clearAll }) => {
    useEffect(() => {
        getImages();

        //eslint-disable-next-line
    }, []);

    const onClearAll = () => {
        clearAll();
    };

    return (
        <AmplifyAuthenticator>
            <AmplifySignIn slot='sign-in'>
                <div slot='secondary-footer-content'></div>
            </AmplifySignIn>

            <div className='container'>
                <AmplifyGreetings>
                    <div slot='greetings-message' className='container'>
                        Hello Nocas
                    </div>
                </AmplifyGreetings>
                <div
                    className='btn'
                    style={{ backgroundColor: 'rgba(232, 185, 185)' }}
                >
                    <span onClick={onClearAll}>Clear All</span>
                </div>
                <div className='grid-2'>
                    {(!loading && urls === null) ||
                    (urls.length === 0 && urls.length === 0) ? (
                        <h5>No images to show...</h5>
                    ) : (
                        <motion.ul className='collection' layout>
                            {urls !== null &&
                                urls.map((url) => (
                                    <li
                                        key={url.id}
                                        className='collection-item'
                                    >
                                        <div>
                                            <ImageItem data={url} />
                                        </div>
                                    </li>
                                ))}
                        </motion.ul>
                    )}

                    <div>
                        <UploadForm />
                    </div>
                </div>
            </div>
        </AmplifyAuthenticator>
    );
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
