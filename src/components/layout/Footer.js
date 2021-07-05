import React from 'react';

const Footer = () => {
    return (
        <footer class='page-footer black'>
            <div class='container'>
                <div class='row'>
                    <div class='col l6 s12'>
                        <h5 class='white-text footer-title'>Contacts</h5>
                        <p class='grey-text text-lighten-4'>
                            You can contact me via my e-mail:
                            <a
                                className='email-footer'
                                href='mailto:leonor.rms01@gmail.com? subject=Drawing Request'
                            >
                                leonor.rms01@gmail.com
                            </a>
                        </p>
                    </div>
                    <div class='col l4 offset-l2 s12'>
                        <h5 class='white-text footer-title'>Social Media</h5>
                        <ul>
                            <li>
                                <a
                                    className='social-media-link'
                                    href='https://www.facebook.com/leonor.solla'
                                    target='_blank'
                                >
                                    <i class='fab fa-facebook'></i>
                                    <span className='social-media-link-icon'>
                                        Facebook
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a
                                    className='social-media-link'
                                    href='https://twitter.com/leonor_solla'
                                    target='_blank'
                                >
                                    <i class='fab fa-twitter'></i>
                                    <span className='social-media-link-icon'>
                                        Twitter
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a
                                    className='social-media-link'
                                    href='https://www.instagram.com/leonor_solla/'
                                    target='_blank'
                                >
                                    <i class='fab fa-instagram'></i>
                                    <span className='social-media-link-icon'>
                                        Instagram
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class='footer-copyright'>
                <div class='container'>
                    © 2021 Copyright Guilherme Luís
                    <a class='grey-text text-lighten-4 right' href='#!'>
                        More Links
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
