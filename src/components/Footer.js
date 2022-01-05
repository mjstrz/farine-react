import React from 'react';


export default function Footer() {
    return(
        <footer className="site-footer">
            <div className="container">      
                <div className="row row-content">
                    <div className="col col-md-3">
                        <li><a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i
                                class="fa fa-instagram"></i></a></li>
                        <a className="btn btn-social-icon btn-facebook" href="http://facebook.com/"><i
                                class="fa fa-facebook"></i></a>
                    </div>

                        <div className="col col-md-3">
                            15 Lorem Ipsum Ln
                             Boston, MA
                        </div>
                        

                {/* <!-- phone and email  --> */}
                
                    <div className="col col-md-3">
                        <a className="btn btn-link" href="#"><i class="fa fa-phone"></i>(555).555.5555 </a>
                    </div>
                    <div className="col col-md-3">
                        <a className="btn btn-link" href="#"><i className="fa fa-envelope-o"></i>fakeemail@fake.com</a>
                    </div>
                    
                    <div className="col text-center">
                        <p className='text-muted'>Copyright 2021 Monica Strzelecki</p>
                    </div>
                </div>
            </div>

        </footer>
    )
}