import React from 'react';



export default function Footer() {
    return(
        <footer className="site-footer">
            <div className="container">      
                <div className="row row-content">
                    <div className="col col-md-2">
                    <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-instagram" /></a>{' '}
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/"><i className="fa fa-facebook" /></a>{' '}
                    </div>

                        <h5>
                            15 Lorem Ipsum Ln,
                             Boston, MA
                        </h5>
                        

                {/* <!-- phone and email  --> */}
                
                    <h5>
                        <a className="btn btn-link" href="#"><i class="fa fa-phone"></i>(555).555.5555 </a>
                    </h5>
                    <h5>
                        <a className="btn btn-link" href="#"><i className="fa fa-envelope-o"></i>fakeemail@fake.com</a>
                    </h5>
                    
                    <h5>
                        Copyright 2021 Monica Strzelecki
                    </h5>
                </div>
            </div>

        </footer>
    )
}