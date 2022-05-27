import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { Link } from 'react-router-dom';

export default function Navigation() {
    return(
        <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">

        {/* Toggler */}
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#farineNavbar">
                <span className="navbar-toggler-icon"></span>
                {/* NOTE: TOGGLER DOESN'T work! Need to add this functionality */}
            </button>
            <div className="collapse navbar-collapse align-item-center" id="farineNavbar">
                <ul className="navbar-nav d-flex justify-content-center justify-content-between">
                    <li className="nav-item col-md-2 justify-content">
                        {/* <Link to="/about">Our Story</Link> */}
                        {/* <a class="nav-link text-nowrap">Our Story</a> */}
                        </li>
                    <li className="nav-item col-md-2 justify-content"><a className="nav-link text-nowrap" href="#">
                            Join Our Team</a></li>
                    <li className="nav-item col-md-2 justify-content"><a className="nav-link"><Link to="/menu">Menu</Link></a></li>
                    <li className="nav-item col-md-2 justify-content-around"><a className="nav-link text-nowrap"><Link to="/giftcard">Gift Cards</Link></a></li>
                    <li className="nav-item col-md-2 justify-content-between"><a className="nav-link text-nowrap" href="#"><Link to="/about">Our Story</Link></a></li>
                    <li className="nav-item col-md-2 justify-content"><Link to="/romain">Chef Romain</Link></li>
                </ul>
              
            </div>
        </div>
    </nav>
    )
}