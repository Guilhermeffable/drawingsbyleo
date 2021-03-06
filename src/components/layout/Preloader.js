import React, { Fragment } from 'react';

const Preloader = () => {
    return (
        <Fragment>
            <div class='preloader-wrapper small active'>
                <div class='spinner-layer spinner-red-only'>
                    <div class='circle-clipper left'>
                        <div class='circle'></div>
                    </div>
                    <div class='gap-patch'>
                        <div class='circle'></div>
                    </div>
                    <div class='circle-clipper right'>
                        <div class='circle'></div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Preloader;
