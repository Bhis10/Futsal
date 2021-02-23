import React from 'react';
import './App.css'
import './index.css'
import { Navbar,Nav,Carousel} from 'react-bootstrap';

function Menu() {
    return (
<>
<Navbar>
<Navbar.Brand href="#home"></Navbar.Brand>
    <Nav>
    <img
        src="Pic/l.jpg"
        width="80"
        height="40"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#pricing">About</Nav.Link>
    </Nav>
    </Navbar>
  
  <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100 h-100"
      src="../Pic/e.jpg"
      alt="First slide"
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 h-100"
      src="../Pic/h.jpg"
      alt="Third slide"
    />
    </Carousel.Item>
<Carousel.Item>
    <img
      className="d-block w-100 h-100"
      src="../Pic/l.jpg"
      alt="Third slide"
    />
 </Carousel.Item>
</Carousel>
  </>
  
  )};
   export default Menu;
