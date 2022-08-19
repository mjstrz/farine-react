import React from 'react';
import ReactDOM from 'react-dom';
import {Col, Row} from 'react-bootstrap';

export default function About() {

    return (
      <div className='container about'>
          <h3 className='about-header'>Our Story</h3>

          <img src="img/ourStory7.jpeg" alt="Barista holding an Open sign" className='img-fluid about-image' />
          
          <Row>
            <Col className='about-paragraph'>
            <p className='d-flex col-8 justify-content-center'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
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
            </Col>
          </Row>

      </div>
    )
}