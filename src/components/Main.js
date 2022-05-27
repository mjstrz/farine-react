import React, { Component} from 'react';
import Home from './Home';
import About from './About';
import Footer from './Footer';
import Giftcard from './Giftcard';
import Header from './Header';
import Navigation from './Navigation';
import Romain from './chefRomain';
import Menu from './Menu';
import { BrowserRouter, Switch, Route, Redirect, withRouter } from 'react-router-dom';

export default function Main() {
    return (
        <div>
            <Header />
            <Navigation />
                <Switch>
                    <Route exact path='/giftcard' component={Giftcard} /> 
                    <Route exact path='/about' component={About} />
                    <Route exact path='/romain' component={Romain} />
                    <Route exact path="/menu" component={Menu} />
                    <Route path='/' component={Home}/> 
                    <Redirect to="/" />
                </Switch>
             
            <Footer /> 
        </div>
    ) 
}