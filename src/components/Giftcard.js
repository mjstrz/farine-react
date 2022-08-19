import React from 'react';
import ReactDOM from 'react-dom';
import {Col, Row} from 'react-bootstrap';
import '../index.css';

export default function Giftcard() {
    return (
      <div className='container'>
        <div className='giftcard'>
          <h1 className='giftcard-header'>Buy a giftcard!</h1>

          <img src="img/giftcard.jpeg" alt="Barista holding an Open sign" className='img-fluid giftcard-image' />

          <Row>
            <Col className='giftcard-paragraph'>
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
      </div>
    )
}