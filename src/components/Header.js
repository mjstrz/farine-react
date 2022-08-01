import { isCursorAtEnd } from '@testing-library/user-event/dist/utils';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import Select from 'react-select'
import { Button, Modal,  ModalHeader, ModalBody, Form, FormGroup, Input, Label, Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';

export default function Header() {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const setModalIsOpenToTrue =()=>{
        setModalIsOpen(true)
    }

    const setModalIsOpenToFalse =()=>{
        setModalIsOpen(false)
    }

    const linkStyle = {
        margin: "1rem",
        textDecoration: "none",
        color: 'black',
        hover: 'cursor'
      };

    return(
        
        <div className="container">
            <div className="row">
                <div className="col-4 col-sm-3 col-md-2 align-self-center">
                    <Link to="/"><img src="img/Farine_Logo.png" width="225px" className="img-fluid" alt="Farine logo"/></Link>
                </div>
                <div className="col">
                    <Link to="/" className="header" style={linkStyle} ><h1>Farine Bakery & Cafe</h1>
                    <h3>Boston, MA</h3>
                    <h5 className="text-muted">open everyday 7 AM - 7 PM</h5>
                    <h5 className="text-muted">bistro fare, house-made fresh breads, pastries & desserts </h5></Link>
                </div>

            {/* <!-- Reserve button  --> */}
                <div className="col-xs-12 col-md-4 col-xl-2 mt-4">
                    <Button onClick={setModalIsOpenToTrue} className="btn btn-info btn-md">Reservations</Button>
                </div> 
            </div>

        {/* // Reservations Model */}
            <Modal isOpen={modalIsOpen} onRequestClose={()=> setModalIsOpen(false)}>
            <ModalHeader>Reserve a Table</ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup>
                                <Label htmlFor="name">Name</Label>
                                <Input type="text" id="name" name="name" 
                                     />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="email">Email</Label>
                                <Input type="email" id="email" name="email" 
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="phone">Phone</Label>
                                <Input type="tel" id="phone" name="phone" 
                                    />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="numberOfGuests">Number of Guests</Label>
                                <Input type="select" name="numberofGuests" id="numberofGuests">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="date">Date</Label>
                                <Input type="date" id="date" name="date" 
                                    />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="date">Time</Label>
                                <Input type="time" id="time" name="time" 
                                    />
                            </FormGroup>
                            <Button type="submit" value="submit" color="success">Submit</Button>
                            <Button onClick={setModalIsOpenToFalse} type="submit" value="submit" color="light">Cancel</Button>
                        </Form>
                    </ModalBody> 
            </Modal>
                
        </div>
        

    )
}
