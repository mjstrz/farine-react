import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Navigation from './components/Navigation';
import About from './components/About';
import React from 'react';
import Main from './components/Main';
import { BrowserRouter } from 'react-router-dom';

// function Test() {
//     return (
//       <div>
//           <h1>Hello, World</h1>
//       </div>
//     )
// }

// function Contact() {
//     return (
//       <div>
//           <h1>Contact...please don't</h1>
//       </div>
//     )
// }

// function Chef() {
//    return (
//       <div>
//          <h1>Bonjour, je m'appelle Romain</h1>
//       </div>
//    )
// }


// function App() {
//   return (
//     <div className="container">
//     <Header />,
//     <Navigation />,
//     <Home />

//     <Router>
//          <div>
//             <nav>
//                <ul>
//                   <li>
//                      <Link to="/">Home</Link>
//                   </li>
//                   <li>
//                      <Link to="/about">Our Story</Link>
//                   </li>
//                   <li>
//                      <Link to="/contact">Contact</Link>
//                   </li>
//                   <li>
//                      <Link to="/chef">Chef Romain</Link>
//                   </li>
//                </ul>
//             </nav>

//             <Switch>
//                <Route path="/about">
//                   <About />
//                </Route>
//                <Route path="/contact">
//                   <Contact />
//                </Route>
//                <Route path="/chef">
//                   <Chef />
//                </Route>
//                <Route path="/">
//                   <Test />
//                </Route>
//             </Switch>
//          </div>
//       </Router>

//     ,
//     <Footer />,
//     </div>
//   );
// }

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
