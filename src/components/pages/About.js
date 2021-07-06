import React from 'react';
import { Fragment } from 'react';
import Footer from '../layout/Footer';

const About = () => {
    return (
        <Fragment>
            <div className='container'>
                <h2 className='about-title'>About Me</h2>
                <div className='row about-section'>
                    <div className='col s6'>
                        <img
                            className='about-picture'
                            src={
                                process.env.PUBLIC_URL +
                                '/images/about-picture.jpg'
                            }
                        />
                    </div>
                    <div className='col s6 '>
                        <h5 className='about-subtitle'>Who am I?</h5>
                        <p className='about-description'>
                            I'm Leonor, a Pharmaceutical Sciences student from
                            Leiria, Portugal.
                        </p>
                    </div>
                </div>
                <div className='row about-section'>
                    <div className='col s6'>
                        <h5 className='about-subtitle'>
                            My passion for drawing
                        </h5>
                        <p className='about-description'>
                            Ever since I was little I always enjoyed drawing, I
                            even considered pursuing it as a career. So I
                            decided to build this blog to share with you some of
                            my drawings.
                        </p>
                    </div>
                    <div className='col s6 '>
                        <img
                            className='about-picture'
                            src={
                                process.env.PUBLIC_URL +
                                '/images/desenho_2.jpeg'
                            }
                        />
                    </div>
                </div>
                <div className='row about-section'>
                    <div className='col s6'>
                        <img
                            className='about-picture'
                            src={
                                process.env.PUBLIC_URL +
                                '/images/desenho_12.jpeg'
                            }
                        />
                    </div>
                    <div className='col s6 '>
                        <h5 className='about-subtitle'>
                            What can you do to contact me?
                        </h5>
                        <p className='about-description'>
                            You can always reach me through my social media with
                            requests or you can send me a photo and I'll send
                            you a drawing version of that photo.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    );
};

export default About;
