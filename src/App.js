import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Navigation from './components/Navigation';
import About from './components/About';
import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';

function Home() {
    return (
      <div>
          <h1>Home...</h1>
      </div>
    )
}

function Contact() {
    return (
      <div>
          <h1>Contact...please dont</h1>
      </div>
    )
}


function App() {
  return (
    <div className="container">
    <Header />,
    <Navigation />,
    <Main />

    <Router>
         <div>
            <nav>
               <ul>
                  <li>
                     <Link to="/">Home</Link>
                  </li>
                  <li>
                     <Link to="/about">aboot</Link>
                  </li>
                  <li>
                     <Link to="/contact">contacttt</Link>
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
                  <Home />
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
