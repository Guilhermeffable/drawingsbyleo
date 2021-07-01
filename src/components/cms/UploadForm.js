import React from 'react';
import { addImage } from '../../actions/galleryActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const UploadForm = ({ gallery: { loading }, addImage }) => {
    const types = ['image/png', 'image/jpeg'];

    const changeHandler = (e) => {
        let selected = e.target.files[0];

        if (selected && types.includes(selected.type)) {
            addImage(selected);
        }
    };

    return (
        <form>
            <div className='file-field input-field'>
                <div
                    className='btn'
                    style={{ backgroundColor: 'rgba(232, 185, 185)' }}
                >
                    <span>Upload File</span>
                    <input type='file' onChange={changeHandler} />
                </div>
                <div className='file-path-wrapper'>
                    <input type='text' className='file-path' />
                </div>
            </div>
        </form>
    );
};

const mapStateToProps = (state) => ({
    gallery: state.gallery
});

UploadForm.propTypes = {
    addImage: PropTypes.func.isRequired
};

export default connect(mapStateToProps, { addImage })(UploadForm);
