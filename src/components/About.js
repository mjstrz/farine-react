import React from 'react';
import ReactDOM from 'react-dom';

export default function About() {

  const imageStyle = {
    border: '3px solid orange', 
    margin: '2em',
    width: '100',
    height: '100',
};
    return (
      <div className='container'>
          <h1 className='about-header'>Our Story</h1>

          <img src="img/ourStory7.jpeg" alt="Barista holding an Open sign" className='img-fluid' style={imageStyle}/>

          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum."
            <br/>
            <br/>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum."</p>
      </div>
    )
}