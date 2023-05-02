import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Navigation from './components/Navigation';
import About from './components/About';
import React from 'react';
import Main from './components/Main';
import { BrowserRouter } from 'react-router-dom';



function App() {
   return (
      <BrowserRouter>
            <div className="App"> 
               <Main />
            </div>
   </BrowserRouter>
   )
}

export default App;
