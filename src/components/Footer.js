import React from 'react';
import {Link} from 'react-router-dom';
import styled from "styled-components";
import {SocialMediaButtons, SocialButtonsContainer} from 'react-social-media-buttons';


export default function Footer() {
    return(
        
            <div className="container">      
                {/* <div className="row row-content"> */}
                    {/* <div className="col col-md-2">

                    </div> */}

                    <div className="contact col-lg-10 col-md-6 col-sm-2">
                        <div className='row row-content'>
                        <ul className='contact-footer'>
                            <i class="fa fa-map-marker"></i><li>15 Lorem Ipsum Ln,Boston, MA</li>
                            <i class="fa fa-phone"></i><li>(555).555.5555 </li>
                            <i class="fa fa-envelope"></i><li>fakeemail@fake.com</li>
                        </ul>
                        </div>
                    </div>
                {/* </div> */}

                <section className='social-media'>
                    <h5>Social</h5>
                    <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-instagram" /></a>{' '}
                    <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/"><i className="fa fa-facebook" /></a>{' '}   
                </section>
            
                <footer className='site-footer'>      
                    <h5>
                    Copyright &copy; 2021 Monica Strzelecki
                    </h5>
                </footer> 
                </div>

    )
}