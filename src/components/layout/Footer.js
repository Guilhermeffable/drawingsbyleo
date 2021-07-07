import React from 'react';

const Footer = () => {
    return (
        <footer className='page-footer black'>
            <div className='container'>
                <div className='row'>
                    <div className='col l6 s12 hide-on-small-only'>
                        <h5 className='white-text footer-title'>Contacts</h5>
                        <p className='grey-text text-lighten-4'>
                            You can contact me via my e-mail:
                            <a
                                className='email-footer'
                                href='mailto:leonor.rms01@gmail.com? subject=Drawing Request'
                            >
                                leonor.rms01@gmail.com
                            </a>
                        </p>
                    </div>
                    <div className='col l4 offset-l2 s12'>
                        <h5 className='white-text footer-title'>
                            Social Media
                        </h5>
                        <ul className='social-media-footer'>
                            <li>
                                <a
                                    className='social-media-link'
                                    href='https://www.facebook.com/leonor.solla'
                                >
                                    <i className='fab fa-facebook'></i>
                                    <span className='social-media-link-icon'>
                                        Facebook
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a
                                    className='social-media-link'
                                    href='https://twitter.com/leonor_solla'
                                >
                                    <i className='fab fa-twitter'></i>
                                    <span className='social-media-link-icon'>
                                        Twitter
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a
                                    className='social-media-link'
                                    href='https://www.instagram.com/leonor_solla/'
                                >
                                    <i className='fab fa-instagram'></i>
                                    <span className='social-media-link-icon'>
                                        Instagram
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='footer-copyright'>
                <div className='container'>
                    © 2021 Copyright Guilherme Luís
                    <a className='grey-text text-lighten-4 right' href='#!'>
                        More Links
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
