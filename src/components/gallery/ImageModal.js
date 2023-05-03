import React, { useState } from 'react';
import Modal from '@material-ui/core/Modal';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Fade from '@material-ui/core/Fade';
import Backdrop from '@material-ui/core/Backdrop';
import { motion } from 'framer-motion';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: 'none',
        outline: 0,
        boxShadow: theme.shadows[5]
    }
}));

const ImageModal = ({ url }) => {
    const [open, setOpen] = useState(false);
    const classes = useStyles();

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <motion.img
                src={url}
                onClick={handleOpen}
                className='drawing hoverable'
                alt='Not found'
                whileHover={{ scale: 1.05 }}
            />
            <Modal
                open={open}
                onClose={handleClose}
                className={classes.modal}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{ timeout: 500 }}
            >
                <Fade in={open}>
                    <img
                        src={url}
                        className={`modal-img ${classes.paper}`}
                        alt='Not found'
                    />
                </Fade>
            </Modal>
        </div>
    );
};

ImageModal.propTypes = {
    url: PropTypes.string.isRequired
};

export default ImageModal;
