import React from 'react';
import ReactDOM from 'react-dom';

export default function Header() {
    return(
        
        <div className="container">
            <div className="row">
                <div className="col-4 col-sm-3 col-md-2 align-self-center">
                    <img src="img/Farine_Logo.png" className="img-fluid" alt="Farine logo"/>
                </div>
                <div className="col">
                    <h1>Farine Bakery & Cafe</h1>
                    <h3>Boston, MA</h3>
                    <p className="text-muted">open everyday 7 AM - 7 PM</p>
                    <p className="text-muted">bistro fare, house-made fresh breads, pastries & desserts </p>
                </div>

            {/* <!-- Reserve button  --> */}
                <div className="col-xs-12 col-md-4 col-xl-2 mt-4">
                    <a role="button" className="btn btn-info btn-lg text-nowrap" data-target="#reserveModal" data-toggle="modal" >Reservations</a>
                </div> 
            </div>
        </div>
        

    )
}
