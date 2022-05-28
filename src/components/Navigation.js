import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { Link } from 'react-router-dom';
import styled from "styled-components";

export default function Navigation() {
    return(
        <nav className="navbar navbar-expand-lg navbar-light align-items-center">
        <div className="container">

        {/* Toggler */}
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#farineNavbar">
                <span className="navbar-toggler-icon"></span>
                {/* NOTE: TOGGLER DOESN'T work! Need to add this functionality */}
            </button>
            <div className="collapse navbar-collapse align-item-center" id="farineNavbar">
                <ul className="navbar-nav d-flex justify-content-center justify-content-between">
                    <li className="nav-item col-md-2 justify-content"></li>
                    <li className="nav-item col-md-2 justify-content text-nowrap">Join Our Team</li>
                    <li className="nav-item col-md-2 justify-content"><StyledLink to="/menu">Menu</StyledLink></li>
                    <li className="nav-item col-md-2 justify-content-around"><StyledLink to="/giftcard">Gift Cards</StyledLink></li>
                    <li className="nav-item col-md-2 justify-content-between"><StyledLink to="/about">Our Story</StyledLink></li>
                    <li className="nav-item col-md-2 justify-content"><StyledLink to="/romain">Chef Romain</StyledLink></li>
                </ul>
              
            </div>
        </div>
    </nav>
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

