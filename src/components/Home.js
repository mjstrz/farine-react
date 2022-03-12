import React from 'react';
import ReactDOM from 'react-dom';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import { NavLink } from 'react-router-dom';

export default function Home() { 
    return(
        <div className="Directory align-items-center">
            <div className="row">
            <Card className="col-6">
                {/* <Link to={`/directory/${campsite.id}`}> */}
                    <CardImg src="img/OrderOnline.jpeg" alt="Order Online" />
                    <CardImgOverlay>
                        <CardTitle>Order Online</CardTitle>
                </CardImgOverlay>
                {/* </Link> */}
            </Card>
            <Card className="col-6">
                {/* <Link to={`/directory/${campsite.id}`}> */}
                    <CardImg src="img/GiftCard.jpeg" alt="Gift Cards" />
                    <CardImgOverlay>
                        <CardTitle >Gift Cards</CardTitle>
                </CardImgOverlay>
                {/* </Link> */}
            </Card>
            <Card className="col-6"> 
                {/* <Link to={`/directory/${campsite.id}`}> */}
                    <CardImg src="img/EventOrdering.jpg" alt="Order Online" />
                    <CardImgOverlay>
                        <CardTitle>Event Ordering</CardTitle>
                </CardImgOverlay>
                {/* </Link> */}
            </Card>
            <Card className="col-6">
                {/* <Link to={`/directory/${campsite.id}`}> */}
                    <CardImg src="img/BakeAtHome2.jpeg" alt="Bake at Home" />
                    <CardImgOverlay>
                        <CardTitle>Bake at Home</CardTitle>
                </CardImgOverlay>
                {/* </Link> */}
            </Card>
        </div>
    </div>


    )
}

