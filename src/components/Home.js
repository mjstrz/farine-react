import React, { useState } from "react";
import ReactDOM from "react-dom";
// import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";
import { Button, Carousel, Card, CardGroup } from "react-bootstrap";
// import { Card } from "reactstrap";
import { NavLink, Link } from "react-router-dom";

export default function Home() {

  const carousel = {
    border: '3px solid orange'
  }

  const singleCard = {
    border: '3px solid orange',
    marginRight: '1em'
  }

  const cardGroup = {
    paddingTop: '7em',
    justifyContent: 'space-between'
  }

  return (
    <div>
    <Carousel variant="dark" style={carousel} fade >
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="img/cats/pexels-sam-lion-6001385.jpg"
        alt="Cat seated across from laptop"
      />
      {/* <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption> */}
    </Carousel.Item>

    <Carousel.Item>
      <img
        className="d-block w-100"
        src="img/cats/pexels-cats-coming-1787414.jpg"
        alt="Two cats sleeping by the window"
      />
    </Carousel.Item> 

    <Carousel.Item>
      <img
        className="d-block w-100 align-item-center"
        src="img/cats/pexels-arina-krasnikova-7725972.jpg"
        alt="2 cats playing on cat bridge"
      />
      {/* <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption> */}
    </Carousel.Item>

    <Carousel.Item>
      <img
        className="d-block w-100 align-item-center"
        src="img/ourStory3.jpeg"
        alt="Cafe counter"
      />
    </Carousel.Item>
    
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="img/cats/pexels-pixabay-279360.jpg"
        alt="Ginger cat sleeping"
      />
    </Carousel.Item>

    <Carousel.Item>
      <img
        className="d-block w-100"
        src="img/ourStory2.jpeg"
        alt="People working on laptops in cafe"
      />
      {/* <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption> */}
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="img/menu_waffleSavory.jpeg"
        alt="A savory waffle on a plate"
      />
    </Carousel.Item>

    <Carousel.Item>
      <img
        className="d-block w-100"
        src="img/cats/pexels-helena-lopes-1123999.jpg"
        alt="Woman holding a cat"
      />
      {/* <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption> */}
    </Carousel.Item>

    <Carousel.Item>
      <img
        className="d-block w-100"
        src="img/ourStory9.jpeg"
        alt="Laptop and a cappuccino on workstation"
      />
      {/* <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption> */}
    </Carousel.Item>

    <Carousel.Item>
      <img
        className="d-block w-100"
        src="img/cats/pexels-arina-krasnikova-7726093.jpg"
        alt="Cat sitting on cat bridge"
      />
      {/* <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption> */}
    </Carousel.Item>
  </Carousel>

  <CardGroup style = {cardGroup}>
      <Card style={singleCard}>
        <Card.Img variant="top" src="img/cats/pexels-tatiana-аzatskaya-3616232.jpg" alt="Cat poking its head out of blanket" />
        <Card.Body>
          <Link to="/ourcats"><Card.Title>Meet Our Cats</Card.Title></Link>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={singleCard}>
        <Card.Img variant="top" src="img/OrderOnline.jpeg" alt="Group of friends seated at table" />
        <Card.Body>
          <Link to='/menu'><Card.Title>Menu</Card.Title></Link>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={singleCard}>
        <Card.Img variant="top" src="img/ourStory6.jpeg" alt="Vespa outside cafe" />
        <Card.Body>
          <Link to="/about"><Card.Title>Our Story</Card.Title></Link>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
  </div>

    //     <div className="Directory justify-content-center">
    //         <div className="row justify-content-center">
    //         <Card className="col-5">
    //                 <CardImg src="img/OrderOnline.jpeg" alt="Order Online" />
    //                 <CardImgOverlay>
    //                    <Link to='/menu'><CardTitle>Order Online</CardTitle></Link>
    //             </CardImgOverlay>
    //         </Card>
    //         <Card className="col-5">
    //                 <CardImg src="img/GiftCard.jpeg" alt="Gift Cards" />
    //                 <CardImgOverlay>
    //                 <Link to='/giftcard'><CardTitle >Gift Cards</CardTitle></Link>
    //             </CardImgOverlay>
    //         </Card>
    //         <Card className="col-5">
    //                 <CardImg src="img/EventOrdering.jpg" alt="Order Online" />
    //                 <CardImgOverlay>
    //                     <CardTitle>Event Ordering</CardTitle>
    //             </CardImgOverlay>
    //         </Card>
    //         <Card className="col-5">
    //                 <CardImg src="img/BakeAtHome2.jpeg" alt="Bake at Home" />
    //                 <CardImgOverlay>
    //                     <CardTitle>Bake at Home</CardTitle>
    //             </CardImgOverlay>
    //         </Card>
    //     </div>
    // </div>
  );
}

