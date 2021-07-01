import React, { Fragment } from 'react';
import { deleteImage } from '../../actions/galleryActions';
import { connect } from 'react-redux';
import M from 'materialize-css/dist/js/materialize.min.js';

const ImageItem = ({ data, deleteImage }) => {
    const onDelete = () => {
        deleteImage(data);
        M.toast({ html: 'Image deleted.' });
    };

    return (
        <Fragment>
            <img
                width='50px'
                height='50px'
                id='teste'
                className='drawing'
                src={data.image}
                alt=''
            />
            <a href='#!' className='secondary-content'>
                <i
                    className='material-icons'
                    style={{ color: 'rgba(232, 185, 185)' }}
                    onClick={onDelete}
                >
                    delete
                </i>
            </a>
        </Fragment>
    );
};

export default connect(null, { deleteImage })(ImageItem);
