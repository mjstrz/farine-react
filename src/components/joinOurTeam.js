// import React, { useState } from 'react';
// import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from 'reactstrap';

// export default function MenuTest (props) {
//   const [open, setOpen] = useState('1');
//   const toggle = (id) => {
//     open === id ? setOpen() : setOpen(id);
//   };

//   return (
//     <div>
//       <Accordion open={open} toggle={toggle}>
//         <AccordionItem>
//           <AccordionHeader targetId="1">
//             Accordion Item 1
//           </AccordionHeader>
//           <AccordionBody accordionId="1">
//             <strong>This is the first item's accordion body.</strong>
//             You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
//           </AccordionBody>
//         </AccordionItem>
//         <AccordionItem>
//           <AccordionHeader targetId="2">
//             Accordion Item 2
//           </AccordionHeader>
//           <AccordionBody accordionId="2">
//             <strong>This is the second item's accordion body.</strong>
//             You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
//           </AccordionBody>
//         </AccordionItem>
//         <AccordionItem>
//           <AccordionHeader targetId="3">
//             Accordion Item 3
//           </AccordionHeader>
//           <AccordionBody accordionId="3">
//             <strong>This is the third item's accordion body.</strong>
//             You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
//           </AccordionBody>
//         </AccordionItem>
//       </Accordion>
//     </div>
//   );
// };

import React from 'react';
import { Accordion, Card, CardGroup, Button} from 'react-bootstrap';

export default function MenuTest() {

    return (

        // <Card></Card>
        // <h1>Hello</h1> 

        <div>
            {/* <Accordion>
                <Card>
                    <Card.Header>Hello! I'm the card header!</Card.Header>
                        <Accordion.Button>
                            <Card.Body>Hello! I'm the body.</Card.Body>
                        </Accordion.Button>
                </Card>
            </Accordion> */}

<Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
            <CardGroup>
            <Card>
                <Card.Header>Hello! I'm the Card Header.</Card.Header>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
            </Card>
            <Card>
            <Card.Header>Hello! I'm the Card Header.</Card.Header>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
            </Card>
            </CardGroup>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

        </div>
    )
}



