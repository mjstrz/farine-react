import React from 'react';
// import {Collapse} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Accordion from 'react-bootstrap/Accordion';
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
import { Accordion, Card, Button, CardGroup} from 'react-bootstrap';

export default function Menu() {
    return(
        <div class="container">
        <div class="row row-content">
            <div class="col">
                <div class="farineMenu" id="foodMenu">
    
             {/* <!--  Classics --> */}
            <div class="card">
              <div class="card-header" id="classics">
                <h2 class="mb-0">
                  <button class="btn btn-light btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseClassics" aria-expanded="true" aria-controls="collapseOne">
                    Classics
                  </button>
                {/* <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    Classics
                </Accordion.Toggle> */}
                </h2>
              </div>
              {/* <div id="collapseClassics" class="collapse show" aria-labelledby="classics" data-parent="#foodMenu"> */}
    
                <div class="card-body">
                  <p class="cardBody"> Our familiar favorites. </p>    
                                <div class="card-deck">
                                  <div class="card">
                                    <img src="img/menu_croissant.jpeg" class="card-img-top" alt="croissant" />
                                    <div class="card-body">
                                      <h5 class="card-title">Classic Croissant</h5>
                                      <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                        magna aliqua.</p>
                                    </div>
                                    <div class="card-footer">
                                      <large class="text-muted">$3</large>
                                    </div>
                                  </div>
                                  <div class="card">
                                    <img src="img/menu_breakfastPlate.jpeg" class="card-img-top" alt="Farine Breakfast Plate" />
                                    <div class="card-body">
                                      <h5 class="card-title">Farine Breakfast</h5>
                                      <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                        magna aliqua.</p>
                                    </div>
                                    <div class="card-footer">
                                      <large class="text-muted">$10</large>
                                    </div>
                                  </div>
                                  <div class="card">
                                    <img src="img/menu_pancakes.jpeg" class="card-img-top" alt="Pancakes" />
                                    <div class="card-body">
                                      <h5 class="card-title">Pancakes</h5>
                                      <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                        magna aliqua.</p>
                                    </div>
                                    <div class="card-footer">
                                      <large class="text-muted">$7</large>
                                    </div>
                                  </div>
                                </div>
    
                                <div class="card-deck">
                                  <div class="card">
                                    <img src="img/menu_eggsBenedict.jpeg" class="card-img-top" alt="Eggs Benedict" />
                                    <div class="card-body">
                                      <h5 class="card-title">Eggs Benedict</h5>
                                      <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                        magna aliqua..</p>
                                    </div>
                                    <div class="card-footer">
                                      <large class="text-muted">$7</large>
                                    </div>
                                  </div>
                                  <div class="card">
                                    <img src="img/menu_breakfastSandwich.jpeg" class="card-img-top" alt="Breakfast sandwich" />
                                    <div class="card-body">
                                      <h5 class="card-title">Breakfast Sandwich</h5>
                                      <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                        magna aliqua.</p>
                                    </div>
                                    <div class="card-footer">
                                      <large class="text-muted">$9</large>
                                    </div>
                                  </div>
                                  <div class="card">
                                    <img src="img/menu_quiche.jpeg" class="card-img-top" alt="Quiche" />
                                    <div class="card-body">
                                      <h5 class="card-title">Quiche</h5>
                                      <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                        magna aliqua.</p>
                                    </div>
                                    <div class="card-footer">
                                      <large class="text-muted">$7</large>
                                    </div>
                                  </div>
                                </div>
    
                  </div>
                {/* </div> */}
              </div>
            </div>
    
           {/* <!--  Tartines --> */}
            <div class="card">
              <div class="card-header" id="tartines">
                <h2 class="mb-0">
                  <button class="btn btn-light btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTartines" aria-expanded="false" aria-controls="collapseTwo">
                    Tartines
                  </button>
                </h2>
              </div>
              <div id="collapseTartines" class="collapse" aria-labelledby="tartines" data-parent="#foodMenu">
                <div class="card-body">
                  <p class="cardBody"> Made fresh daily. </p>
    
                  <div class="card-deck">
                    <div class="card">
                      <img src="img/menu_avoToast.jpeg" class="card-img-top" alt="Avocado Toast" />
                      <div class="card-body">
                        <h5 class="card-title">Avo Toast</h5>
                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                          magna aliqua.</p>
                      </div>
                      <div class="card-footer">
                        <large class="text-muted">$6</large>
                      </div>
                    </div>
                    <div class="card">
                      <img src="img/menu_tartineVegetable.jpeg" class="card-img-top" alt="Vegetable tartine" />
                      <div class="card-body">
                        <h5 class="card-title">Veggie Delight</h5>
                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                          magna aliqua.</p>
                      </div>
                      <div class="card-footer">
                        <large class="text-muted">$7</large>
                      </div>
                    </div>
                    <div class="card">
                      <img src="img/menu_tartineSalmon.jpeg" class="card-img-top" alt="Smoked Salmon Tartine" />
                      <div class="card-body">
                        <h5 class="card-title">Smoked Salmon</h5>
                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                          magna aliqua.</p>
                      </div>
                      <div class="card-footer">
                        <large class="text-muted">$10</large>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    
            {/* <!-- Baguette Sandwiches --> */}
            <div class="card">
              <div class="card-header" id="headingThree">
                <h2 class="mb-0">
                  <button class="btn btn-light btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Baguette Sandwiches
                  </button>
                </h2>
              </div>
              <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#foodMenu">
                <div class="card-body">
    
                 <p class="cardBody">Made fresh daily. </p>
    
                  <div class="card-deck">
                    <div class="card">
                      <img src="img/menu_baguetteJambon.jpeg" class="card-img-top" alt="Jambon Beurre sandwich" />
                      <div class="card-body">
                        <h5 class="card-title">Jambon Beurre</h5>
                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                          magna aliqua.</p>
                      </div>
                      <div class="card-footer">
                        <large class="text-muted">$8</large>
                      </div>
                    </div>
                    <div class="card">
                      <img src="img/menu_croissantJambonBeurre.jpg" class="card-img-top" alt="BLT sandwich" />
                      <div class="card-body">
                        <h5 class="card-title">BLT</h5>
                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                          magna aliqua.</p>
                      </div>
                      <div class="card-footer">
                        <large class="text-muted">$8</large>
                      </div>
                    </div>
                   
    
                  </div>
    
                </div>
              </div>
    
              {/* <!-- Waffles --> */}
              <div class="card">
                <div class="card-header" id="headingWaffles">
                  <h2 class="mb-0">
                    <button class="btn btn-light btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseWaffles" aria-expanded="false" aria-controls="collapseWaffles">
                     Waffles
                    </button>
                  </h2>
                </div>
                <div id="collapseWaffles" class="collapse" aria-labelledby="headingWaffles" data-parent="#foodMenu">
                  <div class="card-body">
                   <p class="cardBody"> Made fresh daily. </p>
    
                    <div class="card-deck">
                      <div class="card">
                        <img src="img/menu_waffleFruit.jpeg" class="card-img-top" alt="Waffle au Fruit" />
                        <div class="card-body">
                          <h5 class="card-title">Waffle au Fruit</h5>
                          <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua.</p>
                        </div>
                        <div class="card-footer">
                          <large class="text-muted">$7</large>
                        </div>
                      </div>
                      <div class="card">
                        <img src="img/menu_waffleNutella.jpeg" class="card-img-top" alt="Waffle with Nutella" />
                        <div class="card-body">
                          <h5 class="card-title">Waffle with Nutella</h5>
                          <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua.</p>
                        </div>
                        <div class="card-footer">
                          <large class="text-muted">$5</large>
                        </div>
                      </div>
                      <div class="card">
                        <img src="img/menu_waffleSavory.jpeg" class="card-img-top" alt="Savory Waffle" />
                        <div class="card-body">
                          <h5 class="card-title">Savory Waffle</h5>
                          <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua.</p>
                        </div>
                        <div class="card-footer">
                          <large class="text-muted">$8</large>
                        </div>
                      </div>
                    </div>
    
                  </div>
                </div>
              </div>
    
             {/* <!--  Breads, Pastries and Desserts  --> */}
              <div class="card">
                <div class="card-header" id="desserts">
                  <h2 class="mb-0">
                    <button class="btn btn-light btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseDesserts" aria-expanded="false" aria-controls="collapseDesserts">
                      Breads, Pastries and Desserts
                    </button>
                  </h2>
                </div>
                <div id="collapseDesserts" class="collapse" aria-labelledby="desserts" data-parent="#foodMenu">
                  <div class="card-body">
                    <p class="cardBody"> Made fresh daily. </p>
    
        {/* <!--     Desserts row 1 --> */}
                    <div class="card-deck">
                      <div class="card">
                        <img src="img/menu_baguette.jpeg" class="card-img-top" alt="French Baguette" />
                        <div class="card-body">
                          <h5 class="card-title">French Baguette</h5>
                          <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua.</p>
                        </div>
                        <div class="card-footer">
                          <large class="text-muted">$3</large>
                        </div>
                      </div>
                      <div class="card">
                        <img src="img/menu_croissant.jpeg" class="card-img-top" alt="croissant" />
                        <div class="card-body">
                          <h5 class="card-title">Classic Croissant</h5>
                          <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua.</p>
                        </div>
                        <div class="card-footer">
                          <large class="text-muted">$3</large>
                        </div>
                      </div>
                      <div class="card">
                        <img src="img/menu_countryLoaf.jpeg" class="card-img-top" alt="Country Loaf" />
                        <div class="card-body">
                          <h5 class="card-title">Country Loaf</h5>
                          <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua.</p>
                        </div>
                        <div class="card-footer">
                          <large class="text-muted">$5</large>
                        </div>
                      </div>
                    </div>
    
     {/* <!--     Desserts row 2 --> */}
                    <div class="card-deck">
                      <div class="card">
                        <img src="img/menu_blueberryTart.jpeg" class="card-img-top" alt="Blueberry Tart" />
                        <div class="card-body">
                          <h5 class="card-title">Blueberry Tart</h5>
                          <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua.</p>
                        </div>
                        <div class="card-footer">
                          <large class="text-muted">$5</large>
                        </div>
                      </div>
                      <div class="card">
                        <img src="img/menu_brownie.jpeg" class="card-img-top" alt="Belgian Chocolate Brownie" />
                        <div class="card-body">
                          <h5 class="card-title">Belgian Chocolate Brownie</h5>
                          <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua.</p>
                        </div>
                        <div class="card-footer">
                          <large class="text-muted">$4</large>
                        </div>
                      </div>
                      <div class="card">
                        <img src="img/menu_eclair.jpeg" class="card-img-top" alt="Eclair" />
                        <div class="card-body">
                          <h5 class="card-title">French Eclair</h5>
                          <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua.</p>
                        </div>
                        <div class="card-footer">
                          <large class="text-muted">$3</large>
                        </div>
                      </div>
                    </div>
    
          {/* <!--     Desserts row 3 --> */}
                    <div class="card-deck">
                      <div class="card">
                        <img src="img/menu_mousseAuChocolat.jpeg" class="card-img-top" alt="Chocolate Mousse" />
                        <div class="card-body">
                          <h5 class="card-title">Mousse Au Chocolat</h5>
                          <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua.</p>
                        </div>
                        <div class="card-footer">
                          <large class="text-muted">$5</large>
                        </div>
                      </div>
                      <div class="card">
                        <img src="img/menu_pumpkinPie.jpeg" class="card-img-top" alt="Pumpkin Pie Slice" />
                        <div class="card-body">
                          <h5 class="card-title">Pumpkin Pie Slice</h5>
                          <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua.</p>
                        </div>
                        <div class="card-footer">
                          <large class="text-muted">$3</large>
                        </div>
                      </div>
                      <div class="card">
                        <img src="img/menu_cheesecake.jpeg" class="card-img-top" alt="Strawberry Cheesecake" />
                        <div class="card-body">
                          <h5 class="card-title">Strawberry Cheesecake</h5>
                          <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua.</p>
                        </div>
                        <div class="card-footer">
                          <large class="text-muted">$4</large>
                        </div>
                      </div>
                    </div>
    
                  </div>
                </div>
    
                
              </div>
    
            {/* <!--   Soups & Salads  --> */}
    
              <div class="card">
                <div class="card-header" id="soupsAndSalads">
                  <h2 class="mb-0">
                    <button class="btn btn-light btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseSoups" aria-expanded="false" aria-controls="collapseSoups">
                      Soups & Salads
                    </button>
                  </h2>
                </div>
                <div id="collapseSoups" class="collapse" aria-labelledby="soupsAndSalads" data-parent="#foodMenu">
                  <div class="card-body">
                    <p class="cardBody"> Made fresh daily. </p>
    
                    <div class="card-deck">
                      <div class="card">
                        <img src="img/menu_Salad.jpeg" class="card-img-top" alt="House Salad" />
                        <div class="card-body">
                          <h5 class="card-title">House Salad</h5>
                          <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua.</p>
                        </div>
                        <div class="card-footer">
                          <large class="text-muted">$10</large>
                        </div>
                      </div>
                      <div class="card">
                        <img src="img/menu_soupFrenchOnion.jpeg" class="card-img-top" alt="French Onion Soup" />
                        <div class="card-body">
                          <h5 class="card-title">French Onion Soup</h5>
                          <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua.</p>
                        </div>
                        <div class="card-footer">
                          <large class="text-muted">$7</large>
                        </div>
                      </div>
                      <div class="card">
                        <img src="img/menu_soupPumpkin.jpeg" class="card-img-top" alt="Pumpkin Soup" />
                        <div class="card-body">
                          <h5 class="card-title">Pumpkin Soup</h5>
                          <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua.</p>
                        </div>
                        <div class="card-footer">
                          <large class="text-muted">$7</large>
                        </div>
                      </div>
                    </div>
    
                  </div>
                </div>
              </div>
    
     {/* <!-- Extras & Sides --> */}
              <div class="card">
                <div class="card-header" id="extras">
                  <h2 class="mb-0">
                    <button class="btn btn-light btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseExtras" aria-expanded="false" aria-controls="collapseExtras">
                      Extras & Sides
                    </button>
                  </h2>
                </div>
                <div id="collapseExtras" class="collapse" aria-labelledby="extras" data-parent="#foodMenu">
                  <div class="card-body">
                    <p class="cardBody"> Made fresh daily. </p>
    
    {/* <!--           Extras row 1 --> */}
    
                    <div class="card-deck">
                      <div class="card">
                        <img src="img/menu_bacon.jpeg" class="card-img-top" alt="Bacon" />
                        <div class="card-body">
                          <h5 class="card-title">Crispy Bacon</h5>
                          <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua.</p>
                        </div>
                        <div class="card-footer">
                          <large class="text-muted">$4</large>
                        </div>
                      </div>
                      <div class="card">
                        <img src="img/menu_toast.jpeg" class="card-img-top" alt="Toast" />
                        <div class="card-body">
                          <h5 class="card-title">Toast with Butter</h5>
                          <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua.</p>
                        </div>
                        <div class="card-footer">
                          <large class="text-muted">$2</large>
                        </div>
                      </div>
                      <div class="card">
                        <img src="img/menu_fries.jpeg" class="card-img-top" alt="French Fries" />
                        <div class="card-body">
                          <h5 class="card-title">French Fries</h5>
                          <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua.</p>
                        </div>
                        <div class="card-footer">
                          <large class="text-muted">$5</large>
                        </div>
                      </div>
                    </div>
    
    {/* <!--     Extras row 2 --> */}
                    <div class="card-deck">
                      <div class="card">
                        <img src="img/menu_avocado.jpeg" class="card-img-top" alt="Avocado" />
                        <div class="card-body">
                          <h5 class="card-title">Avocado</h5>
                          <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua.</p>
                        </div>
                        <div class="card-footer">
                          <large class="text-muted">$3</large>
                        </div>
                      </div>
                      <div class="card">
                        <img src="img/menu_cheese.jpeg" class="card-img-top" alt="Emmenthal Cheese" />
                        <div class="card-body">
                          <h5 class="card-title">Emmenthal Cheese</h5>
                          <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua.</p>
                        </div>
                        <div class="card-footer">
                          <large class="text-muted">$2</large>
                        </div>
                      </div>
                      <div class="card">
                        <img src="img/menu_salmon.jpeg" class="card-img-top" alt="Salmon" />
                        <div class="card-body">
                          <h5 class="card-title">Salmon</h5>
                          <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua.</p>
                        </div>
                        <div class="card-footer">
                          <large class="text-muted">$4</large>
                        </div>
                      </div>
                    </div>
    
    
    
                  </div>
                </div>
              </div>
            </div>
          </div>
    
        </div>
        </div>
          
    )
}