import React from 'react';
import ReactDOM from 'react-dom';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';

export default function Home() { 
    return(
        <div className="Directory justify-content-center">
            <div className="row justify-content-center">
            <Card className="col-5">
                    <CardImg src="img/OrderOnline.jpeg" alt="Order Online" />
                    <CardImgOverlay>
                       <Link to='/menu'><CardTitle>Order Online</CardTitle></Link>
                </CardImgOverlay>
            </Card>
            <Card className="col-5">
                    <CardImg src="img/GiftCard.jpeg" alt="Gift Cards" />
                    <CardImgOverlay>
                    <Link to='/giftcard'><CardTitle >Gift Cards</CardTitle></Link>
                </CardImgOverlay>
            </Card>
            <Card className="col-5"> 
                    <CardImg src="img/EventOrdering.jpg" alt="Order Online" />
                    <CardImgOverlay>
                        <CardTitle>Event Ordering</CardTitle>
                </CardImgOverlay>
            </Card>
            <Card className="col-5">
                    <CardImg src="img/BakeAtHome2.jpeg" alt="Bake at Home" />
                    <CardImgOverlay>
                        <CardTitle>Bake at Home</CardTitle>
                </CardImgOverlay>
            </Card>
        </div>
    </div>


    )
}

