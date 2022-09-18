import React from "react";
import { Card } from "react-bootstrap";

export default function OurCats() {

  // const marginBottom = {
  //   marginBottom: '0.75em'
  // };

  return (
    <div className="container">
      <div className="row">
        <div className="col cat-card-intro"><h6>They can't wait to meet you!</h6></div>
      </div>
      <div className="row" id="cat-cards">
        <Card 
          // style={{ width: "18rem", marginBottom: '0.75em', marginRight: '0.75em', border: '1px' }}
          className="cat-card col-3" 
          >
          <Card.Img variant="top" src="img/cats/bio/pexels-cats-coming-1605481.jpg" alt="Tuxedo cat" className="w-100" 
            style={{border: '1px dashed blue'}}/>
          <Card.Body>
            <Card.Title>Tux</Card.Title>
            <Card.Text>
              Always dressed to impress, Tux loves to keep his fellow Farine felines company on the cat ladder. 
            </Card.Text>
          </Card.Body>
        </Card>

        <Card 
        // style={{ width: "18rem", marginBottom: '0.75em', marginRight: '0.75em', border: '1px' }} 
          className="d-block cat-card col-3">
          <Card.Img variant="top" src="img/cats/bio/pexels-roman-odintsov-6979817.jpg" alt="Cat sitting" style={{border: '1px dashed blue'}} />
          <Card.Body>
            <Card.Title>Marble</Card.Title>
            <Card.Text>
              You'll find Marble loafing around the cafe anywhere there's a cushion. 
            </Card.Text>
          </Card.Body>
        </Card>

        <Card 
        // style={{ width: "18rem", marginBottom: '0.75em', marginRight: '0.75em', border: '1px' }} 
        className="cat-card col-3">
          <Card.Img variant="top" src="img/cats/bio/pexels-eva-kubíčková-2083940.jpg" alt="Cat lounging on cat toy" style={{border: '1px dashed blue'}} />
          <Card.Body>
            <Card.Title>Ziggy</Card.Title>
            <Card.Text>
              Ziggy has two big loves: the cat tree and coffee creamer. 
            </Card.Text>
          </Card.Body>
        </Card>

        <Card 
          // style={{ width: "18rem", marginBottom: '0.75em', marginRight: '0.75em', border: '1px'}} 
          className="cat-card col-3">
          <Card.Img variant="top" src="img/cats/bio/pexels-mati-mango-4734723.jpg" alt="A ginger cat lounging in a chair" style={{border: '1px dashed blue'}} />
          <Card.Body>
            <Card.Title>Garbanzo</Card.Title>
            <Card.Text>
              Our sassy ginger loves guests, lounging and chasing strings of yarn. 
            </Card.Text>
          </Card.Body>
        </Card>

        </div>
        <div className="row">

        <Card 
          // style={{ width: "18rem", marginBottom: '0.75em', marginRight: '0.75em', border: '1px' }} 
          className="cat-card">
          <Card.Img variant="top" src="img/cats/bio/pexels-cottonbro-6853506.jpg" alt="Black cat lounging in a chair" style={{border: '1px dashed blue'}}/>
          <Card.Body>
            <Card.Title>Felix</Card.Title>
            <Card.Text>
              One of the first cats to join our Farine family. He can be a little shy at first but offers a lot of love once he warms up to you. 
            </Card.Text>
          </Card.Body>
        </Card>

        <Card 
          // style={{ width: "18rem", marginBottom: '0.75em', marginRight: '0.75em', border: '1px' }} 
          className="cat-card">
          <Card.Img variant="top" src="img/cats/bio/pexels-brigitte-miller-11448414.jpg" alt="A gray and white cat poking out of a plant pot" style={{border: '1px dashed blue'}} />
          <Card.Body>
            <Card.Title>Chapeau</Card.Title>
            <Card.Text>
              The baby of our bunch. This furball loves naps inbetween games of hide-and-seek. 
            </Card.Text>
          </Card.Body>
        </Card>

        <Card 
          // style={{ width: "18rem", marginBottom: '0.75em', marginRight: '0.75em', border: '1px' }} 
          className="cat-card">
          <Card.Img ariant="top" src="img/cats//bio/pexels-tomas-andreopoulos-747795.jpg" alt="Gray striped cat lounging on a sofa" style={{border: '1px dashed blue'}} />
          <Card.Body>
            <Card.Title>Kicia</Card.Title>
            <Card.Text>
              Our wise elder, Kicia (pronounced 'key-cha') has been with us since Farine's inception. She'll happily supervise you and make sure you get your work done!
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
