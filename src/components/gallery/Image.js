import React from 'react';
import { motion } from 'framer-motion';

const Image = ({ url }) => {
    return (
        <div className='column'>
            <motion.img
                id='teste'
                src={url}
                alt=''
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
            />
        </div>
    );
};

export default Image;
