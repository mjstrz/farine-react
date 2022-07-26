import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Accordion, Card, Button, CardGroup, Col, Container, Row } from 'react-bootstrap';

export default function Menu() {
    return(
  <div class="container">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Classics</Accordion.Header>
              <Accordion.Body>
                <p>Our Familiar Favorites.</p>
                <Container>
                <CardGroup>
                  <Row>
                    <Card className='col-md-4'>
                      <Card.Img src="img/menu_croissant.jpeg" alt="croissant" />
                        <Card.Body>
                          <Card.Title>Classic Croissant</Card.Title>
                            <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                        magna aliqua.</Card.Text>
                        </Card.Body>
                        <Card.Footer><large class="text-muted">$3</large></Card.Footer>           
                    </Card>
                    <Card className='col-md-4'>
                      <Card.Img src="img/menu_breakfastPlate.jpeg" alt="Farine Breakfast Plate" />
                        <Card.Body>
                          <Card.Title>Farine Breakfast</Card.Title>
                            <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                        magna aliqua.</Card.Text>
                        </Card.Body>
                        <Card.Footer><large class="text-muted">$10</large></Card.Footer>    
                    </Card>
                    <Card className='col-md-4'>
                      <Card.Img src="img/menu_pancakes.jpeg" class="card-img-top" alt="Pancakes" />
                        <Card.Body>
                          <Card.Title>Pancakes</Card.Title>
                          <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                        magna aliqua.</Card.Text>
                        </Card.Body>
                        <Card.Footer><large class="text-muted">$7</large></Card.Footer>
                    </Card>
                    </Row>
                    <Row>
                    <Card className='col-md-4'>
                      <Card.Img src="img/menu_eggsBenedict.jpeg" class="card-img-top" alt="Eggs Benedict"/>
                        <Card.Body>
                          <Card.Title>Eggs Benedict</Card.Title>
                            <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                        magna aliqua..</Card.Text>
                        </Card.Body>
                        <Card.Footer> <large class="text-muted">$7</large></Card.Footer>
                    </Card>
                    
                    <Card className='col-md-4'>
                      <Card.Img src="img/menu_breakfastSandwich.jpeg" class="card-img-top" alt="Breakfast sandwich" />
                        <Card.Body>
                          <Card.Title>Breakfast Sandwich</Card.Title>
                            <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                        magna aliqua.</Card.Text>
                        </Card.Body>
                        <Card.Footer><large class="text-muted">$9</large></Card.Footer>
                    </Card>
                    <Card className='col-md-4'>
                      <Card.Img src="img/menu_quiche.jpeg" class="card-img-top" alt="Quiche"/>
                        <Card.Body>
                          <Card.Title>Quiche</Card.Title>
                            <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                        magna aliqua.</Card.Text>
                        </Card.Body>
                        <Card.Footer><large class="text-muted">$7</large></Card.Footer>
                    </Card>
                    </Row>  
                </CardGroup>
                </Container>
              </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>Tartines</Accordion.Header>
              <Accordion.Body>
                <p>Made Fresh Daily.</p>
                <CardGroup>
                  <Card>
                    <Card.Img src="img/menu_avoToast.jpeg" class="card-img-top" alt="Avocado Toast" />
                      <Card.Body>
                        <Card.Title>Avo Toast</Card.Title>
                          <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua.</Card.Text>
                      </Card.Body>
                      <Card.Footer><large className="text-muted">$6</large></Card.Footer>
                    </Card>
                    <Card>
                      <Card.Img src="img/menu_tartineVegetable.jpeg" class="card-img-top" alt="Vegetable tartine" />
                        <Card.Body>
                          <Card.Title>Veggie Delight</Card.Title>
                          <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                          magna aliqua.</Card.Text>
                        </Card.Body>
                        <Card.Footer><large className="text-muted">$7</large></Card.Footer>
                    </Card>
                    <Card>
                      <Card.Img src="img/menu_tartineSalmon.jpeg" class="card-img-top" alt="Smoked Salmon Tartine" />
                        <Card.Body>
                          <Card.Title>Smoked Salmon</Card.Title>
                            <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                          magna aliqua.</Card.Text>
                        </Card.Body>
                        <Card.Footer><large class="text-muted">$10</large></Card.Footer>
                    </Card>
                </CardGroup>
              </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>Baguette Sandwiches</Accordion.Header>
              <Accordion.Body>
                <p>Made Fresh Daily.</p>
                 <CardGroup>
                 <Card>
                    <Card.Img src="img/menu_baguette.jpeg" class="card-img-top" alt="French Baguette"/>
                      <Card.Body>
                        <Card.Title>French Baguette</Card.Title>
                          <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua.</Card.Text>                
                      </Card.Body>
                      <Card.Footer><large class="text-muted">$3</large></Card.Footer>
                  </Card>
                  <Card>
                    <Card.Img src="img/menu_baguetteJambon.jpeg" class="card-img-top" alt="Jambon Beurre sandwich" />
                      <Card.Body>
                        <Card.Title>Jambon Beurre</Card.Title>
                          <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                          magna aliqua.</Card.Text>
                      </Card.Body>
                      <Card.Footer><large class="text-muted">$8</large></Card.Footer>
                  </Card>
                  <Card>
                    <Card.Img src="img/menu_croissantJambonBeurre.jpg" class="card-img-top" alt="BLT sandwich" />
                      <Card.Body>
                        <Card.Title>BLT</Card.Title> 
                          <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                          magna aliqua.</Card.Text>
                      </Card.Body>
                      <Card.Footer><large class="text-muted">$8</large></Card.Footer>
                  </Card>
                </CardGroup>
              </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3">
            <Accordion.Header>Waffles</Accordion.Header>
              <Accordion.Body>
              <p>Made Fresh Daily.</p>
                <CardGroup>
                <Card>
                    <Card.Img src="img/menu_waffleFruit.jpeg" class="card-img-top" alt="Waffle au Fruit" />
                      <Card.Body>
                        <Card.Title> Waffle au Fruit</Card.Title>
                          <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua.</Card.Text>
                      </Card.Body>
                      <Card.Footer><large class="text-muted">$7</large></Card.Footer>
                  </Card>
                  <Card>
                    <Card.Img src="img/menu_waffleNutella.jpeg" class="card-img-top" alt="Waffle with Nutella"/>
                      <Card.Body>
                        <Card.Title>Waffle with Nutella</Card.Title>
                          <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua.</Card.Text>                        
                      </Card.Body>
                      <Card.Footer><large class="text-muted">$5</large></Card.Footer>
                  </Card>
                  <Card>
                    <Card.Img src="img/menu_waffleSavory.jpeg" class="card-img-top" alt="Savory Waffle"/>
                      <Card.Body>
                        <Card.Title>Savory Waffle</Card.Title>
                          <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua.</Card.Text>                
                      </Card.Body>
                      <Card.Footer><large class="text-muted">$8</large></Card.Footer>
                  </Card>
                </CardGroup>
              </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="4">
            <Accordion.Header>Breads, Pastries and Desserts</Accordion.Header>
              <Accordion.Body>
                <p>Made Fresh Daily.</p>
                <Container>
                <CardGroup>
                  <Row>
                    <Card className='col-md-4'>
                      <Card.Img src="img/menu_croissant.jpeg" class="card-img-top" alt="croissant"/>
                        <Card.Body>
                          <Card.Title>Classic Croissant</Card.Title>
                            <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                              magna aliqua.</Card.Text>                
                        </Card.Body>
                        <Card.Footer><large class="text-muted">$3</large></Card.Footer>
                    </Card>
                    <Card className='col-md-4'>
                      <Card.Img src="img/menu_countryLoaf.jpeg" class="card-img-top" alt="Country Loaf" />
                        <Card.Body>
                          <Card.Title>Country Loaf</Card.Title>
                            <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                              magna aliqua.</Card.Text>                
                        </Card.Body>
                        <Card.Footer><large class="text-muted">$5</large></Card.Footer>
                    </Card>
                    <Card className='col-md-4'>
                      <Card.Img  src="img/menu_blueberryTart.jpeg" class="card-img-top" alt="Blueberry Tart"/>
                        <Card.Body>
                          <Card.Title>Blueberry Tart</Card.Title>
                            <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                              magna aliqua.</Card.Text>                
                        </Card.Body>
                        <Card.Footer><large class="text-muted">$5</large></Card.Footer>
                    </Card>
                  </Row>
                  <Row>
                    <Card className='col-md-4'>
                      <Card.Img src="img/menu_brownie.jpeg" class="card-img-top" alt="Belgian Chocolate Brownie"/>
                        <Card.Body>
                          <Card.Title>Belgian Chocolate Brownie</Card.Title>
                            <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                              magna aliqua.</Card.Text>                
                        </Card.Body>
                        <Card.Footer><large class="text-muted">$4</large></Card.Footer>
                    </Card>
                    <Card className='col-md-4'>
                      <Card.Img src="img/menu_eclair.jpeg" class="card-img-top" alt="Eclair"/>
                        <Card.Body>
                          <Card.Title>French Eclair</Card.Title>
                            <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                              magna aliqua.</Card.Text>                
                        </Card.Body>
                        <Card.Footer><large class="text-muted">$3</large></Card.Footer>
                    </Card>
                    <Card className='col-md-4'>
                      <Card.Img src="img/menu_mousseAuChocolat.jpeg" class="card-img-top" alt="Chocolate Mousse"/>
                        <Card.Body>
                          <Card.Title>Mousse Au Chocolat</Card.Title>
                            <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                              magna aliqua.</Card.Text>                
                        </Card.Body>
                        <Card.Footer><large class="text-muted">$5</large></Card.Footer>
                    </Card>
                  </Row>
                  <Row>
                    <Card className='col-md-5'>
                      <Card.Img src="img/menu_pumpkinPie.jpeg" class="card-img-top" alt="Pumpkin Pie Slice"/>
                        <Card.Body>
                          <Card.Title>Pumpkin Pie Slice</Card.Title>
                            <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                              magna aliqua.</Card.Text>                
                        </Card.Body>
                        <Card.Footer><large class="text-muted">$3</large></Card.Footer>
                    </Card>
                    <Card className='col-md-5'>
                      <Card.Img src="img/menu_cheesecake.jpeg" class="card-img-top" alt="Strawberry Cheesecake" />
                        <Card.Body>
                          <Card.Title>Strawberry Cheesecake</Card.Title>
                            <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                              magna aliqua.</Card.Text>                
                        </Card.Body>
                        <Card.Footer><large class="text-muted">$4</large></Card.Footer>
                    </Card>
                  </Row>
                </CardGroup>
                </Container>
              </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="5">
            <Accordion.Header>Soups & Salads</Accordion.Header>
              <Accordion.Body>
                <p>Made Fresh Daily.</p> 
                <CardGroup>
                  <Card>
                    <Card.Img src="img/menu_Salad.jpeg" class="card-img-top" alt="House Salad" />
                      <Card.Body>
                        <Card.Title>House Salad</Card.Title>
                          <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua.</Card.Text>                
                      </Card.Body>
                      <Card.Footer><large class="text-muted">$10</large></Card.Footer>
                  </Card>
                  <Card>
                    <Card.Img src="img/menu_soupFrenchOnion.jpeg" class="card-img-top" alt="French Onion Soup" />
                      <Card.Body>
                        <Card.Title>French Onion Soup</Card.Title>
                          <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua.</Card.Text>                
                      </Card.Body>
                      <Card.Footer><large class="text-muted">$7</large></Card.Footer>
                  </Card>
                  <Card>
                    <Card.Img src="img/menu_soupPumpkin.jpeg" class="card-img-top" alt="Pumpkin Soup" />
                      <Card.Body>
                        <Card.Title>Pumpkin Soup</Card.Title>
                          <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua.</Card.Text>                
                      </Card.Body>
                      <Card.Footer><large class="text-muted">$7</large></Card.Footer>
                  </Card>
                </CardGroup>
              </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="6">
            <Accordion.Header>Extras & Sides</Accordion.Header>
              <Accordion.Body>
                <p>That little something extra.</p>
                <Container>
                <CardGroup>
                  <Row>
                    <Card className='col-md-4'>
                        <Card.Img src="img/menu_bacon.jpeg" class="card-img-top" alt="Bacon"/>
                          <Card.Body>
                            <Card.Title>Crispy Bacon</Card.Title>
                              <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                magna aliqua.</Card.Text>                
                          </Card.Body>
                          <Card.Footer><large class="text-muted">$4</large></Card.Footer>
                      </Card>
                      <Card className='col-md-4'>
                        <Card.Img  src="img/menu_toast.jpeg" class="card-img-top" alt="Toast" />
                          <Card.Body>
                            <Card.Title>Toast with Butter</Card.Title>
                              <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                magna aliqua.</Card.Text>                
                          </Card.Body>
                          <Card.Footer><large class="text-muted">$2</large></Card.Footer>
                      </Card>
                      <Card className='col-md-4'>
                        <Card.Img src="img/menu_fries.jpeg" class="card-img-top" alt="French Fries"/>
                          <Card.Body>
                            <Card.Title>French Fries</Card.Title>
                              <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                magna aliqua.</Card.Text>                
                          </Card.Body>
                          <Card.Footer><large class="text-muted">$5</large></Card.Footer>
                      </Card>
                      </Row>
                      <Row>
                        <Card className='col-md-4'>
                          <Card.Img src="img/menu_avocado.jpeg" class="card-img-top" alt="Avocado" />
                            <Card.Body>
                              <Card.Title>Avocado</Card.Title>
                                <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                  magna aliqua.</Card.Text>                
                            </Card.Body>
                            <Card.Footer><large class="text-muted">$3</large></Card.Footer>
                        </Card>
                        <Card className='col-md-4'>
                          <Card.Img src="img/menu_cheese.jpeg" class="card-img-top" alt="Emmenthal Cheese"/>
                            <Card.Body>
                              <Card.Title>Emmenthal Cheese</Card.Title>
                                <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                  magna aliqua.</Card.Text>
                            </Card.Body>
                            <Card.Footer><large class="text-muted">$2</large></Card.Footer>
                        </Card>
                        <Card className='col-md-4'>
                          <Card.Img src="img/menu_salmon.jpeg" class="card-img-top" alt="Salmon" />
                            <Card.Body>
                              <Card.Title>Salmon</Card.Title>
                                <Card.Text></Card.Text>
                            </Card.Body>
                            <Card.Footer><large class="text-muted">$4</large></Card.Footer>
                        </Card>
                      </Row>
                    </CardGroup>
                </Container>
              </Accordion.Body>
            </Accordion.Item>

          <Accordion.Item eventKey="7">
            <Accordion.Header>Coffee & Tea</Accordion.Header>
              <Accordion.Body>
                <p>Enjoy a cuppa.</p>
                <CardGroup>
                  <Card className='col-md-4'>
                      <Card.Img src="img/cappucino.jpg" alt="cappucino" />
                        <Card.Body>
                          <Card.Title>Capuccino</Card.Title>
                            <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                  magna aliqua.</Card.Text>
                        </Card.Body>
                        <Card.Footer><large class="text-muted">$2</large></Card.Footer>
                    </Card>
                    <Card className='col-md-4'>
                    <Card.Img src="img/latte.jpg" alt="latte" />
                      <Card.Body>
                        <Card.Title>Latte</Card.Title>
                          <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                  magna aliqua.</Card.Text>
                      </Card.Body>
                      <Card.Footer><large class="text-muted">$2</large></Card.Footer>
                  </Card>
                  <Card className='col-md-4'>
                    <Card.Img src="img/tea.jpg" alt="teapot and cups"/>
                      <Card.Body>
                        <Card.Title>Tea</Card.Title>
                          <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                  magna aliqua.</Card.Text>
                      </Card.Body>
                      <Card.Footer><large class="text-muted">$2</large></Card.Footer>
                  </Card>
                </CardGroup>
              </Accordion.Body>
          </Accordion.Item>

          </Accordion>
          </div>
          
    )
}