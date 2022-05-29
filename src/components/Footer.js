import React from 'react';



export default function Footer() {
    return(
        
            <div className="container">      
                <div className="row row-content">
                    <div className="col col-md-2">
                    <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-instagram" /></a>{' '}
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/"><i className="fa fa-facebook" /></a>{' '}
                    </div>

                    <div className="contact col-lg-10 col-md-6 col-sm-2">
                        <div className='row row-content'>
                        <ul className='contact-footer'>
                            <li>15 Lorem Ipsum Ln,Boston, MA</li>
                            <li>(555).555.5555 </li>
                            <li>fakeemail@fake.com</li>
                        </ul>
                        </div>
                    </div>
                </div>
            
                <footer className='site-footer'>      
                    <h5>
                    Copyright &copy; 2021 Monica Strzelecki
                    </h5>
                </footer> 
                </div>

    )
}