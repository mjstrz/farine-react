import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Navigation from './components/Navigation';
import About from './components/About';
import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';

function Test() {
    return (
      <div>
          <h1>Home...</h1>
      </div>
    )
}

function Contact() {
    return (
      <div>
          <h1>Contact...please don't</h1>
      </div>
    )
}


function App() {
  return (
    <div className="container">
    <Header />,
    <Navigation />,
    <Home />

    <Router>
         <div>
            <nav>
               <ul>
                  <li>
                     <Link to="/">Home</Link>
                  </li>
                  <li>
                     <Link to="/about">Our Story</Link>
                  </li>
                  <li>
                     <Link to="/contact">Contact</Link>
                  </li>
               </ul>
            </nav>

            <Switch>
               <Route path="/about">
                  <About />
               </Route>
               <Route path="/contact">
                  <Contact />
               </Route>
               <Route path="/">
                  <Test />
               </Route>
            </Switch>
         </div>
      </Router>

    ,
    <Footer />,
    </div>
  );
}

export default App;
