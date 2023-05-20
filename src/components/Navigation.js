import React from 'react';
import { NavLink } from 'react-router-dom';
// import { Button, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { Container, Nav, Navbar, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from "styled-components";

export default function Navigation() {

    // const linkStyle = {
    //     whiteSpace: 'nowrap',
    //     margin: '0.5em'
    // }
    return(
        // <nav className="navbar navbar-expand-lg navbar-light align-items-center">

            <Navbar expand="lg">
                
                <Container fluid id="main-nav">
                
                    <Row>
                  
                    <Navbar.Toggle aria-controls="main-nav" id="nav-toggle"/>
                    <Navbar.Collapse>
                            <Nav>    
                            <Link to="/ourcats"  
                                    // className='col-md-2'
                                    // style={{
                                    //     whiteSpace: 'nowrap', 
                                    //     marginRight: '2.7em'}}
                                        >
                                            Meet Our Cats
                                </Link>
                                <Link to="/menu" 
                                    // className="col-md-2 justify-content-around" 
                                    // style={{
                                    //     whiteSpace: 'nowrap',
                                    //     marginRight: '1.5em' }}
                                        >
                                            Menu
                                </Link>
                                <Link to="/giftcard" 
                                    // className="col-md-2" 
                                    // style={{
                                    //     whiteSpace: 'nowrap',
                                    //     marginRight: '2em' }}
                                        >
                                            Gift Cards
                                </Link>
                                <Link to="/about" 
                                    // className="col-md-2 justify-content-between" 
                                    // style={{
                                    //     whiteSpace: 'nowrap' }}
                                        >
                                            Our Story
                                </Link>
                                <Link to="/romain" 
                                    // className="col-md-2 justify-content" 
                                    // style={{
                                    //     whiteSpace: 'nowrap' }}
                                        >
                                            Chef Romain
                                </Link>
                                <Nav.Link href="#contact">
                                            Contact
                                </Nav.Link>
                                {/* <ul className="navbar-nav justify-content-center justify-content-between">
                                    <li className="nav-item col-md-2 justify-content"></li> */}
                                    {/* <li className="nav-item col-md-2 justify-content text-nowrap"><StyledLink to="/menutest">Join Our Team</StyledLink></li> */}
                                    {/* <li className="nav-item col-md-2 justify-content"><StyledLink to="/menu">Menu</StyledLink></li> */}
                                    {/* <li className="nav-item col-md-2 justify-content-around"><StyledLink to="/giftcard">Gift Cards</StyledLink></li> */}
                                    {/* <li className="nav-item col-md-2 justify-content-between"><StyledLink to="/about">Our Story</StyledLink></li> */}
                                    {/* <li className="nav-item col-md-2 justify-content"><StyledLink to="/romain">Chef Romain</StyledLink></li> */}
                                {/* </ul> */}
                            </Nav>
                    </Navbar.Collapse>
                
                    </Row>
                </Container>
            </Navbar>
            
        
    // </nav>
    )
}

const StyledLink = styled(Link)`
  color: Green;
  text-emphasis: bold;
margin: 1rem;
padding: 1em;
white-space: nowrap;
position: relative;
:hover {
    color: purple;
    cursor: pointer;
}
`;

