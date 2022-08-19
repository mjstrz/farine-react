import React from 'react';
import {Col, Row} from 'react-bootstrap'

export default function Romain() {
    return(
<div className='container chef'>
          <h1 className='chef-header'>Our Story</h1>

          <img src="img/chefRomain1.jpg" alt="Pastry chef sifting flour" className='img-fluid chef-image' />
          
          <Row>
            <Col className='chef-paragraph'>
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