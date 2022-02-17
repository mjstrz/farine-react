import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

class Reservation extends Component  {

    constructor(props) {
        super(props);

        this.state = { 
            name: '',
            email: '',
            phoneNum: '',
            email: '',
            //not sure how to indicate default for number, date, time 
            numberOfGuests: '',
            date: '',
            time: '',
            requests: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value; 

        this.setState({
            [name]: value
        });
    }

        handleSubmit(event) { 
            console.log("Current state is: " + JSON.stringify(this.state));
            alert("Current state is: " + JSON.stringify(this.state));
            event.preventDefault();
        }

    render() { 
        return (
            <div className="container">
                {/* <div className="row">
                    <div className="col">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                        </Breadcrumb>
                        <h2>Contact Us</h2>
                        <hr />
                    </div>
                </div> */}

                <div className="row row-content">
                    <div className="col-12">
                        <h2>Reserve a Table</h2>
                        <hr />
                    </div>
                    <div className="col-md-10">
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Label htmlFor="name" md={2}>Name</Label>
                                <Col md={10}>
                                    <Input type="text" id="name" name="name"
                                        placeholder="First and Last Name"
                                        value={this.state.name}
                                        onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Input type="email" id="email" name="email"
                                        placeholder="Email"
                                        value={this.state.email}
                                        onChange={this.handleInputChange} />
                                </Col>                        
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="phoneNum" md={2}>Phone</Label>
                                <Col md={10}>
                                    <Input type="tel" id="phoneNum" name="phoneNum"
                                        placeholder="Phone number"
                                        value={this.state.phoneNum}
                                        onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="numberOfGuests" md={2}>Number</Label>
                                <Col md={10}>
                                    <Input type="number" id="numberOfGuests" name="numberOfGuests"
                                        placeholder="Select..."
                                        value={this.state.numberOfGuests}
                                        onChange={this.handleInputChange} />
                                </Col>
                                </FormGroup>
                                <FormGroup row>
                                <Label htmlFor="date" md={2}>Date</Label>
                                <Col md={10}>
                                    <Input type="date" id="date" name="date"
                                        placeholder="mm/dd/yyyy"
                                        value={this.state.date}
                                        onChange={this.handleInputChange} />
                                </Col>
                                </FormGroup>
                                <FormGroup row>
                                <Label htmlFor="date" md={2}>Date</Label>
                                <Col md={10}>
                                    <Input type="time" id="time" name="time"
                                        placeholder=""
                                        value={this.state.time}
                                        onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="requests" md={2}>Special Requests and/or Dietary Restrictions</Label>
                                <Col md={10}>
                                    <Input type="textarea" id="requests" name="requests"
                                        rows="5"
                                        value={this.state.feedback}
                                        onChange={this.handleInputChange}></Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size: 10, offset: 2}}>
                                    <Button type="submit" color="success">
                                        Submit
                                    </Button>
                                    <Button type="cancel" color="light">
                                        Cancel
                                    </Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Reservation;