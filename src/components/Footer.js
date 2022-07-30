import React from 'react';
import {Link} from 'react-router-dom';
import styled from "styled-components";
import {SocialMediaButtons, SocialButtonsContainer} from 'react-social-media-buttons';
import {Col, Container, Row} from 'react-bootstrap';


export default function Footer() {
    const year = new Date().getFullYear();
    return(
        
        <div>
            <div className='container'>      
                <Container>
                    <Row>
                    <div className="contact col-4 col-sm-2 col-xs offset-5">
                            <ul className='contact-footer'>
                                <i className="fa fa-map-marker"></i><li>15 Lorem Ipsum Ln,Boston, MA</li>
                                <i className="fa fa-phone"></i><li>(555).555.5555 </li>
                                <i className="fa fa-envelope"></i><li>fakeemail@fake.com</li>
                            </ul>
                    </div>
                            </Row>
                        </Container>
                    </div>
    

                <section className='social-media'>
                    <h5>Social</h5>
                    <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/" target="_blank"><i className="fa fa-instagram" /></a>{' '}
                    <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/" target="_blank"><i className="fa fa-facebook" /></a>{' '}   
                </section>
            
            <hr />

                <footer className='site-footer'>      
                    <h5>
                    Copyright &copy; {year} Monica Strzelecki
                    </h5>
                </footer> 
                </div>

    )
}