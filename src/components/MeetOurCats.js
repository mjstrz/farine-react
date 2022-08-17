import React from "react";
import { Accordion, Card, CardGroup, Button } from "react-bootstrap";

export default function OurCats() {

  const marginBottom = {
    marginBottom: '0.75em'
  };

  return (
    <div className="container">
      <div className="row">
        <Card 
          style={{ width: "18rem", marginBottom: '0.75em', marginRight: '0.75em', border: '1px' }} 
          >
          <Card.Img variant="top" src="img/cats/bio/pexels-cats-coming-1605481.jpg" className="w-100" 
            style={{border: '1px dashed blue'}}/>
          <Card.Body>
            <Card.Title>Tux</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem", marginBottom: '0.75em', marginRight: '0.75em', border: '1px' }} className="d-block">
          <Card.Img variant="top" src="img/cats/bio/pexels-roman-odintsov-6979817.jpg" style={{border: '1px dashed blue'}} />
          <Card.Body>
            <Card.Title>Marble</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem", marginBottom: '0.75em', marginRight: '0.75em', border: '1px' }}>
          <Card.Img variant="top" src="img/cats/bio/pexels-eva-kubíčková-2083940.jpg" style={{border: '1px dashed blue'}} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem", marginBottom: '0.75em', marginRight: '0.75em', border: '1px'}} >
          <Card.Img variant="top" src="img/cats/bio/pexels-mati-mango-4734723.jpg" style={{border: '1px dashed blue'}} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem", marginBottom: '0.75em', marginRight: '0.75em', border: '1px' }}>
          <Card.Img variant="top" src="img/cats/bio/pexels-cottonbro-6853506.jpg" style={{border: '1px dashed blue'}}/>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem", marginBottom: '0.75em', marginRight: '0.75em', border: '1px' }}>
          <Card.Img variant="top" src="img/cats/bio/pexels-brigitte-miller-11448414.jpg" style={{border: '1px dashed blue'}} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem", marginBottom: '0.75em', marginRight: '0.75em', border: '1px' }}>
          <Card.Img ariant="top" src="img/cats//bio/pexels-tomas-andreopoulos-747795.jpg" style={{border: '1px dashed blue'}} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
