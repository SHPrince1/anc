import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Container, Nav, NavDropdown,} from "react-bootstrap"
import  "../Styles/Navbar.css"



function Navbarcom(){
    return (
     <div className="Navc">
         <img
            className="d-block"
            src="/images/complete2.png"
            alt="Second slide"
          />

    <Navbar bg="primary" variant="dark">
       <Container>
          <Navbar.Brand href="#home">
           <img
              className="d-block"
              src="/images/complete2.png"
              alt="Second slide"
            />
          </Navbar.Brand>

           <Nav className="me-auto">
              <Nav.Link href="#home">HOME</Nav.Link>
              <Nav.Link href="#features">ABOUT</Nav.Link>
              <Nav.Link href="#pricing">OUR SERVICES</Nav.Link>
              <Nav.Link href="#pricing">CONTACT US</Nav.Link>
           </Nav>

      </Container>
      
      </Navbar>

</div>
    )
    
       
    }
export default Navbarcom;