import React from 'react';

export default function Navbar() {
    return(
        <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container">
            
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#farineNavbar">
                <span class="navbar-toggler-icon"></span>
                {/* NOTE: TOGGLER DOESN'T work! Need to add this functionality */}
            </button>
            <div class="collapse navbar-collapse align-item-center" id="farineNavbar">
                <ul class="navbar-nav d-flex justify-content-center justify-content-between">
                    <li class="nav-item col-md-2 justify-content"><a class="nav-link text-nowrap" href="ourstory.html">
                            Our Story</a></li>
                    <li class="nav-item col-md-2 justify-content"><a class="nav-link text-nowrap" href="#">
                            Join Our Team</a></li>
                    <li class="nav-item col-md-2 justify-content"><a class="nav-link" href="menu.html">Menu</a></li>
                    <li class="nav-item col-md-2 justify-content-around"><a class="nav-link text-nowrap" href="#"> Gift Cards</a></li>
                    <li class="nav-item col-md-2 justify-content-between"><a class="nav-link text-nowrap" href="#">Event Ordering</a></li>
                </ul>
              
            </div>
        </div>
    </nav>
    )
}