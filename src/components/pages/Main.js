import React, { Fragment } from 'react';
import Navbar from '../layout/Navbar';
import Cms from './ManagementSystem';
import About from './About';
import MyGallery from './MyGallery';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import { connect } from 'react-redux';

const Main = ({ gallery: { isHome } }) => {
    return (
        <Fragment>
            <Router>
                {!isHome ? (
                    <div>
                        <Navbar />
                        <Switch>
                            <Route exact path='/' component={Home} />
                            <Route exact path='/cms' component={Cms} />
                            <Route exact path='/about' component={About} />
                            <Route
                                exact
                                path='/gallery'
                                component={MyGallery}
                            />
                        </Switch>
                    </div>
                ) : (
                    <Home />
                )}
            </Router>
        </Fragment>
    );
};

const mapStateToProps = (state) => ({
    gallery: state.gallery
});

export default connect(mapStateToProps, {})(Main);
